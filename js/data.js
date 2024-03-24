const qnaList = [
    {
        // 공연 예술 분과 =0
        // 전시 창작과 =1
        // 교양분과 = 2
        // pe = 체육분과 3
        // 종교 분과 = 4
        // 학술 분과 = 5
        q: '1. 동아리 박람회에서 뭐 부터 할까?',
        a:  [
            {answer : ' A. 일단 신나게 공연부터 보자!', type : [0,1]},
            {answer : ' B. 나한테 도움될만한 동아리 찾아봐야지 ', type : [5,2]},
            {answer : ' C. 먼저 체험부터 해보면서 놀자', type : [3]},

        ]

    },

    {
        q: '2. 시험기간이라 스트레스 받네...',
        a:  [
            {answer : ' A. 기분전환 할 겸 좀 나가야겠다', type : [0, 3]},
            {answer : ' B. 일단 누워서 좀 쉬고 하자', type : [4]},
            {answer : ' C. 방이 더럽네.. 방청소부터 하고 해볼까...', type : [5, 1, 2]},

        ]

    },
    
    {
        q: '3. 종강때 세운 내 방학 계획은?',

        a:  [
            {answer : ' A. 이번 방학에는 자격증 딸거야!', type : [3, 5]},
            {answer : ' B. 여기 저기 다니면서 새로운 사람 만날래! ', type : [4, 2]},
            {answer : ' C. 좀 쉬면서 문화 생활을 즐길래', type : [1, 0]},

        ]

    }
    ,
    
    {
        q: '4. 종강파티때 어디에 앉을까?',
        a:  [
            {answer : ' A. 술 잘마시고 잘 노는 동기 옆자리', type : [0,3]},
            {answer : ' B. 나랑 취향이 비슷한 동기 옆자리', type : [2,4]},
            {answer : ' c. 갓생러로 유명한 동기 옆자리', type : [1,5]},

        ]

    },

    
    {
        q: '5. 친구들이 말하는 나는?',
        a:  [
            {answer : ' A. 넌 진짜 친해지면 웃긴 듯', type : [1,4]},
            {answer : ' B. 넌 왜그렇게 바빠?', type : [0,5]},
            {answer : ' C. 넌 진짜 인싸인 듯  ', type : [2,3]},

        ]

    },

    
    {
        q: '6. 아 진짜 이 사람이랑은 안맞아!',
        a:  [
            {answer : ' A. 필요할 때만 연락하는 친구', type : [2,4]},
            {answer : ' B. 티키타카가 안되는 친구', type : [0,3]},
            {answer : ' C. 내 상의 없이 끌고 다니는 친구', type : [1,5]},

        ]

    },

    
    {
        q: '7. 게임할 때 보통 나는?',
        a:  [
            {answer : ' A. 너네 내가 살림. 힐러', type : [0,4]},
            {answer : ' B. 공격이 제일 중요하지. 딜러나 탱커', type : [2,3]},
            {answer : ' C. 난 게임 안해..', type : [1,5]},

        ]

    },

    
    {
        q: '8. 오늘 점심 뭐 먹을래?',
        a:  [
            {answer : ' A. 무조건 맛집이지', type : [3,0]},
            {answer : ' B. 음..난 아무거나 다 괜찮아 애들이 먹자는거 먹을래', type : [4,5]},
            {answer : ' C. 인스타에 올려야하니까 인스타 감성인 곳으로 가자', type : [2,1]},

        ]

    }

    
]

        // 공연 예술 분과 =0
        // 전시 창작과 =1
        // 교양분과 = 2
        // pe = 체육분과 3
        // 종교 분과 = 4
        // 학술 분과 = 5

const infoList = [
    {
        name:'공연 예술 분과',
        desc:' 공연예술분과 동아리 알아보기!',
        club_name : ['Workers', '그라미', 'Udream', 'SDR'],
        images: [
            'img/club_img/club-0-1.png',
            'img/club_img/club-0-2.png',
            'img/club_img/club-0-3.png',
            'img/club_img/club-0-4.png',
        ],
        urls: [
        "https://www.instagram.com/sku_workers/",
        "https://www.instagram.com/gramy._.official/",
        "https://www.instagram.com/udream.sku/",
        "https://www.instagram.com/sdr.official_/"
        ] 
            
    },
    {
        name:'전시 창작과',
        desc:' 전시창작분과 동아리 알아보기!',
        club_name : [ '애니문','난반사', '스케쳐'],
        images: [
            'img/club_img/club-1-1.png',
            'img/club_img/default.png',
            'img/club_img/club-1-3.png',
        ],
        urls: [
            " ",
            " ",
            "https://www.instagram.com/skatcher_official/"
        ]

    },
    {
        name:'교양 분과',
        desc:' 교양분과 동아리 알아보기!',
        club_name : [ '공백','크레디트'],
        images: [
            'img/club_img/default.png',
            'img/club_img/default.png',
        ],
        urls: [
            " ",
            " ",
        ]
    },
    {
        name:'체육 분과',
        desc:' 체육분과 동아리 알아보기!',
        club_name : [ '서경콕','버디버디', '생무림', 'FC라플', '적시타', 'SKU-BA', '핀쓰리', 'SST', '디펜스', '두다지', 'OZ'],
        images: [
            'img/club_img/default.png',
            'img/club_img/default.png',
            'img/club_img/default.png',
            'img/club_img/default.png',
            'img/club_img/club-3-5.png',
            'img/club_img/default.png',
            'img/club_img/club-3-7.png',
            'img/club_img/default.png',
            'img/club_img/default.png',
            'img/club_img/default.png',
            'img/club_img/club-3-11.png',


        ],
        urls: [
            " ",
            " ",
            " ",
            " ",
            "https://www.instagram.com/juksita_2024/",
            
             
            "https://www.instagram.com/sku_pinthree_24/ ",
            " ",
            " ",
            " ",
            "https://www.instagram.com/oz_sku/"
        ]
    },
    {
        name:'종교 분과',
        desc:' 종교분과 동아리 알아보기!',
        club_name : [ 'IVF','CCC', 'UBF'],
        images: [
            'img/club_img/club-4-1.png',
            'img/club_img/club-4-2.png',
            'img/club_img/club-4-3.png'
        ],
        urls: [
            "https://www.instagram.com/sku_ivf/",
            "https://www.instagram.com/sku_ccc/",
            "https://www.instagram.com/sk_ubf/"
        ]
    },{
        name:'학술 분과',
        desc:' 학술분과 동아리 알아보기!',
        club_name : [ '멋쟁이사자처럼','연지', '불스', '민형사', 'DCT', '브랜딩클럽'],
        images: [
            'img/club_img/club-5-1.png',
            'img/club_img/club-5-2.png',
            'img/club_img/club-5-3.png',
            'img/club_img/club-5-4.png',
            'img/club_img/default.png',
            'img/club_img/club-5-6.png',
        ],
        urls: [
            "https://www.instagram.com/likelion_skuniv/",
            "https://www.instagram.com/sku_yeonji/",
            "https://www.instagram.com/sku_bulls/",
            "https://www.instagram.com/sku.cclrs/",
            " ",
            "https://www.instagram.com/brandingclub_official/"
        ]
    },
]