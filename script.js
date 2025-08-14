import { getFirestore, collection, addDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

let db;
const chartInstances = {};

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded. Script started.");
    
    if (window.firebaseApp) {
        db = getFirestore(window.firebaseApp);
    } else {
        console.error("Firebase 앱 인스턴스를 찾을 수 없습니다. index.html을 확인해주세요.");
        return;
    }

    const surveyTopics = Object.keys(allQuestions);
    let currentTopicIndex = 0;
    let currentPageIndex = 0;
    
    let categoryScores = {};
    
    const startPage = document.getElementById('start-page');
    const startButton = document.getElementById('start-button');
    const quizPage = document.getElementById('quiz-page');
    const topicTransitionPage = document.getElementById('topic-transition-page');
    const continueButton = document.getElementById('continue-button');
    const resultPage = document.getElementById('result-page');
    const pageTitle = document.getElementById('page-title');
    const pageDescription = document.getElementById('page-description');
    const quizForm = document.getElementById('quiz-form');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const chartTitle1 = document.getElementById('chart-title-1');
    const chartTitle2 = document.getElementById('chart-title-2');
    const transitionTitle = document.getElementById('transition-title');
    const recommendationContainer = document.getElementById('recommendation-container');
    const recommendationText = document.getElementById('recommendation-text');
    const programList = document.getElementById('program-list');
    
    const strongPointContainer = document.getElementById('strong-point-container');
    const strongPointTitle = document.getElementById('strong-point-title');
    const strongPointImage = document.getElementById('strong-point-image');
    const strongPointDescription = document.getElementById('strong-point-description');

    const programModal = document.getElementById('program-modal');
    const modalCloseButton = document.querySelector('.close-button');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const resultLinkContainer = document.getElementById('result-link-container');
    const resultLink = document.getElementById('result-link');
    const copyLinkButton = document.getElementById('copy-link-button');

    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('id');

    if (docId) {
        console.log(`URL에서 문서 ID 감지: ${docId}. 결과 페이지를 로드합니다.`);
        loadResultFromFirestore(docId);
    } else {
        console.log("URL에 문서 ID 없음. 시작 페이지를 보여줍니다.");
        startPage.classList.remove('hidden');
    }

    startButton.addEventListener('click', function() {
        console.log("설문 시작하기 버튼 클릭.");
        try {
            const userNameInput = document.getElementById('userName');
            const userAgeInput = document.getElementById('userAge');
            
            const userName = userNameInput.value.trim();
            const userAge = userAgeInput.value.trim();
            
            let isValid = true;
            
            if (!userName) {
                userNameInput.classList.add('error');
                isValid = false;
            } else {
                userNameInput.classList.remove('error');
            }
            
            if (!userAge) {
                userAgeInput.classList.add('error');
                isValid = false;
            } else {
                userAgeInput.classList.remove('error');
            }
            
            if (!isValid) {
                alert("이름과 나이를 모두 입력해 주세요.");
                return;
            }
            
            console.log("이름과 나이 입력 확인. 유효성 검사 통과.");
            
            startPage.classList.add('hidden');
            quizPage.classList.remove('hidden');
            initializeSurvey();
            renderQuizPage();
            console.log("페이지 전환 성공.");

        } catch(error) {
            console.error("설문 시작 버튼 클릭 중 오류:", error);
            alert("오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
        }
    });

    function initializeSurvey() {
        console.log("설문 초기화 시작.");
        categoryScores = {};
        currentTopicIndex = 0;
        currentPageIndex = 0;
        
        for (const topic in allQuestions) {
            categoryScores[topic] = {};
            for (const category in allQuestions[topic]) {
                categoryScores[topic][category] = 0;
            }
        }
        console.log("설문 초기화 완료. categoryScores:", categoryScores);
    }

    function renderQuizPage() {
        try {
            console.log(`퀴즈 페이지 렌더링 시작. 주제: ${surveyTopics[currentTopicIndex]}, 페이지: ${currentPageIndex}`);
            const currentTopic = surveyTopics[currentTopicIndex];
            const currentCategories = Object.keys(allQuestions[currentTopic]);
            const currentCategory = currentCategories[currentPageIndex];

            pageTitle.textContent = `${currentTopic}`;
            pageDescription.textContent = `${currentPageIndex + 1}. ${currentCategory}에 대한 질문입니다.`;

            quizForm.innerHTML = '';
            
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
                quizForm.appendChild(questionContainer);
            });

            if (currentPageIndex > 0 || currentTopicIndex > 0) {
                prevButton.classList.remove('hidden');
            } else {
                prevButton.classList.add('hidden');
            }

            const nextButtonText = (currentTopicIndex < surveyTopics.length - 1 || currentPageIndex < currentCategories.length - 1) ? '다음' : '결과 보기';
            nextButton.textContent = nextButtonText;

            // window.scrollTo({ top: 0, behavior: 'smooth' }); // 이 부분을 showResultPage로 옮김
            console.log("퀴즈 페이지 렌더링 완료.");
        } catch(error) {
            console.error("퀴즈 페이지 렌더링 중 오류:", error);
            alert("퀴즈 페이지를 불러오는 중 오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
        }
    }

    nextButton.addEventListener('click', function() {
        console.log("다음 버튼 클릭.");
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
                quizPage.classList.add('hidden');
                showTopicTransitionPage();
            } else {
                showResultPage();
            }
        } catch(error) {
            console.error("다음 버튼 클릭 중 오류:", error);
            alert("오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
        }
    });

    prevButton.addEventListener('click', function() {
        console.log("이전 버튼 클릭.");
        try {
            if (currentPageIndex > 0) {
                currentPageIndex--;
                renderQuizPage();
            } else if (currentTopicIndex > 0) {
                topicTransitionPage.classList.remove('hidden');
                quizPage.classList.add('hidden');
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
    
    continueButton.addEventListener('click', function() {
        console.log("설문 이어서하기 버튼 클릭.");
        try {
            topicTransitionPage.classList.add('hidden');
            quizPage.classList.remove('hidden');
            
            currentTopicIndex++;
            currentPageIndex = 0;
            
            renderQuizPage();
        } catch(error) {
            console.error("설문 이어서하기 버튼 클릭 중 오류:", error);
            alert("오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
        }
    });

    function showTopicTransitionPage() {
        console.log("주제 전환 페이지 표시.");
        transitionTitle.textContent = surveyTopics[currentTopicIndex + 1];
        topicTransitionPage.classList.remove('hidden');
    }

    async function showResultPage() {
        try {
            console.log("결과 페이지 표시 시작.");
            const userName = document.getElementById('userName').value;
            const userAge = document.getElementById('userAge').value;
            
            const docId = await saveSurveyResultsToFirestore(categoryScores, userName, userAge);
            console.log(`Firestore에 데이터 저장 완료. 문서 ID: ${docId}`);

            renderResultPage(categoryScores, userName, docId);
            console.log("결과 페이지 표시 완료.");

        } catch(error) {
            console.error("결과 페이지 로드 중 오류:", error);
            alert("결과를 불러오는 중 오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
        }
    }

    function renderResultPage(scores, userName, docId = null) {
        pageTitle.classList.add('hidden');
        pageDescription.classList.add('hidden');
        quizPage.classList.add('hidden');
        topicTransitionPage.classList.add('hidden');
        resultPage.classList.remove('hidden');
        
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 결과 페이지로 넘어갈 때 맨 위로 스크롤

        resultTitle.textContent = `${userName}님의 역량 진단 결과입니다.`;

        const topic1 = surveyTopics[0];
        const categories1 = Object.keys(allQuestions[topic1]);
        const data1 = categories1.map(category => scores[topic1][category] || 0);

        const topic2 = surveyTopics[1];
        const categories2 = Object.keys(allQuestions[topic2]);
        const data2 = categories2.map(category => scores[topic2][category] || 0);

        chartTitle1.textContent = topic1;
        chartTitle2.textContent = topic2;
        
        drawRadarChart('myChart1', categories1, data1, 50); 
        drawRadarChart('myChart2', categories2, data2, 50);

        let scoreDescriptionHTML = '<h4>점수별 역량 해석</h4>';
        scoreDescriptionHTML += `<p><strong>40~50점:</strong> 매우 강점 (해당 분야에 대한 관심,참여 의지가 높고 역량도 강함)</p>`;
        scoreDescriptionHTML += `<p><strong>30~39점:</strong> 보통 이상 (관심과 역량이 평균 이상, 꾸준한 활동 시 더 성장 가능)</p>`;
        scoreDescriptionHTML += `<p><strong>20~29점:</strong> 보통 이하 (관심이 낮거나 경험 부족, 활동 기회 확대 필요)</p>`;
        scoreDescriptionHTML += `<p><strong>10~19점:</strong> 매우 부족 (관심,참여도가 낮고 경험이 거의 없음.집중지원 필요)</p>`;
        resultText.innerHTML = scoreDescriptionHTML;
        
        const allCategoryScores = {};
        for(const topic in scores) {
            Object.assign(allCategoryScores, scores[topic]);
        }
        
        const sortedCategories = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[b] - allCategoryScores[a]);
        const highestScoreCategory = sortedCategories[0];
        const highestScore = allCategoryScores[highestScoreCategory];
        
        if (highestScore >= 35) {
            strongPointTitle.textContent = `당신의 강점 분야: ${highestScoreCategory}`;
            const strongPointProgram = programRecommendations[highestScoreCategory].find(p => p.strongPointImage);
            if (strongPointProgram) {
                strongPointImage.src = strongPointProgram.strongPointImage;
            } else {
                strongPointImage.src = "https://via.placeholder.com/600x300.png?text=No+Image";
            }
            strongPointDescription.innerHTML = `당신은 **<${highestScoreCategory}>** 분야에 강점을 가지고 있습니다! <br>해당 분야에 대한 관심과 역량이 매우 뛰어나며, 앞으로도 꾸준한 활동을 통해 더 큰 성장을 이룰 수 있을 것입니다.`;
            strongPointContainer.classList.remove('hidden');
        } else {
            strongPointContainer.classList.add('hidden');
        }

        if (docId) {
            const resultBaseUrl = window.location.origin;
            const resultLinkUrl = `${resultBaseUrl}/?id=${docId}`;
            resultLink.href = resultLinkUrl;
            resultLink.textContent = `나의 결과 링크: ${resultLinkUrl}`;
            resultLinkContainer.classList.remove('hidden');
        }

        recommendPrograms(allCategoryScores);
    }
    
    async function saveSurveyResultsToFirestore(data, userName, userAge) {
        try {
            const docRef = await addDoc(collection(db, "survey_results"), {
                timestamp: new Date(),
                userName: userName,
                userAge: parseInt(userAge),
                scores: data
            });
            return docRef.id;
        } catch (e) {
            console.error("Error adding document: ", e);
            return null;
        }
    }
    
    async function loadResultFromFirestore(id) {
        console.log(`Firestore에서 문서 ID ${id}를 가져오는 중...`);
        try {
            const docRef = doc(db, "survey_results", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("문서 데이터:", docSnap.data());
                const data = docSnap.data();
                const scores = data.scores;
                const userName = data.userName;
                const docId = id;
                
                renderResultPage(scores, userName, docId);
            } else {
                console.error("오류: 유효하지 않은 문서 ID입니다.");
                alert("유효하지 않은 결과 링크입니다.");
                startPage.classList.remove('hidden');
            }
        } catch(e) {
            console.error("Firestore에서 문서 로딩 중 오류:", e);
            alert("결과를 불러오는 중 오류가 발생했습니다. 개발자 콘솔을 확인해주세요.");
            startPage.classList.remove('hidden');
        }
    }


    function recommendPrograms(allCategoryScores) {
        const sortedCategories = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[a] - allCategoryScores[b]);
        
        let lowestScoreCategory = sortedCategories.find(category => allCategoryScores[category] <= 25);
        
        if (!lowestScoreCategory) {
            lowestScoreCategory = sortedCategories[0];
        }

        if (programRecommendations[lowestScoreCategory]) {
            let recommendationMessage = '';
            if (allCategoryScores[lowestScoreCategory] <= 25) {
                recommendationMessage = `당신의 점수가 가장 낮은 분야는 **<${lowestScoreCategory}>** 입니다. 이는 **보완이 필요한 분야**로 분류됩니다. 이 역량을 강화하기 위한 프로그램을 추천합니다.`;
            } else {
                recommendationMessage = `당신의 점수가 가장 낮은 분야는 **<${lowestScoreCategory}>** 입니다. 이 역량을 강화하기 위한 프로그램을 추천합니다.`;
            }
            recommendationText.innerHTML = recommendationMessage;

            programList.innerHTML = '';
            programRecommendations[lowestScoreCategory].forEach(program => {
                const li = document.createElement('li');
                li.textContent = program.name;
                li.dataset.category = lowestScoreCategory;
                li.dataset.programName = program.name;
                li.addEventListener('click', function() {
                    showProgramModal(program);
                });
                programList.appendChild(li);
            });
            recommendationContainer.classList.remove('hidden');
        } else {
            recommendationContainer.classList.add('hidden');
        }
    }

    function showProgramModal(program) {
        modalImage.src = program.image;
        modalTitle.textContent = program.name;
        modalDescription.textContent = program.description;
        programModal.classList.remove('hidden');
    }

    modalCloseButton.addEventListener('click', function() {
        programModal.classList.add('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target === programModal) {
            programModal.classList.add('hidden');
        }
    });

    function drawRadarChart(canvasId, labels, data, suggestedMax) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        
        const chartData = {
            labels: labels,
            datasets: [{
                label: '내 역량 점수',
                data: data,
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        };
        
        const config = {
            type: 'radar',
            data: chartData,
            options: {
                responsive: true,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: suggestedMax,
                        ticks: {
                            stepSize: suggestedMax / 5
                        }
                    }
                }
            }
        };

        if (chartInstances[canvasId]) {
            chartInstances[canvasId].destroy();
        }
        chartInstances[canvasId] = new Chart(ctx, config);
    }
});
