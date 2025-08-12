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
