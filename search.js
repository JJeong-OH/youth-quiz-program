import { getFirestore, collection, query, where, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

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
    };

    elements.searchButton?.addEventListener('click', searchResults);
    
    elements.newSearchButton?.addEventListener('click', () => {
        if (elements.adminResultLinkArea) elements.adminResultLinkArea.classList.add('hidden');
        if (elements.resultLinkList) elements.resultLinkList.innerHTML = '';
        if (elements.searchNameInput) elements.searchNameInput.value = '';
        if (elements.searchBirthdateInput) elements.searchBirthdateInput.value = '';
    });

    async function searchResults() {
        const searchName = elements.searchNameInput?.value.trim();
        const searchBirthdate = elements.searchBirthdateInput?.value;

        if (!searchName || !searchBirthdate) {
            alert('이름과 생년월일을 모두 입력해 주세요.');
            return;
        }

        const searchButton = elements.searchButton;
        if(searchButton) searchButton.disabled = true;

        try {
            const q = query(collection(db, 'survey_results'),
                where('userName', '==', searchName),
                where('userBirthdate', '==', searchBirthdate)
            );
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                alert('해당하는 설문 결과가 없습니다.');
                elements.adminResultLinkArea?.classList.add('hidden');
                return;
            }

            const results = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            showResultLinks(results);
        } catch (error) {
            console.error('검색 중 오류 발생:', error);
            alert('검색 중 오류가 발생했습니다.');
        } finally {
            if(searchButton) searchButton.disabled = false;
        }
    }

    function showResultLinks(results) {
        if (!elements.adminResultLinkArea || !elements.resultLinkList) return;

        elements.resultLinkList.innerHTML = '';
        
        results.sort((a, b) => b.timestamp.seconds - a.timestamp.seconds);

        results.forEach((result) => {
            const timestamp = result.timestamp ? new Date(result.timestamp.seconds * 1000).toLocaleString('ko-KR') : '날짜 정보 없음';
            
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            const link = document.createElement('a');
            link.href = `./?id=${result.id}`;
            link.textContent = `설문 일시: ${timestamp}`;
            link.target = "_blank";
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.className = 'delete-button';
            deleteButton.onclick = () => deleteResult(result.id);
            
            resultItem.appendChild(link);
            resultItem.appendChild(deleteButton);
            
            elements.resultLinkList.appendChild(resultItem);
        });

        elements.adminResultLinkArea.classList.remove('hidden');
    }

    async function deleteResult(docId) {
        if (!confirm('정말로 이 설문 결과를 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.')) {
            return;
        }

        try {
            await deleteDoc(doc(db, "survey_results", docId));
            alert('설문 결과가 삭제되었습니다.');
            searchResults(); // 목록 새로고침
        } catch (e) {
            console.error("데이터 삭제 중 오류 발생: ", e);
            alert("데이터 삭제에 실패했습니다.");
        }
    }
});