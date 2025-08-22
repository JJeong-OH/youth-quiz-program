import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { renderResultPage, showProgramModal, surveyTopics, drawRadarChart, chartInstances, recommendPrograms } from './common.js';
import { allQuestions } from './questions.js';

let db;

document.addEventListener('DOMContentLoaded', function() {
    if (window.firebaseApp) {
        db = getFirestore(window.firebaseApp);
    } else {
        console.error("Firebase 앱 인스턴스를 찾을 수 없습니다. search.html을 확인해주세요.");
        return;
    }

    const elements = {
        searchButton: document.getElementById('search-button'),
        searchNameInput: document.getElementById('searchName'),
        searchBirthdateInput: document.getElementById('searchBirthdate'),
        adminResultLinkArea: document.getElementById('admin-result-link-area'),
        resultLinkList: document.getElementById('result-link-list'),
        newSearchButton: document.getElementById('new-search-button'),
        programModal: document.getElementById('program-modal'),
        modalCloseButton: document.querySelector('.close-button'),
    };

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

    async function deleteResult(docId) {
        if (!confirm('정말로 이 설문 결과를 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다.')) {
            return;
        }

        try {
            await deleteDoc(doc(db, "survey_results", docId));
            alert('설문 결과가 삭제되었습니다.');
            searchResults(); 
        } catch (e) {
            console.error("데이터 삭제 중 오류 발생: ", e);
            alert("데이터 삭제에 실패했습니다. Firestore 보안 규칙을 확인해주세요.");
        }
    }

    function showResultLinks(results) {
        if (elements.adminResultLinkArea) {
            elements.resultLinkList.innerHTML = '';
            
            if (results.length > 1) {
                const listTitle = document.createElement('p');
                listTitle.textContent = '여러 개의 설문 결과가 있습니다. 원하는 결과를 선택하세요.';
                elements.resultLinkList.appendChild(listTitle);
            }

            results.forEach((result, index) => {
                const timestamp = result.timestamp ? new Date(result.timestamp.seconds * 1000).toLocaleString() : '날짜 정보 없음';
                
                const resultItem = document.createElement('div');
                resultItem.style.display = 'flex';
                resultItem.style.alignItems = 'center';
                resultItem.style.margin = '5px 0';

                const link = document.createElement('a');
                link.href = `/?id=${result.id}`;
                link.textContent = `결과 ${index + 1} (${timestamp})`;
                link.target = "_blank";
                link.style.marginRight = '10px';
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '삭제';
                deleteButton.classList.add('delete-button');
                deleteButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    deleteResult(result.id);
                });
                
                resultItem.appendChild(link);
                resultItem.appendChild(deleteButton);
                
                elements.resultLinkList.appendChild(resultItem);
            });

            elements.adminResultLinkArea.classList.remove('hidden');
        }
    }
});