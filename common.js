import { allQuestions, topicDescriptions } from './questions.js';
import { programRecommendations } from './programs.js';

export const chartInstances = {};
export const surveyTopics = Object.keys(allQuestions);

export function recommendPrograms(allCategoryScores, weakestScoreCategories = []) {
    const recommendationContainer = document.getElementById('recommendation-container');
    const recommendationText = document.getElementById('recommendation-text');
    const programListContainer = document.getElementById('program-list');

    if (!recommendationContainer || !weakestScoreCategories || weakestScoreCategories.length === 0) {
        recommendationContainer?.classList.add('hidden');
        return;
    }

    recommendationContainer.classList.remove('hidden');
    if (programListContainer) programListContainer.innerHTML = '';

    let finalMessage = `**보완이 필요한 분야**로 다음 역량들을 강화하기 위한 프로그램을 추천합니다. (제목을 클릭하여 확인)`;
    if (recommendationText) recommendationText.innerHTML = finalMessage;

    weakestScoreCategories.forEach(category => {
        const hasPrograms = programRecommendations[category] && programRecommendations[category].length > 0;

        const button = document.createElement('button');
        button.className = 'accordion';
        button.textContent = `<${category}> 추천 프로그램`;
        programListContainer.appendChild(button);

        const panel = document.createElement('div');
        panel.className = 'panel';
        
        const list = document.createElement('ul');

        if (hasPrograms) {
            programRecommendations[category].forEach(program => {
                const li = document.createElement('li');
                li.textContent = program.name;
                li.addEventListener('click', () => showProgramModal(program));
                list.appendChild(li);
            });
        } else {
            const li = document.createElement('li');
            li.textContent = '추천 프로그램이 준비되지 않았습니다.';
            li.style.color = '#888';
            li.style.cursor = 'default';
            li.style.textDecoration = 'none';
            list.appendChild(li);
        }
        
        panel.appendChild(list);
        programListContainer.appendChild(panel);
    });

    const accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
}

export function showProgramModal(program) {
    const programModal = document.getElementById('program-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalLink = document.getElementById('modal-link');
    
    if (modalImage) {
        if (program.image) {
            modalImage.src = program.image;
            modalImage.style.display = 'block';
        } else {
            modalImage.style.display = 'none';
        }
    }
    
    if (modalTitle) modalTitle.textContent = program.name || '';
    if (modalDescription) modalDescription.textContent = program.description || '';

    if (modalLink) {
        if (program.link) {
            modalLink.href = program.link;
            modalLink.style.display = 'inline-block';
        } else {
            modalLink.style.display = 'none';
        }
    }
    
    programModal?.classList.remove('hidden');
}

export function drawRadarChart(canvasId, labels, data, suggestedMax) {
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
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: suggestedMax,
                    ticks: { stepSize: suggestedMax / 5 }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    };

    if (chartInstances[canvasId]) {
        chartInstances[canvasId].destroy();
    }
    chartInstances[canvasId] = new Chart(ctx.getContext('2d'), config);
}

export function renderResultPage(scores, userName, docId = null, highestScoreCategory = null, strongestMessage = null, weakestScoreCategories = []) {
    document.getElementById('start-page')?.classList.add('hidden');
    document.getElementById('quiz-page')?.classList.add('hidden');
    document.getElementById('topic-transition-page')?.classList.add('hidden');
    const resultPage = document.getElementById('result-page');
    resultPage?.classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const resultTitle = document.getElementById('result-title');
    if (resultTitle) resultTitle.textContent = `${userName}님의 역량 진단 결과입니다.`;

    const topic1 = surveyTopics[0];
    const categories1 = Object.keys(allQuestions[topic1]);
    const data1 = categories1.map(category => scores[topic1]?.[category] || 0);
    const chartTitle1 = document.getElementById('chart-title-1');
    if (chartTitle1) chartTitle1.textContent = topic1;
    drawRadarChart('myChart1', categories1, data1, 25);

    const topic2 = surveyTopics[1];
    const categories2 = Object.keys(allQuestions[topic2]);
    const data2 = categories2.map(category => scores[topic2]?.[category] || 0);
    const chartTitle2 = document.getElementById('chart-title-2');
    if (chartTitle2) chartTitle2.textContent = topic2;
    drawRadarChart('myChart2', categories2, data2, 25);

    const resultText = document.getElementById('result-text');
    if(resultText) {
        resultText.innerHTML = `
            <h4>점수별 역량 해석 (25점 만점 기준)</h4>
            <p><strong>20~25점:</strong> 매우 강점(해당 분야에 대한 관심·참여 의지가 높고 역량도 강함)</p>
            <p><strong>15~19점:</strong> 보통 이상(관심과 역량이 평균 이상, 꾸준한 활동 시 더 성장 가능)</p>
            <p><strong>10~14점:</strong> 보통 이하(관심이 낮거나 경험 부족, 활동 기회 확대 필요</p>
            <p><strong>5~9점:</strong> 매우 부족(관심·참여도가 낮고 경험이 거의 없음, 집중 지원 필요)</p>
        `;
    }
    
    const strongPointContainer = document.getElementById('strong-point-container');
    if (highestScoreCategory && strongPointContainer) {
        const strongPointTitle = document.getElementById('strong-point-title');
        const strongPointDescription = document.getElementById('strong-point-description');

        if (strongPointTitle) strongPointTitle.textContent = `당신의 강점 분야`;
        
        if (strongPointDescription) strongPointDescription.innerHTML = strongestMessage || `당신은 **<${highestScoreCategory}>** 분야에 강점을 가지고 있습니다!`;
        strongPointContainer.classList.remove('hidden');
    } else {
        strongPointContainer?.classList.add('hidden');
    }

    const resultLinkContainer = document.getElementById('result-link-container');
    if (docId) {
        const resultLink = document.getElementById('result-link');
        const resultBaseUrl = window.location.origin + window.location.pathname.replace('index.html', '');
        const resultLinkUrl = `${resultBaseUrl}?id=${docId}`;
        if (resultLink) {
            resultLink.href = resultLinkUrl;
            resultLink.textContent = resultLinkUrl;
        }
        resultLinkContainer?.classList.remove('hidden');
    } else {
        resultLinkContainer?.classList.add('hidden');
    }

    const allCategoryScores = Object.values(scores).reduce((acc, val) => Object.assign(acc, val), {});
    recommendPrograms(allCategoryScores, weakestScoreCategories);
}
