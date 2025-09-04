// programs.js

// --- 이미지 경로 상수 ---
const IMG_YOUTH_COMMITTEE = "./images/프로그램별 활동사진/청소년운영위원회.jpg";
const IMG_TALENT_CLUB_UNION = "./images/프로그램별 활동사진/재능동아리_버스킹(2024년).jpg";
const IMG_HARMONY_UNION = "./images/프로그램별 활동사진/하모니 연합활동.jpg";
//const IMG_BARISTA_CLUB = "./images/바리스타.jpg";
const IMG_IMAGINATION_SCHOOL = "./images/프로그램별 활동사진/상상스쿨.jpg";
const IMG_SONG_DANCE_CONTEST = "./images/프로그램별 활동사진/미추홀 청소년 노래 댄스대회.jpg";
const IMG_TALENT_ON = "./images/프로그램별 활동사진/교육지원청 복지사업 재능온.jpg";
const IMG_CULTURE_PLAYGROUND = "./images/프로그램별 활동사진/문화놀이터-창작예술.jpg"; 
const IMG_SPORTS_PLAYGROUND = "./images/프로그램별 활동사진/스포츠놀이터-방송댄스.jpg"; 
const IMG_FADE_IN_CONTEST = "./images/프로그램별 활동사진/우수 청소년활동 지원사업 'Fade In'.jpg";
const IMG_FAMILY_HISTORY = "./images/프로그램별 활동사진/패밀리 플레이 히스토리.jpg";
const IMG_GREEN_FESTIVAL = "./images/프로그램별 활동사진/그린페스티벌.jpg";
const IMG_EXPERIENCE_PLAYGROUND = "./images/프로그램별 활동사진/체험놀이터.jpg";
const IMG_FUTURE_ANALYSIS = "./images/프로그램별 활동사진/미래적성분석 프로그램(영상편집편).jpg";
const IMG_COLOR_FOOD = "./images/프로그램별 활동사진/가족컬러푸드.jpg";
const IMG_FAMILY_DAY = "./images/프로그램별 활동사진/패밀리데이.jpg";
const IMG_DOGHOLIC = "./images/프로그램별 활동사진/도그홀릭(2024년).jpg";
const IMG_WARRIORS_PATH = "./images/프로그램별 활동사진/보훈부 공모 '용사의 길'.jpg";
const IMG_SMART_HYO = "./images/프로그램별 활동사진/스마트하게함께해HYO.jpg";
//const IMG_YES_INCHEON = "./images/YES인천.jpg"; 
//const IMG_FAMILY_CAMPING = "./images/가족캠핑.jpg"; 
const IMG_CODING_ENVIRONMENT = "./images/프로그램별 활동사진/환경을코딩하다.jpg";
const IMG_FLYING_FAMILY = "./images/프로그램별 활동사진/비행가족.jpg";

const LINK_YOUTH_COMMITTEE = "여기에 링크 주소 입력";   
const LINK_TALENT_CLUB_UNION = "여기에 링크 주소 입력";
const LINK_HARMONY_UNION = "여기에 링크 주소 입력";
const LINK_BARISTA_CLUB = "여기에 링크 주소 입력";  
const LINK_IMAGINATION_SCHOOL = "여기에 링크 주소 입력";
const LINK_SONG_DANCE_CONTEST = "여기에 링크 주소 입력";
const LINK_TALENT_ON = "여기에 링크 주소 입력";
const LINK_CULTURE_PLAYGROUND = "http://icyouth.or.kr/home2012/bbs/program.php?m=v&p_no=138";
const LINK_SPORTS_PLAYGROUND = "http://icyouth.or.kr/home2012/bbs/program.php?m=v&p_no=135";
const LINK_FADE_IN_CONTEST = "여기에 링크 주소 입력";
const LINK_FAMILY_HISTORY = "여기에 링크 주소 입력";
const LINK_GREEN_FESTIVAL = "여기에 링크 주소 입력";
const LINK_EXPERIENCE_PLAYGROUND = "여기에 링크 주소 입력";
const LINK_FUTURE_ANALYSIS = "여기에 링크 주소 입력";
const LINK_COLOR_FOOD = "여기에 링크 주소 입력";
const LINK_FAMILY_DAY = "http://icyouth.or.kr/home2012/bbs/program.php?m=v&p_no=188";
const LINK_DOGHOLIC = "http://icyouth.or.kr/home2012/bbs/program.php?m=v&p_no=189";
const LINK_WARRIORS_PATH = "여기에 링크 주소 입력";
const LINK_SMART_HYO = "여기에 링크 주소 입력";
const LINK_YES_INCHEON = "여기에 링크 주소 입력";
const LINK_FAMILY_CAMPING = "여기에 링크 주소 입력";
const LINK_CODING_ENVIRONMENT = "http://icyouth.or.kr/home2012/bbs/program.php?m=v&p_no=183";
const LINK_FLYING_FAMILY = "여기에 링크 주소 입력";

export const programRecommendations = {
    "자기개발분야": [
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "청소년활동시설의 운영에 직접 참여하여 청소년의 의견을 반영하는 활동.", link: LINK_YOUTH_COMMITTEE, strongPointImage: true },
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "다양한 재능을 가진 청소년들이 모여 동아리 활동을 기획하고 운영하는 활동.", link: LINK_TALENT_CLUB_UNION },
        { name: "하모니연합활동", image: IMG_HARMONY_UNION, description: "다양한 배경을 가진 청소년들이 연합하여 협력과 화합을 배우는 활동.", link: LINK_HARMONY_UNION },
        { name: "바리스타동아리", image: IMG_BARISTA_CLUB, description: "바리스타 기술을 배우고 직접 커피를 만들어보는 동아리 활동.", link: LINK_BARISTA_CLUB },
        { name: "상상스쿨", image: IMG_IMAGINATION_SCHOOL, description: "창의적인 아이디어를 자유롭게 펼치고 다양한 프로젝트를 수행하는 프로그램.", link: LINK_IMAGINATION_SCHOOL },
        { name: "미추홀 청소년 노래·댄스대회", image: IMG_SONG_DANCE_CONTEST, description: "청소년들이 노래와 댄스 실력을 뽐내는 대회.", link: LINK_SONG_DANCE_CONTEST },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "소외계층 청소년에게 재능을 나누는 봉사 활동.", link: LINK_TALENT_ON }
    ],
    "문화예술분야": [
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "다양한 재능을 가진 청소년들이 모여 동아리 활동을 기획하고 운영하는 활동.", link: LINK_TALENT_CLUB_UNION, strongPointImage: true },
        { name: "하모니연합활동", image: IMG_HARMONY_UNION, description: "다양한 배경을 가진 청소년들이 연합하여 협력과 화합을 배우는 활동.", link: LINK_HARMONY_UNION },
        { name: "문화놀이터", image: IMG_CULTURE_PLAYGROUND, description: "다양한 문화예술 체험 프로그램을 즐기는 공간.", link: LINK_CULTURE_PLAYGROUND },
        { name: "스포츠놀이터", image: IMG_SPORTS_PLAYGROUND, description: "스포츠와 놀이를 통해 건강한 신체를 단련하는 활동.", link: LINK_SPORTS_PLAYGROUND },
        { name: "진흥원 공모 ‘Fade In’", image: IMG_FADE_IN_CONTEST, description: "청소년들이 직접 기획하고 제작한 문화예술 콘텐츠를 선보이는 공모전.", link: LINK_FADE_IN_CONTEST },
        { name: "패밀리 플레이 히스토리", image: IMG_FAMILY_HISTORY, description: "가족과 함께 역사와 문화를 체험하는 프로그램.", link: LINK_FAMILY_HISTORY },
        { name: "그린페스티벌", image: IMG_GREEN_FESTIVAL, description: "환경을 주제로 다양한 문화예술 활동을 펼치는 축제.", link: LINK_GREEN_FESTIVAL },
        { name: "미추홀체험놀이터", image: IMG_EXPERIENCE_PLAYGROUND, description: "다양한 체험 활동을 통해 흥미와 적성을 찾는 프로그램.", link: LINK_EXPERIENCE_PLAYGROUND },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "개인의 적성과 흥미를 분석하여 미래 진로를 설계하는 프로그램.", link: LINK_FUTURE_ANALYSIS },
        { name: "미추홀 청소년 노래·댄스대회", image: IMG_SONG_DANCE_CONTEST, description: "청소년들이 노래와 댄스 실력을 뽐내는 대회.", link: LINK_SONG_DANCE_CONTEST },
        { name: "가족컬러푸드", image: IMG_COLOR_FOOD, description: "가족과 함께 요리하며 건강한 식습관을 배우는 프로그램.", link: LINK_COLOR_FOOD },
        { name: "상상스쿨", image: IMG_IMAGINATION_SCHOOL, description: "창의적인 아이디어를 자유롭게 펼치고 다양한 프로젝트를 수행하는 프로그램.", link: LINK_IMAGINATION_SCHOOL },
        { name: "패밀리데이", image: IMG_FAMILY_DAY, description: "가족이 함께 참여하여 소통과 화합을 다지는 활동.", link: LINK_FAMILY_DAY }
    ],
    "사회참여분야": [
        { name: "동물 one 도그홀릭", image: IMG_DOGHOLIC, description: "유기동물을 돕고 동물 복지에 대한 인식을 높이는 활동.", link: LINK_DOGHOLIC, strongPointImage: true },
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "청소년활동시설의 운영에 직접 참여하여 청소년의 의견을 반영하는 활동.", link: LINK_YOUTH_COMMITTEE },
        { name: "보훈부 공모 ‘용사의 길’", image: IMG_WARRIORS_PATH, description: "국가유공자의 숭고한 희생정신을 기리는 역사 탐방 활동.", link: LINK_WARRIORS_PATH },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "스마트폰을 활용하여 효(孝)를 실천하는 프로그램.", link: LINK_SMART_HYO },
        { name: "컨소시엄 Yes 인천", image: IMG_YES_INCHEON, description: "다양한 기관들이 협력하여 청소년 활동을 지원하는 프로그램.", link: LINK_YES_INCHEON },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "소외계층 청소년에게 재능을 나누는 봉사 활동.", link: LINK_TALENT_ON }
    ],
    "인문사회분야": [],
    "건강/스포츠활동": [
        { name: "스포츠놀이터", image: IMG_SPORTS_PLAYGROUND, description: "스포츠와 놀이를 통해 건강한 신체를 단련하는 활동.", link: LINK_SPORTS_PLAYGROUND, strongPointImage: true },
        { name: "패밀리데이", image: IMG_FAMILY_DAY, description: "가족이 함께 참여하여 소통과 화합을 다지는 활동.", link: LINK_FAMILY_DAY },
        { name: "가족캠핑", image: IMG_FAMILY_CAMPING, description: "가족과 함께 자연 속에서 캠핑을 즐기는 활동.", link: LINK_FAMILY_CAMPING }
    ],
    "과학·정보분야": [
        { name: "환경을 코딩하다", image: IMG_CODING_ENVIRONMENT, description: "코딩을 통해 환경 문제를 해결하는 프로젝트.", link: LINK_CODING_ENVIRONMENT, strongPointImage: true },
        { name: "비행가족", image: IMG_FLYING_FAMILY, description: "드론 조종을 배우고 가족과 함께 비행을 즐기는 활동.", link: LINK_FLYING_FAMILY },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "개인의 적성과 흥미를 분석하여 미래 진로를 설계하는 프로그램.", link: LINK_FUTURE_ANALYSIS }
    ],
    "진로체험분야": [
        { name: "환경을 코딩하다", image: IMG_CODING_ENVIRONMENT, description: "코딩을 통해 환경 문제를 해결하는 프로젝트.", link: LINK_CODING_ENVIRONMENT, strongPointImage: true },
        { name: "가족컬러푸드", image: IMG_COLOR_FOOD, description: "가족과 함께 요리하며 건강한 식습관을 배우는 프로그램.", link: LINK_COLOR_FOOD },
        { name: "비행가족", image: IMG_FLYING_FAMILY, description: "드론 조종을 배우고 가족과 함께 비행을 즐기는 활동.", link: LINK_FLYING_FAMILY },
        { name: "패밀리 플레이 히스토리", image: IMG_FAMILY_HISTORY, description: "가족과 함께 역사와 문화를 체험하는 프로그램.", link: LINK_FAMILY_HISTORY },
        { name: "그린페스티벌", image: IMG_GREEN_FESTIVAL, description: "환경을 주제로 다양한 문화예술 활동을 펼치는 축제.", link: LINK_GREEN_FESTIVAL }
    ],

    // 2단계: 청소년활동 7대 핵심역량
    "비판적사고": [
        { name: "미추홀 청소년 노래·댄스대회", image: IMG_SONG_DANCE_CONTEST, description: "대회 준비를 통해 자기관리와 목표 달성을 연습.", link: LINK_SONG_DANCE_CONTEST, strongPointImage: true },
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "회의 참여와 운영을 통해 자기주도성과 책임감을 기르는 활동.", link: LINK_YOUTH_COMMITTEE },
        { name: "진흥원 공모 ‘Fade In’", image: IMG_FADE_IN_CONTEST, description: "개인 프로젝트를 기획하고 실행하며 자기관리 능력을 키우는 프로그램.", link: LINK_FADE_IN_CONTEST },
        { name: "스포츠놀이터", image: IMG_SPORTS_PLAYGROUND, description: "규칙적인 운동을 통해 건강을 관리하고 스트레스를 해소.", link: LINK_SPORTS_PLAYGROUND },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "봉사 활동 계획을 세우고 실행하며 자기주도적 역량을 강화.", link: LINK_TALENT_ON },
        { name: "하모니 연합활동", image: IMG_HARMONY_UNION, description: "다양한 사람들과 협업하며 자신의 역할을 관리.", link: LINK_HARMONY_UNION },
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "동아리 활동을 스스로 기획하고 관리하며 리더십을 키움.", link: LINK_TALENT_CLUB_UNION },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "자기 이해를 바탕으로 진로를 계획하고 관리하는 활동.", link: LINK_FUTURE_ANALYSIS },
        { name: "가족컬러푸드", image: IMG_COLOR_FOOD, description: "건강한 식습관을 배우고 실천하며 자기관리를 연습.", link: LINK_COLOR_FOOD },
        { name: "바리스타동아리", image: IMG_BARISTA_CLUB, description: "새로운 기술을 배우고 꾸준히 연습하며 자기계발에 힘씀.", link: LINK_BARISTA_CLUB }
    ],
    "의사소통 역량": [
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "회의와 토론을 통해 자신의 의견을 명확하게 표현하고 타인의 의견을 경청하는 연습.", link: LINK_YOUTH_COMMITTEE, strongPointImage: true },
        { name: "보훈부 공모 ‘용사의 길’", image: IMG_WARRIORS_PATH, description: "팀원들과 소통하며 역사 탐방 프로젝트를 성공적으로 수행.", link: LINK_WARRIORS_PATH },
        { name: "비행가족", image: IMG_FLYING_FAMILY, description: "가족 간 소통을 통해 공동의 목표를 달성하는 활동.", link: LINK_FLYING_FAMILY },
        { name: "패밀리 플레이 히스토리", image: IMG_FAMILY_HISTORY, description: "가족 구성원과 대화하며 역사적 사실에 대해 배우고 소통.", link: LINK_FAMILY_HISTORY },
        { name: "컨소시엄 Yes 인천", image: IMG_YES_INCHEON, description: "다양한 기관 관계자들과 협력하며 의사소통 능력을 향상.", link: LINK_YES_INCHEON },
        { name: "진흥원 공모 ‘Fade In’", image: IMG_FADE_IN_CONTEST, description: "팀원들과 아이디어를 공유하고 협의하며 콘텐츠를 제작.", link: LINK_FADE_IN_CONTEST },
        { name: "동물 one 도그홀릭", image: IMG_DOGHOLIC, description: "동물 보호 활동을 위해 지역사회와 소통하는 연습.", link: LINK_DOGHOLIC },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "봉사활동 대상자와 소통하며 맞춤형 지원을 제공.", link: LINK_TALENT_ON },
        { name: "패밀리데이", image: IMG_FAMILY_DAY, description: "가족과 함께 게임을 하며 자연스럽게 소통하는 활동.", link: LINK_FAMILY_DAY },
        { name: "하모니연합활동", image: IMG_HARMONY_UNION, description: "다양한 청소년들과 교류하며 의사소통 능력을 확장.", link: LINK_HARMONY_UNION },
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "동아리 회원들과 협력하여 목표를 달성하는 활동.", link: LINK_TALENT_CLUB_UNION },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "전문가와의 상담을 통해 자신의 진로에 대해 소통.", link: LINK_FUTURE_ANALYSIS },
        { name: "가족컬러푸드", image: IMG_COLOR_FOOD, description: "가족과 함께 요리하며 소통하는 시간을 가짐.", link: LINK_COLOR_FOOD },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "기술을 활용하여 가족과 소통하는 방법을 배움.", link: LINK_SMART_HYO },
        { name: "바리스타동아리", image: IMG_BARISTA_CLUB, description: "동아리 회원, 손님들과 교류하며 대인관계를 키움.", link: LINK_BARISTA_CLUB },
        { name: "가족캠핑", image: IMG_FAMILY_CAMPING, description: "가족과 함께 캠핑을 하며 친밀감을 형성.", link: LINK_FAMILY_CAMPING }
    ],
    "창의력": [
        { name: "환경을 코딩하다", image: IMG_CODING_ENVIRONMENT, description: "코딩과 환경 문제를 융합하여 새로운 해결책을 모색.", link: LINK_CODING_ENVIRONMENT, strongPointImage: true },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "다양한 진로를 융합하여 새로운 직업을 상상.", link: LINK_FUTURE_ANALYSIS },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "기술과 효를 융합하여 새로운 사회적 가치를 창출.", link: LINK_SMART_HYO }
    ],
    "협업": [
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "청소년 시설의 문제점을 찾아 해결 방안을 모색.", link: LINK_YOUTH_COMMITTEE, strongPointImage: true },
        { name: "컨소시엄 Yes 인천", image: IMG_YES_INCHEON, description: "다양한 사회 문제를 해결하기 위해 여러 기관과 협력.", link: LINK_YES_INCHEON },
        { name: "진흥원 공모 ‘Fade In’", image: IMG_FADE_IN_CONTEST, description: "공모전 주제에 대한 문제를 정의하고 해결책을 제시.", link: LINK_FADE_IN_CONTEST },
        { name: "문화놀이터", image: IMG_CULTURE_PLAYGROUND, description: "다양한 놀이를 통해 문제해결 능력을 키우는 활동.", link: LINK_CULTURE_PLAYGROUND },
        { name: "스포츠놀이터", image: IMG_SPORTS_PLAYGROUND, description: "운동을 통해 전략적 사고와 문제해결 능력을 단련.", link: LINK_SPORTS_PLAYGROUND },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "봉사활동 중 발생하는 문제들을 해결하고 개선.", link: LINK_TALENT_ON },
        { name: "환경을 코딩하다", image: IMG_CODING_ENVIRONMENT, description: "환경 문제에 대한 해결책을 코딩으로 구현.", link: LINK_CODING_ENVIRONMENT },
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "동아리 운영 중 발생하는 문제들을 해결.", link: LINK_TALENT_CLUB_UNION },
        { name: "바리스타동아리", image: IMG_BARISTA_CLUB, description: "커피 제조 과정에서 발생하는 문제들을 해결.", link: LINK_BARISTA_CLUB },
        { name: "가족컬러푸드", image: IMG_COLOR_FOOD, description: "가족과 함께 요리하며 문제해결 능력을 키움.", link: LINK_COLOR_FOOD },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "기술적 문제를 해결하며 효를 실천.", link: LINK_SMART_HYO }
    ],
    "진로개발": [
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "다양한 청소년들과 함께 활동하며 대인관계 능력을 향상.", link: LINK_YOUTH_COMMITTEE, strongPointImage: true },
        { name: "보훈부 공모 ‘용사의 길’", image: IMG_WARRIORS_PATH, description: "팀 프로젝트를 통해 협력과 대인관계를 배우는 활동.", link: LINK_WARRIORS_PATH },
        { name: "비행가족", image: IMG_FLYING_FAMILY, description: "가족과의 관계를 돈독히 하고 소통을 증진.", link: LINK_FLYING_FAMILY },
        { name: "패밀리 플레이 히스토리", image: IMG_FAMILY_HISTORY, description: "가족과 함께하는 활동을 통해 친밀감을 형성.", link: LINK_FAMILY_HISTORY },
        { name: "컨소시엄 Yes 인천", image: IMG_YES_INCHEON, description: "다양한 사람들과 협력하여 대인관계를 넓히는 활동.", link: LINK_YES_INCHEON },
        { name: "진흥원 공모 ‘Fade In’", image: IMG_FADE_IN_CONTEST, description: "팀원들과 협업하며 프로젝트를 진행.", link: LINK_FADE_IN_CONTEST },
        { name: "동물 one 도그홀릭", image: IMG_DOGHOLIC, description: "동물을 사랑하는 사람들과 교류하며 대인관계를 형성.", link: LINK_DOGHOLIC },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "봉사 대상자와 교류하며 공감 능력과 대인관계를 키움.", link: LINK_TALENT_ON },
        { name: "패밀리데이", image: IMG_FAMILY_DAY, description: "가족과 함께하는 다양한 활동을 통해 대인관계를 강화.", link: LINK_FAMILY_DAY },
        { name: "하모니연합활동", image: IMG_HARMONY_UNION, description: "다양한 배경을 가진 청소년들과 어울리며 대인관계를 형성.", link: LINK_HARMONY_UNION },
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "동아리 회원들과 협력하여 목표를 달성하는 활동.", link: LINK_TALENT_CLUB_UNION },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "진로 전문가와의 상담을 통해 대인관계 기술을 배움.", link: LINK_FUTURE_ANALYSIS },
        { name: "가족컬러푸드", image: IMG_COLOR_FOOD, description: "가족과 함께 요리하며 소통하는 시간을 가짐.", link: LINK_COLOR_FOOD },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "기술을 활용하여 가족과 소통하는 방법을 배움.", link: LINK_SMART_HYO },
        { name: "바리스타동아리", image: IMG_BARISTA_CLUB, description: "동아리 회원, 손님들과 교류하며 대인관계를 키움.", link: LINK_BARISTA_CLUB },
        { name: "가족캠핑", image: IMG_FAMILY_CAMPING, description: "가족과 함께 캠핑을 하며 친밀감을 형성.", link: LINK_FAMILY_CAMPING }
    ],
    "사회정서": [
        { name: "청소년운영위원회", image: IMG_YOUTH_COMMITTEE, description: "시설 운영에 참여하며 민주적 절차와 시민의식을 배움.", link: LINK_YOUTH_COMMITTEE, strongPointImage: true },
        { name: "보훈부 공모 ‘용사의 길’", image: IMG_WARRIORS_PATH, description: "역사 탐방을 통해 애국심과 시민의식을 함양.", link: LINK_WARRIORS_PATH },
        { name: "컨소시엄 Yes 인천", image: IMG_YES_INCHEON, description: "사회 문제 해결을 위해 시민으로서의 역할을 고민.", link: LINK_YES_INCHEON },
        { name: "그린페스티벌", image: IMG_GREEN_FESTIVAL, description: "환경 보호의 중요성을 인식하고 시민의식을 높임.", link: LINK_GREEN_FESTIVAL },
        { name: "동물 one 도그홀릭", image: IMG_DOGHOLIC, description: "유기동물 보호 활동을 통해 공동체 의식을 실천.", link: LINK_DOGHOLIC },
        { name: "교육지원청 복지사업 재능온", image: IMG_TALENT_ON, description: "봉사 활동을 통해 사회적 책임을 배우고 시민의식을 함양.", link: LINK_TALENT_ON },
        { name: "환경을 코딩하다", image: IMG_CODING_ENVIRONMENT, description: "환경 문제 해결에 참여하며 시민의식을 높임.", link: LINK_CODING_ENVIRONMENT },
        { name: "하모니연합활동", image: IMG_HARMONY_UNION, description: "다양한 사람들과 협력하며 공동체 의식을 배우는 활동.", link: LINK_HARMONY_UNION },
        { name: "청소년재능동아리연합회", image: IMG_TALENT_CLUB_UNION, description: "동아리 활동을 통해 사회적 규범과 질서를 배움.", link: LINK_TALENT_CLUB_UNION },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "효를 실천하며 가족 구성원으로서의 책임감을 배움.", link: LINK_SMART_HYO }
    ],
    "디지털 역량": [
        { name: "보훈부 공모 ‘용사의 길’", image: IMG_WARRIORS_PATH, description: "디지털 기기를 활용하여 역사 탐방 정보를 수집.", link: LINK_WARRIORS_PATH, strongPointImage: true },
        { name: "비행가족", image: IMG_FLYING_FAMILY, description: "드론 조종과 코딩을 통해 디지털 기술을 배우는 활동.", link: LINK_FLYING_FAMILY },
        { name: "패밀리 플레이 히스토리", image: IMG_FAMILY_HISTORY, description: "디지털 콘텐츠를 활용하여 역사적 지식을 습득.", link: LINK_FAMILY_HISTORY },
        { name: "환경을 코딩하다", image: IMG_CODING_ENVIRONMENT, description: "코딩을 통해 디지털 문제해결 능력을 키움.", link: LINK_CODING_ENVIRONMENT },
        { name: "미래적성분석 프로그램", image: IMG_FUTURE_ANALYSIS, description: "디지털 도구를 활용하여 자신의 적성을 분석.", link: LINK_FUTURE_ANALYSIS },
        { name: "스마트하게 함께해HYO", image: IMG_SMART_HYO, description: "스마트폰 앱을 활용하여 효를 실천하는 활동.", link: LINK_SMART_HYO }
    ]
};
