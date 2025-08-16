// common.js
const chartInstances = {};
const surveyTopics = Object.keys(allQuestions);

function recommendPrograms(allCategoryScores) {
    const sortedCategories = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[a] - allCategoryScores[b]);
    let lowestScoreCategory = sortedCategories.find(category => allCategoryScores[category] <= 25);
    
    if (!lowestScoreCategory) {
        lowestScoreCategory = sortedCategories[0];
    }

    const recommendationContainer = document.getElementById('recommendation-container');
    const recommendationText = document.getElementById('recommendation-text');
    const programList = document.getElementById('program-list');

    if (programRecommendations[lowestScoreCategory]) {
        let recommendationMessage = '';
        if (allCategoryScores[lowestScoreCategory] <= 25) {
            recommendationMessage = `당신의 점수가 가장 낮은 분야는 **<${lowestScoreCategory}>** 입니다. 이는 **보완이 필요한 분야**로 분류됩니다. 이 역량을 강화하기 위한 프로그램을 추천합니다.`;
        } else {
            recommendationMessage = `당신의 점수가 가장 낮은 분야는 **<${lowestScoreCategory}>** 입니다. 이 역량을 강화하기 위한 프로그램을 추천합니다.`;
        }
        if (recommendationText) recommendationText.innerHTML = recommendationMessage;

        if (programList) programList.innerHTML = '';
        programRecommendations[lowestScoreCategory].forEach(program => {
            const li = document.createElement('li');
            li.textContent = program.name;
            li.dataset.category = lowestScoreCategory;
            li.dataset.programName = program.name;
            li.addEventListener('click', function() {
                showProgramModal(program);
            });
            if (programList) programList.appendChild(li);
        });
        if (recommendationContainer) recommendationContainer.classList.remove('hidden');
    } else {
        if (recommendationContainer) recommendationContainer.classList.add('hidden');
    }
}

function showProgramModal(program) {
    const programModal = document.getElementById('program-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    if (modalImage) modalImage.src = program.image;
    if (modalTitle) modalTitle.textContent = program.name;
    if (modalDescription) modalDescription.textContent = program.description;
    if (programModal) programModal.classList.remove('hidden');
}

function drawRadarChart(canvasId, labels, data, suggestedMax) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    
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
    chartInstances[canvasId] = new Chart(ctx.getContext('2d'), config);
}

function renderResultPage(scores, userName, docId = null) {
    const resultPage = document.getElementById('result-page');
    const resultTitle = document.getElementById('result-title');
    const resultText = document.getElementById('result-text');
    const chartTitle1 = document.getElementById('chart-title-1');
    const chartTitle2 = document.getElementById('chart-title-2');
    const strongPointContainer = document.getElementById('strong-point-container');
    const strongPointTitle = document.getElementById('strong-point-title');
    const strongPointImage = document.getElementById('strong-point-image');
    const strongPointDescription = document.getElementById('strong-point-description');
    const resultLinkContainer = document.getElementById('result-link-container');
    const resultLink = document.getElementById('result-link');
    const quizPage = document.getElementById('quiz-page');
    const startPage = document.getElementById('start-page');
    const topicTransitionPage = document.getElementById('topic-transition-page');

    if (resultPage) resultPage.classList.remove('hidden');
    if (startPage) startPage.classList.add('hidden');
    if (quizPage) quizPage.classList.add('hidden');
    if (topicTransitionPage) topicTransitionPage.classList.add('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (resultTitle) resultTitle.textContent = `${userName}님의 역량 진단 결과입니다.`;

    const topic1 = surveyTopics[0];
    const categories1 = Object.keys(allQuestions[topic1]);
    const data1 = categories1.map(category => scores[topic1][category] || 0);

    const topic2 = surveyTopics[1];
    const categories2 = Object.keys(allQuestions[topic2]);
    const data2 = categories2.map(category => scores[topic2][category] || 0);

    if (chartTitle1) chartTitle1.textContent = topic1;
    if (chartTitle2) chartTitle2.textContent = topic2;
    
    drawRadarChart('myChart1', categories1, data1, 50); 
    drawRadarChart('myChart2', categories2, data2, 50);

    let scoreDescriptionHTML = '<h4>점수별 역량 해석</h4>';
    scoreDescriptionHTML += `<p><strong>40~50점:</strong> 매우 강점 (해당 분야에 대한 관심,참여 의지가 높고 역량도 강함)</p>`;
    scoreDescriptionHTML += `<p><strong>30~39점:</strong> 보통 이상 (관심과 역량이 평균 이상, 꾸준한 활동 시 더 성장 가능)</p>`;
    scoreDescriptionHTML += `<p><strong>20~29점:</strong> 보통 이하 (관심이 낮거나 경험 부족, 활동 기회 확대 필요)</p>`;
    scoreDescriptionHTML += `<p><strong>10~19점:</strong> 매우 부족 (관심,참여도가 낮고 경험이 거의 없음.집중지원 필요)</p>`;
    if (resultText) resultText.innerHTML = scoreDescriptionHTML;
    
    const allCategoryScores = {};
    for(const topic in scores) {
        Object.assign(allCategoryScores, scores[topic]);
    }
    
    const sortedCategories = Object.keys(allCategoryScores).sort((a, b) => allCategoryScores[b] - allCategoryScores[a]);
    const highestScoreCategory = sortedCategories[0];
    const highestScore = allCategoryScores[highestScoreCategory];
    
    if (highestScore >= 35) {
        if (strongPointTitle) strongPointTitle.textContent = `당신의 강점 분야: ${highestScoreCategory}`;
        const strongPointProgram = programRecommendations[highestScoreCategory].find(p => p.strongPointImage);
        if (strongPointProgram && strongPointImage) {
            strongPointImage.src = strongPointProgram.strongPointImage;
        } else if (strongPointImage) {
            strongPointImage.src = "https://via.placeholder.com/600x300.png?text=No+Image";
        }
        if (strongPointDescription) strongPointDescription.innerHTML = `당신은 **<${highestScoreCategory}>** 분야에 강점을 가지고 있습니다! <br>해당 분야에 대한 관심과 역량이 매우 뛰어나며, 앞으로도 꾸준한 활동을 통해 더 큰 성장을 이룰 수 있을 것입니다.`;
        if (strongPointContainer) strongPointContainer.classList.remove('hidden');
    } else {
        if (strongPointContainer) strongPointContainer.classList.add('hidden');
    }

    if (docId) {
        const resultBaseUrl = window.location.origin;
        const resultLinkUrl = `${resultBaseUrl}/?id=${docId}`;
        if (resultLink) {
            resultLink.href = resultLinkUrl;
            resultLink.textContent = resultLinkUrl;
        }
        if (resultLinkContainer) resultLinkContainer.classList.remove('hidden');
    } else {
        if (resultLinkContainer) resultLinkContainer.classList.add('hidden');
    }

    recommendPrograms(allCategoryScores);
}

export { renderResultPage, drawRadarChart, recommendPrograms, showProgramModal, chartInstances, surveyTopics };
