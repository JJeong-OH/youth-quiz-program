import { getFirestore, collection, addDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { allQuestions, topicDescriptions } from './questions.js';
import { renderResultPage, surveyTopics } from './common.js';

let db;
let currentTopicIndex = 0;
let currentPageIndex = 0;
let categoryScores = {};

document.addEventListener('DOMContentLoaded', function() {
    if (window.firebaseApp) {
        db = getFirestore(window.firebaseApp);
    } else {
        console.error("Firebase 앱 인스턴스를 찾을 수 없습니다. index.html을 확인해주세요.");
        return;
    }

    const elements = {
        startPage: document.getElementById('start-page'),
        startButton: document.getElementById('start-button'),
        quizPage: document.getElementById('quiz-page'),
        topicTransitionPage: document.getElementById('topic-transition-page'),
        continueButton: document.getElementById('continue-button'),
        pageTitle: document.getElementById('page-title'),
        quizDescriptionArea: document.getElementById('quiz-description-area'),
        quizForm: document.getElementById('quiz-form'),
        prevButton: document.getElementById('prev-button'),
        nextButton: document.getElementById('next-button'),
        copyLinkButton: document.getElementById('copy-link-button'),
        userNameInput: document.getElementById('userName'),
        userBirthdateInput: document.getElementById('userBirthdate'),
        programModal: document.getElementById('program-modal'),
        modalCloseButton: document.querySelector('.close-button'),
        resultLink: document.getElementById('result-link'),
    };

    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('id');

    if (docId) {
        elements.startPage?.classList.add('hidden');
        loadResultFromFirestore(docId);
    } else {
        elements.startPage?.classList.remove('hidden');
        if (elements.startButton) {
            elements.startButton.addEventListener('click', function() {
                const userName = elements.userNameInput.value.trim();
                const userBirthdate = elements.userBirthdateInput.value.trim();
                if (!userName || !userBirthdate) {
                    alert("이름과 생년월일을 모두 입력해 주세요.");
                    return;
                }
                elements.startPage?.classList.add('hidden');
                elements.quizPage?.classList.remove('hidden');
                initializeSurvey();
                renderQuizPage();
            });
        }
    }
    
    if (elements.copyLinkButton) {
        elements.copyLinkButton.addEventListener('click', async () => {
            const linkText = elements.resultLink ? elements.resultLink.href : '';
            if (!linkText) return;
            try {
                await navigator.clipboard.writeText(linkText);
                alert('링크가 복사되었습니다!');
            } catch (err) {
                console.error('클립보드 복사 실패:', err);
                alert('클립보드 복사에 실패했습니다.');
            }
        });
    }
    
    if (elements.modalCloseButton) {
        elements.modalCloseButton.addEventListener('click', function() {
            elements.programModal?.classList.add('hidden');
        });
    }

    if (elements.programModal) {
        window.addEventListener('click', function(event) {
            if (event.target === elements.programModal) {
                elements.programModal.classList.add('hidden');
            }
        });
    }

    function initializeSurvey() {
        categoryScores = {};
        currentTopicIndex = 0;
        currentPageIndex = 0;
        
        for (const topic in allQuestions) {
            categoryScores[topic] = {};
            for (const category in allQuestions[topic]) {
                categoryScores[topic][category] = 0;
            }
        }
    }
    
    function renderQuizPage() {
        try {
            const currentTopic = surveyTopics[currentTopicIndex];
            const currentCategories = Object.keys(allQuestions[currentTopic]);
            const currentCategory = currentCategories[currentPageIndex];

            if (elements.pageTitle) elements.pageTitle.textContent = `${currentTopic}`;
            
            if (elements.quizDescriptionArea) {
                const descriptionData = topicDescriptions[currentCategory];
                let descHtml = '';

                if (descriptionData && descriptionData.description) {
                    descHtml = `
                        <h4>${currentCategory}</h4>
                        <ul class="description-list" style="text-align: left; padding-left: 20px; margin-bottom: 0;">
                            ${descriptionData.description.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    `;
                }

                descHtml += `<p style="margin-top: 20px;">아래 문항들을 읽고, 본인에게 해당하는 정도를 각각 선택해 주세요.</p>`;
                elements.quizDescriptionArea.innerHTML = descHtml;
            }

            if (elements.quizForm) elements.quizForm.innerHTML = '';
            
            // --- ⬇️ 여러 질문을 모두 화면에 표시하도록 수정 ⬇️ ---
            const currentQuestions = allQuestions[currentTopic]?.[currentCategory] || [];
            
            currentQuestions.forEach((questionText, index) => {
                const questionContainer = document.createElement('div');
                questionContainer.classList.add('question-container');
                questionContainer.dataset.index = index;
                
                const p = document.createElement('p');
                // 각 질문 앞에 번호를 붙여줌
                p.textContent = `${index + 1}. ${questionText}`;
                questionContainer.appendChild(p);

                const optionsDiv = document.createElement('div');
                optionsDiv.classList.add('options');
                
                const optionsData = [
                    { value: 1, text: '전혀 그렇지 않다' },
                    { value: 2, text: '그렇지 않다' },
                    { value: 3, text: '보통이다' },
                    { value: 4, text: '그렇다' },
                    { value: 5, text: '매우 그렇다' }
                ];

                optionsData.forEach(option => {
                    const input = document.createElement('input');
                    input.type = 'radio';
                    // 각 질문의 name 속성을 고유하게 만들어줌
                    input.name = `q${currentTopicIndex}-${currentPageIndex}-${index}`;
                    input.value = option.value;
                    input.id = `q${currentTopicIndex}-${currentPageIndex}-${index}-${option.value}`;
                    
                    const label = document.createElement('label');
                    label.htmlFor = input.id;
                    label.textContent = option.text;

                    optionsDiv.appendChild(input);
                    optionsDiv.appendChild(label);
                });

                questionContainer.appendChild(optionsDiv);
                elements.quizForm?.appendChild(questionContainer);
            });

            elements.prevButton?.classList.toggle('hidden', currentPageIndex === 0 && currentTopicIndex === 0);

            const isLastPage = (currentTopicIndex >= surveyTopics.length - 1) && (currentPageIndex >= currentCategories.length - 1);
            if (elements.nextButton) elements.nextButton.textContent = isLastPage ? '결과 보기' : '다음';

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch(error) {
            console.error("퀴즈 페이지 렌더링 중 오류:", error);
            alert("퀴즈 페이지를 불러오는 중 오류가 발생했습니다.");
        }
    }

    if (elements.nextButton) {
        elements.nextButton.addEventListener('click', function() {
            try {
                const currentTopic = surveyTopics[currentTopicIndex];
                const currentCategories = Object.keys(allQuestions[currentTopic]);
                const currentCategory = currentCategories[currentPageIndex];
                const currentQuestions = allQuestions[currentTopic][currentCategory];
                
                let allAnswered = true;
                let pageScore = 0;
                let firstUnansweredQuestion = null;
                
                document.querySelectorAll('.question-container').forEach(el => {
                    el.style.borderColor = '#ddd';
                });

                currentQuestions.forEach((_, index) => {
                    const answeredOption = document.querySelector(`input[name="q${currentTopicIndex}-${currentPageIndex}-${index}"]:checked`);
                    if (!answeredOption) {
                        allAnswered = false;
                        const questionContainer = document.querySelector(`.question-container[data-index='${index}']`);
                        if(questionContainer) {
                            questionContainer.style.borderColor = 'red';
                            if (!firstUnansweredQuestion) {
                                firstUnansweredQuestion = questionContainer;
                            }
                        }
                    } else {
                        pageScore += parseInt(answeredOption.value);
                    }
                });

                if (!allAnswered) {
                    alert('모든 질문에 응답해 주세요! 답변하지 않은 항목은 빨간색으로 표시됩니다.');
                    firstUnansweredQuestion?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }
                
                categoryScores[currentTopic][currentCategory] = pageScore;
                
                if (currentPageIndex < currentCategories.length - 1) {
                    currentPageIndex++;
                    renderQuizPage();
                } else if (currentTopicIndex < surveyTopics.length - 1) {
                    elements.quizPage?.classList.add('hidden');
                    showTopicTransitionPage();
                } else {
                    showResultPage();
                }
            } catch(error) {
                console.error("다음 버튼 클릭 중 오류:", error);
                alert("오류가 발생했습니다.");
            }
        });
    }

    if (elements.prevButton) {
        elements.prevButton.addEventListener('click', function() {
            try {
                if (currentPageIndex > 0) {
                    currentPageIndex--;
                } else if (currentTopicIndex > 0) {
                    currentTopicIndex--;
                    const prevCategories = Object.keys(allQuestions[surveyTopics[currentTopicIndex]]);
                    currentPageIndex = prevCategories.length - 1;
                }
                renderQuizPage();
            } catch(error) {
                console.error("이전 버튼 클릭 중 오류:", error);
                alert("오류가 발생했습니다.");
            }
        });
    }
    
    if (elements.continueButton) {
        elements.continueButton.addEventListener('click', function() {
            try {
                elements.topicTransitionPage?.classList.add('hidden');
                elements.quizPage?.classList.remove('hidden');
                
                currentTopicIndex++;
                currentPageIndex = 0;
                
                renderQuizPage();
            } catch(error) {
                console.error("설문 이어서하기 버튼 클릭 중 오류:", error);
                alert("오류가 발생했습니다.");
            }
        });
    }

    function showTopicTransitionPage() {
        const transitionTitle = document.getElementById('transition-title');
        if (transitionTitle) transitionTitle.textContent = surveyTopics[currentTopicIndex + 1];
        elements.topicTransitionPage?.classList.remove('hidden');
    }

    async function showResultPage() {
        try {
            const userName = elements.userNameInput.value;
            const userBirthdate = elements.userBirthdateInput.value;

            const allCategoryScores = Object.values(categoryScores).reduce((acc, val) => Object.assign(acc, val), {});
            
            const sortedCategoriesHigh = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[b] - allCategoryScores[a]);
            const highestScore = allCategoryScores[sortedCategoriesHigh[0]];
            const highestScoreCategories = sortedCategoriesHigh.filter(category => allCategoryScores[category] === highestScore);
            const highestScoreCategory = highestScoreCategories[0];
            
            let strongestMessage = '';
            const count = highestScoreCategories.length;
            if (count >= 5) {
                strongestMessage = `**${highestScoreCategories.join(', ')}** 등 여러 분야에서 뛰어난 역량을 보이고 있습니다.`;
            } else if (count >= 2) {
                strongestMessage = `**${highestScoreCategories.join(', ')}** 분야에서 뛰어난 강점을 가지고 있습니다.`;
            } else {
                strongestMessage = `당신의 가장 뚜렷한 강점 분야는 **<${highestScoreCategory}>** 입니다.`;
            }

            const sortedCategoriesLow = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[a] - allCategoryScores[b]);
            const lowestScore = allCategoryScores[sortedCategoriesLow[0]];
            const weakestScoreCategories = sortedCategoriesLow.filter(category => allCategoryScores[category] === lowestScore);
            
            const docId = await saveSurveyResultsToFirestore(categoryScores, userName, userBirthdate, highestScoreCategory, weakestScoreCategories.join(', '));
            renderResultPage(categoryScores, userName, docId, highestScoreCategory, strongestMessage, weakestScoreCategories);

        } catch(error) {
            console.error("결과 페이지 로드 중 오류:", error);
            alert("결과를 불러오는 중 오류가 발생했습니다.");
        }
    }

    async function saveSurveyResultsToFirestore(data, userName, userBirthdate, highestScoreCategory, weakestScoreCategory) {
        try {
            const docRef = await addDoc(collection(db, "survey_results"), {
                timestamp: new Date(),
                userName: userName,
                userBirthdate: userBirthdate,
                scores: data,
                highestScoreCategory: highestScoreCategory,
                weakestScoreCategory: weakestScoreCategory
            });
            return docRef.id;
        } catch (e) {
            console.error("Error adding document: ", e);
            return null;
        }
    }
    
    async function loadResultFromFirestore(id) {
        try {
            const docRef = doc(db, "survey_results", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const scores = data.scores;
                const userName = data.userName;
                const highestScoreCategory = data.highestScoreCategory;
                
                const allCategoryScores = Object.values(scores).reduce((acc, val) => Object.assign(acc, val), {});
                const highestScore = allCategoryScores[highestScoreCategory];
                const highestScoreCategories = Object.keys(allCategoryScores).filter(category => allCategoryScores[category] === highestScore);
                
                let strongestMessage = '';
                const count = highestScoreCategories.length;
                if (count >= 5) {
                    strongestMessage = `**${highestScoreCategories.join(', ')}** 등 여러 분야에서 뛰어난 역량을 보이고 있습니다.`;
                } else if (count >= 2) {
                    strongestMessage = `**${highestScoreCategories.join(', ')}** 분야에서 뛰어난 강점을 가지고 있습니다.`;
                } else {
                    strongestMessage = `당신의 가장 뚜렷한 강점 분야는 **<${highestScoreCategory}>** 입니다.`;
                }
                
                const weakestScoreCategories = data.weakestScoreCategory ? data.weakestScoreCategory.split(', ') : [];

                renderResultPage(scores, userName, id, highestScoreCategory, strongestMessage, weakestScoreCategories);
            } else {
                alert("유효하지 않은 결과 링크입니다.");
                elements.startPage?.classList.remove('hidden');
            }
        } catch(e) {
            console.error("Firestore에서 문서 로딩 중 오류:", e);
            alert("결과를 불러오는 중 오류가 발생했습니다.");
            elements.startPage?.classList.remove('hidden');
        }
    }
});