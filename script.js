document.addEventListener('DOMContentLoaded', function() {
    // 기존 코드...
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
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const programModal = document.getElementById('program-modal');
    const modalCloseButton = document.getElementById('modal-close-button');

    const chartInstances = {};

    startButton.addEventListener('click', function() {
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

    function getScoreDescription(score) {
        if (score >= 40) return '매우 강점 (해당 분야에 대한 관심과 참여 의지가 높고 역량도 강합니다.)';
        if (score >= 30) return '보통 이상 (관심과 역량이 평균 이상이며, 꾸준한 활동 시 더 성장 가능합니다.)';
        if (score >= 20) return '보통 이하 (관심이 낮거나 경험이 부족합니다. 활동 기회 확대가 필요합니다.)';
        return '매우 부족 (관심과 참여도가 낮고 경험이 거의 없습니다. 집중 지원이 필요합니다.)';
    }

    function showResultPage() {
        pageTitle.classList.add('hidden');
        pageDescription.classList.add('hidden');
        quizPage.classList.add('hidden');
        topicTransitionPage.classList.add('hidden');
        resultPage.classList.remove('hidden');

        resultTitle.textContent = '당신의 역량 진단 결과입니다.';

        const topic1 = surveyTopics[0];
        const categories1 = Object.keys(allQuestions[topic1]);
        const data1 = categories1.map(category => categoryScores[topic1][category] || 0);

        const topic2 = surveyTopics[1];
        const categories2 = Object.keys(allQuestions[topic2]);
        const data2 = categories2.map(category => categoryScores[topic2][category] || 0);

        chartTitle1.textContent = topic1;
        chartTitle2.textContent = topic2;
        
        drawRadarChart('myChart1', categories1, data1, 50); 
        drawRadarChart('myChart2', categories2, data2, 50);
        
        resultText.innerHTML = '<h4>점수별 역량 해석</h4>';
        
        const scoreDescriptions = [
            `<strong>40~50점:</strong> 매우 강점 (해당 분야에 대한 관심, 참여 의지가 높고 역량도 강함)`,
            `<strong>30~39점:</strong> 보통 이상 (관심과 역량이 평균 이상, 꾸준한 활동 시 더 성장 가능)`,
            `<strong>20~29점:</strong> 보통 이하 (관심이 낮거나 경험 부족, 활동 기회 확대 필요)`,
            `<strong>10~19점:</strong> 매우 부족 (관심, 참여도가 낮고 경험이 거의 없음. 집중 지원 필요)`
        ];
        
        scoreDescriptions.forEach(desc => {
            const p = document.createElement('p');
            p.innerHTML = desc;
            resultText.appendChild(p);
        });

        resultText.innerHTML += '<br>두 차트를 통해 당신의 활동 분야와 핵심 역량을 확인해보세요.';
        recommendPrograms();
    }

    function recommendPrograms() {
        let allCategoryScores = {};
        for(const topic in categoryScores) {
            Object.assign(allCategoryScores, categoryScores[topic]);
        }

        const categories = Object.keys(allCategoryScores);
        let lowestScoreCategory = '';
        let lowestScore = 100;
        let lowestCount = 0;

        // 25점 이하인 보완 필요 분야를 먼저 찾습니다.
        let needImprovementCategories = categories.filter(category => allCategoryScores[category] <= 25);
        if (needImprovementCategories.length > 0) {
            lowestScoreCategory = needImprovementCategories[0];
            lowestScore = allCategoryScores[lowestScoreCategory];
        } else {
            // 25점 이하인 분야가 없으면 점수가 가장 낮은 분야를 찾습니다.
            categories.forEach(category => {
                if (allCategoryScores[category] < lowestScore) {
                    lowestScore = allCategoryScores[category];
                    lowestScoreCategory = category;
                }
            });
        }
        
        if (programRecommendations[lowestScoreCategory]) {
            let recommendationMessage = '';
            if (allCategoryScores[lowestScoreCategory] <= 25) {
                recommendationMessage = `<br>당신의 점수가 가장 낮은 분야는 **<${lowestScoreCategory}>** 입니다. 이는 **보완이 필요한 분야**로 분류됩니다. 이 역량을 강화하기 위한 프로그램을 추천합니다.`;
            } else {
                recommendationMessage = `<br>당신의 점수가 가장 낮은 분야는 **<${lowestScoreCategory}>** 입니다. 이 역량을 강화하기 위한 프로그램을 추천합니다.`;
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