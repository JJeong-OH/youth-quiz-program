<<<<<<< HEAD
// programs.js

export const programRecommendations = {
    // 청소년활동 분야 (1차 분류)
    "자기개발분야": [
        { name: "청소년운영위원회", image: "images/programs/self_development_1.png", description: "청소년활동시설의 운영에 직접 참여하여 청소년의 의견을 반영하는 활동." },
        { name: "청소년재능동아리연합회", image: "images/programs/self_development_2.png", description: "다양한 재능을 가진 청소년들이 모여 동아리 활동을 기획하고 운영하는 활동." },
        { name: "하모니연합활동", image: "images/programs/self_development_3.png", description: "다양한 배경을 가진 청소년들이 연합하여 협력과 화합을 배우는 활동." },
        { name: "바리스타동아리", image: "images/programs/self_development_4.png", description: "바리스타 기술을 배우고 직접 커피를 만들어보는 동아리 활동." },
        { name: "상상스쿨", image: "images/programs/self_development_5.png", description: "창의적인 아이디어를 자유롭게 펼치고 다양한 프로젝트를 수행하는 프로그램." },
        { name: "미추홀 청소년 노래·댄스대회", image: "images/programs/self_development_6.png", description: "청소년들이 노래와 댄스 실력을 뽐내는 대회." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/self_development_7.png", description: "소외계층 청소년에게 재능을 나누는 봉사 활동." }
    ],
    "문화예술분야": [
        { name: "청소년재능동아리연합회", image: "images/programs/culture_art_1.png", description: "다양한 재능을 가진 청소년들이 모여 동아리 활동을 기획하고 운영하는 활동." },
        { name: "하모니연합활동", image: "images/programs/culture_art_2.png", description: "다양한 배경을 가진 청소년들이 연합하여 협력과 화합을 배우는 활동." },
        { name: "문화놀이터", image: "images/programs/culture_art_3.png", description: "다양한 문화예술 체험 프로그램을 즐기는 공간." },
        { name: "스포츠놀이터", image: "images/programs/culture_art_4.png", description: "스포츠와 놀이를 통해 건강한 신체를 단련하는 활동." },
        { name: "진흥원 공모 ‘Fade In’", image: "images/programs/culture_art_5.png", description: "청소년들이 직접 기획하고 제작한 문화예술 콘텐츠를 선보이는 공모전." },
        { name: "패밀리 플레이 히스토리", image: "images/programs/culture_art_6.png", description: "가족과 함께 역사와 문화를 체험하는 프로그램." },
        { name: "그린페스티벌", image: "images/programs/culture_art_7.png", description: "환경을 주제로 다양한 문화예술 활동을 펼치는 축제." },
        { name: "미추홀체험놀이터", image: "images/programs/culture_art_8.png", description: "다양한 체험 활동을 통해 흥미와 적성을 찾는 프로그램." },
        { name: "미래적성분석 프로그램", image: "images/programs/culture_art_9.png", description: "개인의 적성과 흥미를 분석하여 미래 진로를 설계하는 프로그램." },
        { name: "미추홀 청소년 노래·댄스대회", image: "images/programs/culture_art_10.png", description: "청소년들이 노래와 댄스 실력을 뽐내는 대회." },
        { name: "가족컬러푸드", image: "images/programs/culture_art_11.png", description: "가족과 함께 요리하며 건강한 식습관을 배우는 프로그램." },
        { name: "상상스쿨", image: "images/programs/culture_art_12.png", description: "창의적인 아이디어를 자유롭게 펼치고 다양한 프로젝트를 수행하는 프로그램." },
        { name: "패밀리데이", image: "images/programs/culture_art_13.png", description: "가족이 함께 참여하여 소통과 화합을 다지는 활동." }
    ],
    "사회참여분야": [
        { name: "동물 one 도그홀릭", image: "images/programs/social_participation_1.png", description: "유기동물을 돕고 동물 복지에 대한 인식을 높이는 활동." },
        { name: "청소년운영위원회", image: "images/programs/social_participation_2.png", description: "청소년활동시설의 운영에 직접 참여하여 청소년의 의견을 반영하는 활동." },
        { name: "보훈부 공모 ‘용사의 길’", image: "images/programs/social_participation_3.png", description: "국가유공자의 숭고한 희생정신을 기리는 역사 탐방 활동." },
        { name: "스마트하게 함께해HYO", image: "images/programs/social_participation_4.png", description: "스마트폰을 활용하여 효(孝)를 실천하는 프로그램." },
        { name: "컨소시엄 Yes 인천", image: "images/programs/social_participation_5.png", description: "다양한 기관들이 협력하여 청소년 활동을 지원하는 프로그램." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/social_participation_6.png", description: "소외계층 청소년에게 재능을 나누는 봉사 활동." }
    ],
    "인문사회분야": [],
    "건강/스포츠활동": [
        { name: "스포츠놀이터", image: "images/programs/sports_outdoor_1.png", description: "스포츠와 놀이를 통해 건강한 신체를 단련하는 활동." },
        { name: "패밀리데이", image: "images/programs/sports_outdoor_2.png", description: "가족이 함께 참여하여 소통과 화합을 다지는 활동." },
        { name: "가족캠핑", image: "images/programs/sports_outdoor_3.png", description: "가족과 함께 자연 속에서 캠핑을 즐기는 활동." }
    ],
    "과학·정보분야": [
        { name: "환경을 코딩하다", image: "images/programs/science_info_1.png", description: "코딩을 통해 환경 문제를 해결하는 프로젝트." },
        { name: "비행가족", image: "images/programs/science_info_2.png", description: "드론 조종을 배우고 가족과 함께 비행을 즐기는 활동." },
        { name: "미래적성분석 프로그램", image: "images/programs/science_info_3.png", description: "개인의 적성과 흥미를 분석하여 미래 진로를 설계하는 프로그램." }
    ],
    "진로체험분야": [
        { name: "환경을 코딩하다", image: "images/programs/specialized_convergence_1.png", description: "코딩을 통해 환경 문제를 해결하는 프로젝트." },
        { name: "가족컬러푸드", image: "images/programs/specialized_convergence_2.png", description: "가족과 함께 요리하며 건강한 식습관을 배우는 프로그램." },
        { name: "비행가족", image: "images/programs/specialized_convergence_3.png", description: "드론 조종을 배우고 가족과 함께 비행을 즐기는 활동." },
        { name: "패밀리 플레이 히스토리", image: "images/programs/specialized_convergence_4.png", description: "가족과 함께 역사와 문화를 체험하는 프로그램." },
        { name: "그린페스티벌", image: "images/programs/specialized_convergence_5.png", description: "환경을 주제로 다양한 문화예술 활동을 펼치는 축제." }
    ],

    // 청소년활동 7대 핵심역량 (2차 분류)
    "비판적사고": [
        { name: "미추홀 청소년 노래·댄스대회", image: "images/programs/core_self_management_1.png", description: "대회 준비를 통해 자기관리와 목표 달성을 연습." },
        { name: "청소년운영위원회", image: "images/programs/core_self_management_2.png", description: "회의 참여와 운영을 통해 자기주도성과 책임감을 기르는 활동." },
        { name: "진흥원 공모 ‘Fade In’", image: "images/programs/core_self_management_3.png", description: "개인 프로젝트를 기획하고 실행하며 자기관리 능력을 키우는 프로그램." },
        { name: "스포츠놀이터", image: "images/programs/core_self_management_4.png", description: "규칙적인 운동을 통해 건강을 관리하고 스트레스를 해소." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/core_self_management_5.png", description: "봉사 활동 계획을 세우고 실행하며 자기주도적 역량을 강화." },
        { name: "하모니 연합활동", image: "images/programs/core_self_management_6.png", description: "다양한 사람들과 협업하며 자신의 역할을 관리." },
        { name: "청소년재능동아리연합회", image: "images/programs/core_self_management_7.png", description: "동아리 활동을 스스로 기획하고 관리하며 리더십을 키움." },
        { name: "미래적성분석 프로그램", image: "images/programs/core_self_management_8.png", description: "자기 이해를 바탕으로 진로를 계획하고 관리하는 활동." },
        { name: "가족컬러푸드", image: "images/programs/core_self_management_9.png", description: "건강한 식습관을 배우고 실천하며 자기관리를 연습." },
        { name: "바리스타동아리", image: "images/programs/core_self_management_10.png", description: "새로운 기술을 배우고 꾸준히 연습하며 자기계발에 힘씀." }
    ],
    "의사소통 역량": [
        { name: "청소년운영위원회", image: "images/programs/core_communication_1.png", description: "회의와 토론을 통해 자신의 의견을 명확하게 표현하고 타인의 의견을 경청하는 연습." },
        { name: "보훈부 공모 ‘용사의 길’", image: "images/programs/core_communication_2.png", description: "팀원들과 소통하며 역사 탐방 프로젝트를 성공적으로 수행." },
        { name: "비행가족", image: "images/programs/core_communication_3.png", description: "가족 간 소통을 통해 공동의 목표를 달성하는 활동." },
        { name: "패밀리 플레이 히스토리", image: "images/programs/core_communication_4.png", description: "가족 구성원과 대화하며 역사적 사실에 대해 배우고 소통." },
        { name: "컨소시엄 Yes 인천", image: "images/programs/core_communication_5.png", description: "다양한 기관 관계자들과 협력하며 의사소통 능력을 향상." },
        { name: "진흥원 공모 ‘Fade In’", image: "images/programs/core_communication_6.png", description: "팀원들과 아이디어를 공유하고 협의하며 콘텐츠를 제작." },
        { name: "동물 one 도그홀릭", image: "images/programs/core_communication_7.png", description: "동물 보호 활동을 위해 지역사회와 소통하는 연습." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/core_communication_8.png", description: "봉사활동 대상자와 소통하며 맞춤형 지원을 제공." },
        { name: "패밀리데이", image: "images/programs/core_communication_9.png", description: "가족과 함께 게임을 하며 자연스럽게 소통하는 활동." },
        { name: "하모니연합활동", image: "images/programs/core_communication_10.png", description: "다양한 청소년들과 교류하며 의사소통 능력을 확장." },
        { name: "청소년재능동아리연합회", image: "images/programs/core_communication_11.png", description: "동아리 회원들과 협력하여 목표를 달성하는 활동." },
        { name: "미래적성분석 프로그램", image: "images/programs/core_communication_12.png", description: "전문가와의 상담을 통해 자신의 진로에 대해 소통." },
        { name: "가족컬러푸드", image: "images/programs/core_communication_13.png", description: "가족과 함께 요리하며 소통하는 시간을 가짐." },
        { name: "스마트하게 함께해HYO", image: "images/programs/core_communication_14.png", description: "기술을 활용하여 가족과 소통하는 방법을 배움." },
        { name: "바리스타동아리", image: "images/programs/core_communication_15.png", description: "동아리 회원, 손님들과 교류하며 대인관계를 키움." },
        { name: "가족캠핑", image: "images/programs/core_communication_16.png", description: "가족과 함께 캠핑을 하며 친밀감을 형성." }
    ],
    "창의력": [
        { name: "환경을 코딩하다", image: "images/programs/core_creativity_1.png", description: "코딩과 환경 문제를 융합하여 새로운 해결책을 모색." },
        { name: "미래적성분석 프로그램", image: "images/programs/core_creativity_2.png", description: "다양한 진로를 융합하여 새로운 직업을 상상." },
        { name: "스마트하게 함께해HYO", image: "images/programs/core_creativity_3.png", description: "기술과 효를 융합하여 새로운 사회적 가치를 창출." }
    ],
    "협업": [
        { name: "청소년운영위원회", image: "images/programs/core_problem_solving_1.png", description: "청소년 시설의 문제점을 찾아 해결 방안을 모색." },
        { name: "컨소시엄 Yes 인천", image: "images/programs/core_problem_solving_2.png", description: "다양한 사회 문제를 해결하기 위해 여러 기관과 협력." },
        { name: "진흥원 공모 ‘Fade In’", image: "images/programs/core_problem_solving_3.png", description: "공모전 주제에 대한 문제를 정의하고 해결책을 제시." },
        { name: "문화놀이터", image: "images/programs/core_problem_solving_4.png", description: "다양한 놀이를 통해 문제해결 능력을 키우는 활동." },
        { name: "스포츠놀이터", image: "images/programs/core_problem_solving_5.png", description: "운동을 통해 전략적 사고와 문제해결 능력을 단련." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/core_problem_solving_6.png", description: "봉사활동 중 발생하는 문제들을 해결하고 개선." },
        { name: "환경을 코딩하다", image: "images/programs/core_problem_solving_7.png", description: "환경 문제에 대한 해결책을 코딩으로 구현." },
        { name: "청소년재능동아리연합회", image: "images/programs/core_problem_solving_8.png", description: "동아리 운영 중 발생하는 문제들을 해결." },
        { name: "바리스타동아리", image: "images/programs/core_problem_solving_9.png", description: "커피 제조 과정에서 발생하는 문제들을 해결." },
        { name: "가족컬러푸드", image: "images/programs/core_problem_solving_10.png", description: "가족과 함께 요리하며 문제해결 능력을 키움." },
        { name: "스마트하게 함께해HYO", image: "images/programs/core_problem_solving_11.png", description: "기술적 문제를 해결하며 효를 실천." }
    ],
    "진로개발": [
        { name: "청소년운영위원회", image: "images/programs/core_interpersonal_1.png", description: "다양한 청소년들과 함께 활동하며 대인관계 능력을 향상." },
        { name: "보훈부 공모 ‘용사의 길’", image: "images/programs/core_interpersonal_2.png", description: "팀 프로젝트를 통해 협력과 대인관계를 배우는 활동." },
        { name: "비행가족", image: "images/programs/core_interpersonal_3.png", description: "가족과의 관계를 돈독히 하고 소통을 증진." },
        { name: "패밀리 플레이 히스토리", image: "images/programs/core_interpersonal_4.png", description: "가족과 함께하는 활동을 통해 친밀감을 형성." },
        { name: "컨소시엄 Yes 인천", image: "images/programs/core_interpersonal_5.png", description: "다양한 사람들과 협력하여 대인관계를 넓히는 활동." },
        { name: "진흥원 공모 ‘Fade In’", image: "images/programs/core_interpersonal_6.png", description: "팀원들과 협업하며 프로젝트를 진행." },
        { name: "동물 one 도그홀릭", image: "images/programs/core_interpersonal_7.png", description: "동물을 사랑하는 사람들과 교류하며 대인관계를 형성." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/core_interpersonal_8.png", description: "봉사 대상자와 교류하며 공감 능력과 대인관계를 키움." },
        { name: "패밀리데이", image: "images/programs/core_interpersonal_9.png", description: "가족과 함께하는 다양한 활동을 통해 대인관계를 강화." },
        { name: "하모니연합활동", image: "images/programs/core_interpersonal_10.png", description: "다양한 배경을 가진 청소년들과 어울리며 대인관계를 형성." },
        { name: "청소년재능동아리연합회", image: "images/programs/core_interpersonal_11.png", description: "동아리 회원들과 협력하여 목표를 달성하는 활동." },
        { name: "미래적성분석 프로그램", image: "images/programs/core_interpersonal_12.png", description: "진로 전문가와의 상담을 통해 대인관계 기술을 배움." },
        { name: "가족컬러푸드", image: "images/programs/core_interpersonal_13.png", description: "가족과 함께 요리하며 소통하는 시간을 가짐." },
        { name: "스마트하게 함께해HYO", image: "images/programs/core_interpersonal_14.png", description: "기술을 활용하여 가족과 소통하는 방법을 배움." },
        { name: "바리스타동아리", image: "images/programs/core_interpersonal_15.png", description: "동아리 회원, 손님들과 교류하며 대인관계를 키움." },
        { name: "가족캠핑", image: "images/programs/core_interpersonal_16.png", description: "가족과 함께 캠핑을 하며 친밀감을 형성." }
    ],
    "사회정서": [
        { name: "청소년운영위원회", image: "images/programs/core_civic_1.png", description: "시설 운영에 참여하며 민주적 절차와 시민의식을 배움." },
        { name: "보훈부 공모 ‘용사의 길’", image: "images/programs/core_civic_2.png", description: "역사 탐방을 통해 애국심과 시민의식을 함양." },
        { name: "컨소시엄 Yes 인천", image: "images/programs/core_civic_3.png", description: "사회 문제 해결을 위해 시민으로서의 역할을 고민." },
        { name: "그린페스티벌", image: "images/programs/core_civic_4.png", description: "환경 보호의 중요성을 인식하고 시민의식을 높임." },
        { name: "동물 one 도그홀릭", image: "images/programs/core_civic_5.png", description: "유기동물 보호 활동을 통해 공동체 의식을 실천." },
        { name: "교육지원청 복지사업 재능온", image: "images/programs/core_civic_6.png", description: "봉사 활동을 통해 사회적 책임을 배우고 시민의식을 함양." },
        { name: "환경을 코딩하다", image: "images/programs/core_civic_7.png", description: "환경 문제 해결에 참여하며 시민의식을 높임." },
        { name: "하모니연합활동", image: "images/programs/core_civic_8.png", description: "다양한 사람들과 협력하며 공동체 의식을 배우는 활동." },
        { name: "청소년재능동아리연합회", image: "images/programs/core_civic_9.png", description: "동아리 활동을 통해 사회적 규범과 질서를 배움." },
        { name: "스마트하게 함께해HYO", image: "images/programs/core_civic_10.png", description: "효를 실천하며 가족 구성원으로서의 책임감을 배움." }
    ],
    "디지털 역량": [
        { name: "보훈부 공모 ‘용사의 길’", image: "images/programs/core_digital_1.png", description: "디지털 기기를 활용하여 역사 탐방 정보를 수집." },
        { name: "비행가족", image: "images/programs/core_digital_2.png", description: "드론 조종과 코딩을 통해 디지털 기술을 배우는 활동." },
        { name: "패밀리 플레이 히스토리", image: "images/programs/core_digital_3.png", description: "디지털 콘텐츠를 활용하여 역사적 지식을 습득." },
        { name: "환경을 코딩하다", image: "images/programs/core_digital_4.png", description: "코딩을 통해 디지털 문제해결 능력을 키움." },
        { name: "미래적성분석 프로그램", image: "images/programs/core_digital_5.png", description: "디지털 도구를 활용하여 자신의 적성을 분석." },
        { name: "스마트하게 함께해HYO", image: "images/programs/core_digital_6.png", description: "스마트폰 앱을 활용하여 효를 실천하는 활동." }
    ]
};
=======
const programRecommendations = {
    '자기개발활동': [
        { name: '자신감 향상 워크숍', description: '자신의 강점을 발견하고 발표하는 훈련을 통해 자신감을 키웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Self-Confidence+Workshop', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Self-Development' },
        { name: '리더십 캠프', description: '다양한 팀 활동을 통해 리더의 역할과 책임감을 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Leadership+Camp', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Self-Development' },
        { name: '미래 직업 탐색 프로그램', description: '전문가 멘토링을 통해 자신의 적성에 맞는 직업을 탐색합니다.', image: 'https://via.placeholder.com/400x200.png?text=Career+Exploration', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Self-Development' }
    ],
    '문화예술활동': [
        { name: '청소년 연극 동아리', description: '연극 대본 읽기부터 무대 공연까지, 직접 참여하는 활동입니다.', image: 'https://via.placeholder.com/400x200.png?text=Theater+Club', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Culture+Art' },
        { name: '미술 전시회 기획단', description: '미술 작품을 직접 기획하고 전시하는 경험을 합니다.', image: 'https://via.placeholder.com/400x200.png?text=Art+Exhibition+Planning', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Culture+Art' },
        { name: 'K-POP 댄스 클래스', description: '최신 K-POP 안무를 배우고 춤 실력을 향상시킵니다.', image: 'https://via.placeholder.com/400x200.png?text=K-pop+Dance+Class', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Culture+Art' }
    ],
    '사회참여활동': [
        { name: '지역사회 봉사단', description: '우리 동네를 위해 직접 봉사하며 사회적 책임감을 기릅니다.', image: 'https://via.placeholder.com/400x200.png?text=Community+Service', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Social+Participation' },
        { name: '청소년 정책 제안 토론회', description: '청소년 관련 정책에 대해 토론하고 아이디어를 제안합니다.', image: 'https://via.placeholder.com/400x200.png?text=Youth+Policy+Forum', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Social+Participation' },
        { name: '환경 보호 캠페인', description: '환경 보호의 중요성을 알리는 캠페인을 기획하고 실행합니다.', image: 'https://via.placeholder.com/400x200.png?text=Environmental+Campaign', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Social+Participation' }
    ],
    '국제교류활동': [
        { name: '해외 펜팔 친구 만들기', description: '온라인으로 해외 친구와 소통하며 다른 문화를 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Pen+Pal+Program', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+International+Exchange' },
        { name: '국제 문화 이해 워크숍', description: '각 나라의 문화를 체험하고 이해하는 워크숍에 참여합니다.', image: 'https://via.placeholder.com/400x200.png?text=International+Culture', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+International+Exchange' },
        { name: '글로벌 리더 양성 프로그램', description: '국제 사회의 리더로 성장하기 위한 역량 강화 프로그램입니다.', image: 'https://via.placeholder.com/400x200.png?text=Global+Leader+Program', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+International+Exchange' }
    ],
    '스포츠,야외활동': [
        { name: '주말 등산 동호회', description: '전문가와 함께하는 안전하고 즐거운 등산 활동입니다.', image: 'https://via.placeholder.com/400x200.png?text=Hiking+Club', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Sports' },
        { name: '농구/축구 스포츠 교실', description: '전문 코치에게 농구와 축구 기술을 배우는 교실입니다.', image: 'https://via.placeholder.com/400x200.png?text=Sports+Class', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Sports' },
        { name: '챌린지 스포츠 체험', description: '평소에 접하기 힘든 익스트림 스포츠를 안전하게 체험합니다.', image: 'https://via.placeholder.com/400x200.png?text=Challenge+Sports', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Sports' }
    ],
    '과학,정보활동': [
        { name: 'AI 코딩 스쿨', description: '인공지능의 원리를 이해하고 직접 코딩해보는 실습 위주 교육입니다.', image: 'https://via.placeholder.com/400x200.png?text=AI+Coding+School', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Science' },
        { name: '과학 실험 동아리', description: '다양한 과학 실험을 통해 과학 원리를 재미있게 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Science+Club', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Science' },
        { name: 'IT 기술 경진대회', description: '친구들과 팀을 이루어 IT 기술을 활용한 작품을 만듭니다.', image: 'https://via.placeholder.com/400x200.png?text=IT+Competition', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Science' }
    ],
    '특성화,융합활동': [
        { name: '융합 프로젝트 팀', description: '서로 다른 분야의 지식을 결합해 새로운 프로젝트를 기획합니다.', image: 'https://via.placeholder.com/400x200.png?text=Fusion+Project+Team', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Interdisciplinary' },
        { name: '로봇 제작 워크숍', description: '로봇의 원리를 배우고 직접 만들어보는 워크숍입니다.', image: 'https://via.placeholder.com/400x200.png?text=Robot+Workshop', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Interdisciplinary' },
        { name: '청소년 발명 교실', description: '일상의 문제를 해결하는 창의적인 발명 아이디어를 만듭니다.', image: 'https://via.placeholder.com/400x200.png?text=Invention+Class', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Interdisciplinary' }
    ],
    '자기관리 역량': [
        { name: '시간 관리 습관 만들기', description: '효율적인 시간 관리법을 배우고 실천합니다.', image: 'https://via.placeholder.com/400x200.png?text=Time+Management', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Self-Management' },
        { name: '스트레스 해소 상담', description: '전문가와 함께 스트레스 관리법을 배우고 심리적 안정감을 찾습니다.', image: 'https://via.placeholder.com/400x200.png?text=Stress+Counselling', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Self-Management' },
        { name: '건강한 생활 습관 교육', description: '바른 식습관과 운동으로 건강을 관리하는 방법을 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Healthy+Lifestyle', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Self-Management' }
    ],
    '의사소통 역량': [
        { name: '토론과 발표 스킬업', description: '자신의 생각을 논리적으로 전달하고 설득하는 능력을 키웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Communication+Skill+Up', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Communication' },
        { name: '대화의 기술 워크숍', description: '경청과 공감을 통해 상대방과 더 깊은 관계를 맺습니다.', image: 'https://via.placeholder.com/400x200.png?text=Conversation+Workshop', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Communication' },
        { name: '공감 능력 훈련 프로그램', description: '타인의 감정을 이해하고 배려하는 공감 능력을 향상시킵니다.', image: 'https://via.placeholder.com/400x200.png?text=Empathy+Training', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Communication' }
    ],
    '창의융합 역량': [
        { name: '창의력 증진 워크숍', description: '고정관념을 깨고 새로운 아이디어를 내는 방법을 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Creativity+Workshop', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Creative+Fusion' },
        { name: '아이디어톤 참여', description: '특정 주제에 대한 창의적인 아이디어를 제안하는 대회입니다.', image: 'https://via.placeholder.com/400x200.png?text=Ideathon+Participation', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Creative+Fusion' },
        { name: '이종 분야 융합 프로젝트', description: '과학과 예술을 결합하는 등 새로운 시도를 하는 프로젝트입니다.', image: 'https://via.placeholder.com/400x200.png?text=Interdisciplinary+Project', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Creative+Fusion' }
    ],
    '문제해결 역량': [
        { name: '논리적 사고 훈련', description: '복잡한 문제를 단계별로 분석하고 해결하는 능력을 키웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Logical+Thinking', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Problem+Solving' },
        { name: '문제 해결 멘토링', description: '전문가 멘토와 함께 실제 문제를 해결하는 경험을 합니다.', image: 'https://via.placeholder.com/400x200.png?text=Problem+Solving+Mentoring', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Problem+Solving' },
        { name: '미션 임파서블 프로젝트', description: '팀원들과 협력하여 주어진 미션을 해결하는 프로그램입니다.', image: 'https://via.placeholder.com/400x200.png?text=Mission+Impossible+Project', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Problem+Solving' }
    ],
    '대인관계 역량': [
        { name: '팀워크 증진 활동', description: '다양한 게임과 활동을 통해 팀원 간의 협력과 소통을 강화합니다.', image: 'https://via.placeholder.com/400x200.png?text=Teamwork+Activity', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Interpersonal' },
        { name: '친구와 함께하는 리더십', description: '친구들과 함께 리더십을 배우고 실천하는 프로그램입니다.', image: 'https://via.placeholder.com/400x200.png?text=Leadership+with+Friends', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Interpersonal' },
        { name: '갈등 관리 프로그램', description: '친구와의 갈등을 현명하게 해결하는 방법을 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Conflict+Management', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Interpersonal' }
    ],
    '시민의식 역량': [
        { name: '법과 사회 이해', description: '우리 사회를 구성하는 법과 제도를 배우고 시민의식을 함양합니다.', image: 'https://via.placeholder.com/400x200.png?text=Law+and+Society', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Civic+Mindedness' },
        { name: '사회 공헌 프로젝트', description: '사회에 도움이 되는 프로젝트를 직접 기획하고 실행합니다.', image: 'https://via.placeholder.com/400x200.png?text=Social+Contribution', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Civic+Mindedness' },
        { name: '시민 참여 활동', description: '지역사회의 문제에 참여하고 해결하는 방법을 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Citizen+Participation', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Civic+Mindedness' }
    ],
    '디지털 역량': [
        { name: '디지털 윤리 교육', description: '올바른 디지털 시민으로서의 태도와 윤리를 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Digital+Ethics', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Digital+Literacy' },
        { name: '콘텐츠 크리에이터 양성', description: '영상, 글쓰기 등 다양한 콘텐츠를 제작하는 방법을 배웁니다.', image: 'https://via.placeholder.com/400x200.png?text=Content+Creator', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Digital+Literacy' },
        { name: 'SW 코딩 부트캠프', description: '소프트웨어 코딩의 기초를 배우고 프로젝트를 완성합니다.', image: 'https://via.placeholder.com/400x200.png?text=SW+Coding+Bootcamp', strongPointImage: 'https://via.placeholder.com/600x300.png?text=Strong+Point+Digital+Literacy' }
    ],
};
>>>>>>> 1d4996a6a459c76766e56ec5fdd8df680eedc5fc
