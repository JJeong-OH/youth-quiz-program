import { getFirestore, collection, addDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase 초기화는 index.html에서 이미 진행했으므로, 여기서는 db 인스턴스만 가져옵니다.
const db = getFirestore();

document.addEventListener('DOMContentLoaded', function() {
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

    const chartInstances = {};

    // URL 파라미터에서 'id' 값을 확인하여 바로 결과 페이지를 로드합니다.
    const urlParams = new URLSearchParams(window.location.search);
    const docId = urlParams.get('id');

    if (docId) {
        loadResultFromFirestore(docId);
    } else {
        startPage.classList.remove('hidden');
    }

    startButton.addEventListener('click', function() {
        const userName = document.getElementById('userName').value;
        const userAge = document.getElementById('userAge').value;

        if (!userName || !userAge) {
            alert("이름과 나이를 모두 입력해 주세요.");
            return;
        }

        startPage.classList.add('hidden');
        quizPage.classList.remove('hidden');
        initializeSurvey();
        renderQuizPage();
    });

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
        const currentTopic = surveyTopics[currentTopicIndex];
        const currentCategories = Object.keys(allQuestions[currentTopic]);
        const currentCategory = currentCategories[currentPageIndex];

        pageTitle.textContent = `${currentTopic}`;
        pageDescription.textContent = `${currentPageIndex + 1}. ${currentCategory}에 대한 질문입니다.`;

        quizForm.innerHTML = '';
        const currentQuestions = allQuestions[currentTopic][currentCategory];
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

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    nextButton.addEventListener('click', function() {
        const currentTopic = surveyTopics[currentTopicIndex];
        const currentCategories = Object.keys(allQuestions[currentTopic]);
        const currentCategory = currentCategories[currentPageIndex];
        const currentQuestions = allQuestions[currentTopic][currentCategory];
        
        let allAnswered = true;
        let pageScore = 0;
        
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
                }
            } else {
                pageScore += parseInt(answeredOption.value);
            }
        });

        if (!allAnswered) {
            alert('모든 질문에 응답해 주세요! 답변하지 않은 항목은 빨간색으로 표시됩니다.');
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
    });

    prevButton.addEventListener('click', function() {
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
    });
    
    continueButton.addEventListener('click', function() {
        topicTransitionPage.classList.add('hidden');
        quizPage.classList.remove('hidden');
        
        currentTopicIndex++;
        currentPageIndex = 0;
        
        renderQuizPage();
    });

    function showTopicTransitionPage() {
        transitionTitle.textContent = surveyTopics[currentTopicIndex + 1];
        topicTransitionPage.classList.remove('hidden');
    }

    async function showResultPage() {
        pageTitle.classList.add('hidden');
        pageDescription.classList.add('hidden');
        quizPage.classList.add('hidden');
        topicTransitionPage.classList.add('hidden');
        resultPage.classList.remove('hidden');
        
        const userName = document.getElementById('userName').value;
        const userAge = document.getElementById('userAge').value;
        
        const docId = await saveSurveyResultsToFirestore(categoryScores, userName, userAge);

        const topic1 = surveyTopics[0];
        const categories1 = Object.keys(allQuestions[topic1]);
        const data1 = categories1.map(category => categoryScores[topic1][category] || 0);

        const topic2 = surveyTopics[1];
        const categories2 = Object.keys(allQuestions[topic2]);
        const data2 = categories2.map(category => categoryScores[topic2][category] || 0);

        resultTitle.textContent = `${userName}님의 역량 진단 결과입니다.`;
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
        for(const topic in categoryScores) {
            Object.assign(allCategoryScores, categoryScores[topic]);
        }
        
        const sortedCategories = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[b] - allCategoryScores[a]);
        const highestScoreCategory = sortedCategories[0];
        const highestScore = allCategoryScores[highestScoreCategory];
        
        if (highestScore >= 35) {
            strongPointTitle.textContent = `당신의 강점 분야: ${highestScoreCategory}`;
            strongPointImage.src = programRecommendations[highestScoreCategory][0].strongPointImage;
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
            console.log("Document written with ID: ", docRef.id);
            return docRef.id;
        } catch (e) {
            console.error("Error adding document: ", e);
            return null;
        }
    }
    
    async function loadResultFromFirestore(id) {
        const docRef = doc(db, "survey_results", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            const scores = data.scores;
            const userName = data.userName;

            startPage.classList.add('hidden');
            resultPage.classList.remove('hidden');
            
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
                strongPointImage.src = programRecommendations[highestScoreCategory][0].strongPointImage;
                strongPointDescription.innerHTML = `당신은 **<${highestScoreCategory}>** 분야에 강점을 가지고 있습니다! <br>해당 분야에 대한 관심과 역량이 매우 뛰어나며, 앞으로도 꾸준한 활동을 통해 더 큰 성장을 이룰 수 있을 것입니다.`;
                strongPointContainer.classList.remove('hidden');
            } else {
                strongPointContainer.classList.add('hidden');
            }

            recommendPrograms(allCategoryScores);
            resultLinkContainer.classList.remove('hidden');
            resultLink.href = window.location.href;
            resultLink.textContent = `나의 결과 링크: ${window.location.href}`;

        } else {
            alert("유효하지 않은 결과 링크입니다.");
            startPage.classList.remove('hidden');
        }
    }


    function recommendPrograms(allCategoryScores) {
        // ... (기존 코드)
    }

    function showProgramModal(program) {
        // ... (기존 코드)
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
        // ... (기존 코드)
    }
});
