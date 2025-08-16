import { getFirestore, collection, addDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { renderResultPage, showProgramModal, surveyTopics, drawRadarChart, chartInstances, recommendPrograms } from './common.js';

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
        goToSearchButton: document.getElementById('go-to-search-button'),
        quizPage: document.getElementById('quiz-page'),
        topicTransitionPage: document.getElementById('topic-transition-page'),
        continueButton: document.getElementById('continue-button'),
        pageTitle: document.getElementById('page-title'),
        pageDescription: document.getElementById('page-description'),
        quizForm: document.getElementById('quiz-form'),
        prevButton: document.getElementById('prev-button'),
        nextButton: document.getElementById('next-button'),
        copyLinkButton: document.getElementById('copy-link-button'),
        userNameInput: document.getElementById('userName'),
        userBirthdateInput: document.getElementById('userBirthdate'),
        programModal: document.getElementById('program-modal'),
        modalCloseButton: document.querySelector('.close-button'),
        modalImage: document.getElementById('modal-image'),
        modalTitle: document.getElementById('modal-title'),
        modalDescription: document.getElementById('modal-description'),
        resultLink: document.getElementById('result-link'),
    };

    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('id');

    if (docId) {
        loadResultFromFirestore(docId);
    } else {
        if (elements.startPage) elements.startPage.classList.remove('hidden');
    }

    if (elements.startButton) {
        elements.startButton.addEventListener('click', function() {
            const userName = elements.userNameInput.value.trim();
            const userBirthdate = elements.userBirthdateInput.value.trim();
            if (!userName || !userBirthdate) {
                alert("이름과 생년월일을 모두 입력해 주세요.");
                return;
            }
            if (elements.startPage) elements.startPage.classList.add('hidden');
            if (elements.quizPage) elements.quizPage.classList.remove('hidden');
            initializeSurvey();
            renderQuizPage();
        });
    }
    
    if (elements.goToSearchButton) {
        elements.goToSearchButton.addEventListener('click', () => {
            window.location.href = 'search.html';
        });
    }

    if (elements.copyLinkButton) {
        elements.copyLinkButton.addEventListener('click', async () => {
            const linkText = elements.resultLink ? elements.resultLink.textContent : '';
            try {
                await navigator.clipboard.writeText(linkText);
                alert('링크가 복사되었습니다!');
            } catch (err) {
                console.error('클립보드 복사 실패:', err);
                alert('클립보드 복사에 실패했습니다. 수동으로 복사해 주세요.');
            }
        });
    }
    
    if (elements.modalCloseButton) {
        elements.modalCloseButton.addEventListener('click', function() {
            if (elements.programModal) elements.programModal.classList.add('hidden');
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
            if (elements.pageDescription) elements.pageDescription.textContent = `${currentPageIndex + 1}. ${currentCategory}에 대한 질문입니다.`;

            if (elements.quizForm) elements.quizForm.innerHTML = '';
            
            const currentQuestions = allQuestions[currentTopic]?.[currentCategory] || [];
            
            currentQuestions.forEach((questionText, index) => {
                const questionContainer = document.createElement('div');
                questionContainer.classList.add('question-container');
                questionContainer.dataset.index = index;
                
                const p = document.createElement('p');
                p.textContent = `${questionText}`;
                questionContainer.appendChild(p);

                const optionsDiv = document.createElement('div');
                optionsDiv.classList.add('options');
                
                const optionsData = [
                    { value: 1, text: '1. 전혀 그렇지 않다' },
                    { value: 2, text: '2. 그렇지 않다' },
                    { value: 3, text: '3. 보통이다' },
                    { value: 4, text: '4. 그렇다' },
                    { value: 5, text: '5. 매우 그렇다' }
                ];

                optionsData.forEach(option => {
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `q${currentTopicIndex}-${currentPageIndex}-${index}`;
                    input.value = option.value;
                    input.id = `q${currentTopicIndex}-${currentPageIndex}-${index}-${option.value}`;
                    
                    const label = document.createElement('label');
                    label.htmlFor = `q${currentTopicIndex}-${currentPageIndex}-${index}-${option.value}`;
                    label.textContent = option.text;

                    optionsDiv.appendChild(input);
                    optionsDiv.appendChild(label);
                });

                questionContainer.appendChild(optionsDiv);
                if (elements.quizForm) elements.quizForm.appendChild(questionContainer);
            });

            if (elements.prevButton) {
                elements.prevButton.classList.toggle('hidden', currentPageIndex === 0 && currentTopicIndex === 0);
            }

            const nextButtonText = (currentTopicIndex < surveyTopics.length - 1 || currentPageIndex < currentCategories.length - 1) ? '다음' : '결과 보기';
            if (elements.nextButton) elements.nextButton.textContent = nextButtonText;

            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch(error) {
            console.error("퀴즈 페이지 렌더링 중 오류:", error);
            alert("퀴즈 페이지를 불러오는 중 오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
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
                    if (firstUnansweredQuestion) {
                        firstUnansweredQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    return;
                }
                
                categoryScores[currentTopic][currentCategory] = pageScore;
                
                if (currentPageIndex < currentCategories.length - 1) {
                    currentPageIndex++;
                    renderQuizPage();
                } else if (currentTopicIndex < surveyTopics.length - 1) {
                    if (elements.quizPage) elements.quizPage.classList.add('hidden');
                    showTopicTransitionPage();
                } else {
                    showResultPage();
                }
            } catch(error) {
                console.error("다음 버튼 클릭 중 오류:", error);
                alert("오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
            }
        });
    }

    if (elements.prevButton) {
        elements.prevButton.addEventListener('click', function() {
            try {
                if (currentPageIndex > 0) {
                    currentPageIndex--;
                    renderQuizPage();
                } else if (currentTopicIndex > 0) {
                    if (elements.topicTransitionPage) elements.topicTransitionPage.classList.remove('hidden');
                    if (elements.quizPage) elements.quizPage.classList.add('hidden');
                    currentTopicIndex--;
                    const prevCategories = Object.keys(allQuestions[surveyTopics[currentTopicIndex]]);
                    currentPageIndex = prevCategories.length - 1;
                    renderQuizPage();
                }
            } catch(error) {
                console.error("이전 버튼 클릭 중 오류:", error);
                alert("오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
            }
        });
    }
    
    if (elements.continueButton) {
        elements.continueButton.addEventListener('click', function() {
            try {
                if (elements.topicTransitionPage) elements.topicTransitionPage.classList.add('hidden');
                if (elements.quizPage) elements.quizPage.classList.remove('hidden');
                
                currentTopicIndex++;
                currentPageIndex = 0;
                
                renderQuizPage();
            } catch(error) {
                console.error("설문 이어서하기 버튼 클릭 중 오류:", error);
                alert("오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
            }
        });
    }

    function showTopicTransitionPage() {
        if (elements.transitionTitle) elements.transitionTitle.textContent = surveyTopics[currentTopicIndex + 1];
        if (elements.topicTransitionPage) elements.topicTransitionPage.classList.remove('hidden');
    }

    async function showResultPage() {
        try {
            const userName = elements.userNameInput.value;
            const userBirthdate = elements.userBirthdateInput.value;

            const docId = await saveSurveyResultsToFirestore(categoryScores, userName, userBirthdate);
            renderResultPage(categoryScores, userName, docId);

        } catch(error) {
            console.error("결과 페이지 로드 중 오류:", error);
            alert("결과를 불러오는 중 오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
        }
    }

    async function saveSurveyResultsToFirestore(data, userName, userBirthdate) {
        try {
            const docRef = await addDoc(collection(db, "survey_results"), {
                timestamp: new Date(),
                userName: userName,
                userBirthdate: userBirthdate,
                scores: data
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
                const docId = id;
                
                renderResultPage(scores, userName, docId);
            } else {
                alert("유효하지 않은 결과 링크입니다.");
                if (elements.startPage) elements.startPage.classList.remove('hidden');
            }
        } catch(e) {
            console.error("Firestore에서 문서 로딩 중 오류:", e);
            alert("결과를 불러오는 중 오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
            if (elements.startPage) elements.startPage.classList.remove('hidden');
        }
    }
});