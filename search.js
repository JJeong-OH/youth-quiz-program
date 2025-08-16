import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { renderResultPage, showProgramModal, surveyTopics, drawRadarChart, chartInstances, recommendPrograms } from './common.js';

let db;
const ADMIN_PASSWORD = '1234';

document.addEventListener('DOMContentLoaded', function() {
    if (window.firebaseApp) {
        db = getFirestore(window.firebaseApp);
    } else {
        console.error("Firebase 앱 인스턴스를 찾을 수 없습니다. search.html을 확인해주세요.");
        return;
    }

    const elements = {
        passwordCheckPage: document.getElementById('password-check-page'),
        adminPasswordInput: document.getElementById('adminPassword'),
        passwordCheckButton: document.getElementById('password-check-button'),
        searchAndResultPage: document.getElementById('search-and-result-page'),
        searchButton: document.getElementById('search-button'),
        searchNameInput: document.getElementById('searchName'),
        searchBirthdateInput: document.getElementById('searchBirthdate'),
        adminResultLinkArea: document.getElementById('admin-result-link-area'),
        resultLinkList: document.getElementById('result-link-list'),
        newSearchButton: document.getElementById('new-search-button'),
    };

    if (elements.passwordCheckPage) elements.passwordCheckPage.classList.remove('hidden');

    if (elements.passwordCheckButton) {
        elements.passwordCheckButton.addEventListener('click', checkPassword);
    }
    if (elements.searchButton) {
        elements.searchButton.addEventListener('click', searchResults);
    }
    if (elements.newSearchButton) {
        elements.newSearchButton.addEventListener('click', () => {
            if (elements.adminResultLinkArea) elements.adminResultLinkArea.classList.add('hidden');
            if (elements.resultLinkList) elements.resultLinkList.innerHTML = '';
            if (elements.searchNameInput) elements.searchNameInput.value = '';
            if (elements.searchBirthdateInput) elements.searchBirthdateInput.value = '';
            if (elements.searchButton) elements.searchButton.disabled = false;
        });
    }

    function checkPassword() {
        if (elements.adminPasswordInput && elements.adminPasswordInput.value === ADMIN_PASSWORD) {
            if (elements.passwordCheckPage) elements.passwordCheckPage.classList.add('hidden');
            if (elements.searchAndResultPage) elements.searchAndResultPage.classList.remove('hidden');
        } else {
            alert('비밀번호가 틀렸습니다.');
            if (elements.adminPasswordInput) elements.adminPasswordInput.classList.add('error');
        }
    }

    async function searchResults() {
        const searchName = elements.searchNameInput ? elements.searchNameInput.value.trim() : '';
        const searchBirthdate = elements.searchBirthdateInput ? elements.searchBirthdateInput.value : '';

        if (!searchName || !searchBirthdate) {
            alert('이름과 생년월일을 모두 입력해 주세요.');
            return;
        }

        const q = query(collection(db, 'survey_results'),
            where('userName', '==', searchName),
            where('userBirthdate', '==', searchBirthdate));

        try {
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                alert('해당하는 설문 결과가 없습니다.');
                if (elements.adminResultLinkArea) elements.adminResultLinkArea.classList.add('hidden');
                return;
            }

            const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            showResultLinks(results);
            if (elements.searchButton) elements.searchButton.disabled = true;

        } catch (error) {
            console.error('검색 중 오류 발생:', error);
            alert('검색 중 오류가 발생했습니다.');
        }
    }

    function showResultLinks(results) {
        if (elements.adminResultLinkArea) {
            elements.resultLinkList.innerHTML = ''; // 기존 목록 초기화
            
            if (results.length > 1) {
                const listTitle = document.createElement('p');
                listTitle.textContent = '여러 개의 설문 결과가 있습니다. 원하는 결과를 선택하세요.';
                elements.resultLinkList.appendChild(listTitle);
            }

            results.forEach((result, index) => {
                const timestamp = result.timestamp ? new Date(result.timestamp.seconds * 1000).toLocaleString() : '날짜 정보 없음';
                const link = document.createElement('a');
                link.href = `/?id=${result.id}`;
                link.textContent = `결과 ${index + 1} (${timestamp})`;
                link.target = "_blank"; // 새 탭에서 열기
                link.style.display = 'block';
                link.style.margin = '5px 0';
                
                elements.resultLinkList.appendChild(link);
            });

            elements.adminResultLinkArea.classList.remove('hidden');
        }
    }

    // search.html에 불필요한 함수는 제거합니다.
    // renderResultPage, drawRadarChart, recommendPrograms, showProgramModal 등은
    // index.js와 common.js에서만 사용합니다.
});