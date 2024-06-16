const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

let posts1 = [
  {
    post_id: 1,
    title: "개망나니 밴드 : 서울 과기대 개망나니 밴드",
    content:
      "서울과기대 밴드부개망나니에서 세션을 구합니다! 남녀노소 누구나 환영합니다!! 저희 밴드에는 서울과기대 산공과를 휴학중인 21학번 멋있는 짱 보컬 김시은씨를 보유중입니다",
    created_at: "2024.06.02",
  },
  {
    post_id: 2,
    title: "깔루아 밴드 : 우리는 깔깔 깔루아!~ 홍익대 전통밴드 깔루아",
    content:
      "홍대 제일 밴드 깔루아에서 신입 부원을 모집합니다~!! 저희는 총 00명으로 구성되어있는 밴드이며 현재 ~~ 세션을 모집하고 있습니다!",
    created_at: "2024.06.01",
  },
  {
    post_id: 3,
    title: "000밴드 : 멋쟁이들만 모인 000밴드",
    content:
      "가족같은 밴드 000 입니다! 현재 드럼, 기타 세션을 모집하고 있습니다!! 여러분의 많은 지원과 관심 부탁드립니다",
    created_at: "2024.05.31",
  },
  {
    post_id: 4,
    title: "두번째 페이지에 나오는 4번째 밴드입니다",
    content: "동아리 소개글 4 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 5,
    title: "두번째 페이지에 나오는 5번째 밴드입니다",
    content: "동아리 소개글 5 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 6,
    title: "두번째 페이지에 나오는 6번째 밴드입니다",
    content: "동아리 소개글 6 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 7,
    title: "세번째 페이지에 나오는 7번째 밴드입니다",
    content: "동아리 소개글 7 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 8,
    title: "세번째 페이지에 나오는 8번째 밴드입니다",
    content: "동아리 소개글 8 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 9,
    title: "세번째 페이지에 나오는 9번째 밴드입니다",
    content: "동아리 소개글 9 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 10,
    title: "네번째 페이지에 나오는 10번째 밴드입니다",
    content: "동아리 소개글 10 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 11,
    title: "네번째 페이지에 나오는 11번째 밴드입니다",
    content: "동아리 소개글 11 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
];
let posts1_1 = [
  {
    post_id: 1,
    title: "개망나니 밴드 : 서울 과기대 개망나니 밴드",
    content:
      "서울과기대 밴드부개망나니에서 세션을 구합니다! 남녀노소 누구나 환영합니다!! 저희 밴드에는 서울과기대 산공과를 휴학중인 21학번 멋있는 짱 보컬 김시은씨를 보유중입니다",
    file_url: "/img/groupphoto1.jpg",
    nickname: "김시은",
    created_at: "2024.06.02",
    comments: [],
  },
  {
    post_id: 2,
    title: "깔루아 밴드 : 우리는 깔깔 깔루아!~ 홍익대 전통밴드 깔루아",
    content:
      "홍대 제일 밴드 깔루아에서 신입 부원을 모집합니다~!! 저희는 총 00명으로 구성되어있는 밴드이며 현재 ~~ 세션을 모집하고 있습니다!",
    file_url: "/img/groupphoto2.jpg",
    nickname: "윤영선",
    created_at: "2024.06.01",
    comments: [],
  },
  {
    post_id: 3,
    title: "000밴드 : 멋쟁이들만 모인 000밴드",
    content:
      "가족같은 밴드 000 입니다! 현재 드럼, 기타 세션을 모집하고 있습니다!! 여러분의 많은 지원과 관심 부탁드립니다",
    file_url: "",
    nickname: "김민중",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 4,
    title: "두번째 페이지에 나오는 4번째 밴드입니다",
    content:
      "동아리 소개글 4 : 어쩌구저쩌구",
    file_url: "",
    nickname: "고운",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 5,
    title: "두번째 페이지에 나오는 5번째 밴드입니다",
    content:
      "동아리 소개글 5 : 어쩌구저쩌구",
    file_url: "",
    nickname: "정재현",
    created_at: "2024.05.31",
    comments: [],
  },
  {
    post_id: 6,
    title: "두번째 페이지에 나오는 6번째 밴드입니다",
    content:
      "동아리 소개글 6 : 어쩌구저쩌구",
    file_url: "",
    nickname: "익명의 기타",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 7,
    title: "세번째 페이지에 나오는 7번째 밴드입니다",
    content:
      "동아리 소개글 7 : 어쩌구저쩌구",
    file_url: "",
    nickname: "익명의 베이스",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 8,
    title: "세번째 페이지에 나오는 8번째 밴드입니다",
    content:
      "동아리 소개글 8 : 어쩌구저쩌구",
    file_url: "",
    nickname: "익명의 키보드",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 9,
    title: "세번째 페이지에 나오는 9번째 밴드입니다",
    content:
      "동아리 소개글 9 : 어쩌구저쩌구",
    file_url: "",
    nickname: "익명의 드럼",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 10,
    title: "네번째 페이지에 나오는 10번째 밴드입니다",
    content:
      "동아리 소개글 10 : 어쩌구저쩌구",
    file_url: "",
    nickname: "익명의 보컬",
    created_at: "2024.05.31",
    comments: [],
  },{
    post_id: 11,
    title: "네번째 페이지에 나오는 11번째 밴드입니다",
    content:
      "동아리 소개글 11 : 어쩌구저쩌구",
    file_url: "",
    nickname: "익명의 드럼",
    created_at: "2024.05.31",
    comments: [],
  },
];
const posts2 = [
  {
    post_id: 1,
    title: "서울 과기대 개망나니 밴드와 함께 공연하실 분~!",
    content:
      "서울과기대 밴드부개망나니와 연합 공연 하실 밴드를 모집합니다~! 날짜는 7월 말로 예상중이고, 홍대에서 공연할 예정입니다! 한 팀당 곡 수는 4~5곡 정도로 준비해 주시면 됩니다!!",
    created_at: "2024.06.02",
  },
  {
    post_id: 2,
    title: "홍익대 밴드 깔루아에서 연합 공연 팀을 모집합니다!! ",
    content:
      "홍대 제일 밴드 깔루아에서 연합 공연 팀을 모집합니다~!! 저희는 총 00명으로 구성되어있는 밴드이며 현재 7월 중 공연을 준비하고 있습니다!",
    created_at: "2024.06.01",
  },
  {
    post_id: 3,
    title: "멋쟁이들만 모인 000밴드와 함꼐 공연하실 분~!",
    content:
      "가족같은 밴드 000 입니다! 연합공연을 함께하실 멋있는 밴드들을 구하고 있습니다! 여러분의 많은 지원과 관심 부탁드립니다",
    created_at: "2024.05.31",
  },
  {
    post_id: 4,
    title: "두번째 페이지에 나오는 4번째 밴드입니다",
    content: "동아리 소개글 4 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 5,
    title: "두번째 페이지에 나오는 5번째 밴드입니다",
    content: "동아리 소개글 5 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 6,
    title: "두번째 페이지에 나오는 6번째 밴드입니다",
    content: "동아리 소개글 6 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
  {
    post_id: 7,
    title: "두번째 페이지에 나오는 7번째 밴드입니다",
    content: "동아리 소개글 7 : 어쩌구저쩌구",
    created_at: "2024.05.31",
  },
];
let posts2_1 = [
  {
    post_id: 1,
    title: "서울 과기대 개망나니 밴드와 함께 공연하실 분~!",
    content:
      "서울과기대 밴드부개망나니와 연합 공연 하실 밴드를 모집합니다~! 날짜는 7월 말로 예상중이고, 홍대에서 공연할 예정입니다! 한 팀당 곡 수는 4~5곡 정도로 준비해 주시면 됩니다!!",

    file_url: "",
    nickname: "",
    created_at: "2024.06.02",
    comments: [
      
    ],
  },
  {
    post_id: 2,
    title: "홍익대 밴드 깔루아에서 연합 공연 팀을 모집합니다!! ",
    content:
      "홍대 제일 밴드 깔루아에서 연합 공연 팀을 모집합니다~!! 저희는 총 00명으로 구성되어있는 밴드이며 현재 7월 중 공연을 준비하고 있습니다!",

    file_url: "",
    nickname: "",
    created_at: "2024.06.01",
    comments: [
      
    ],
  },

  {
    post_id: 3,
    title: "멋쟁이들만 모인 000밴드와 함꼐 공연하실 분~!",
    content:
      "가족같은 밴드 000 입니다! 연합공연을 함께하실 멋있는 밴드들을 구하고 있습니다! 여러분의 많은 지원과 관심 부탁드립니다",

    file_url: "",
    nickname: "",
    created_at: "2024.05.31",
    comments: [
      
    ],
  },
  {
    post_id: 4,
    title: "두번째 페이지에 나오는 4번째 밴드입니다",
    content: "동아리 소개글 4 : 어쩌구저쩌구",

    file_url: "",
    nickname: "",
    created_at: "2024.05.31",
    comments: [
      
    ],
  },
  {
    post_id: 5,
    title: "두번째 페이지에 나오는 5번째 밴드입니다",
    content: "동아리 소개글 5 : 어쩌구저쩌구",

    file_url: "",
    nickname: "",
    created_at: "2024.05.31",
    comments: [
      
    ],
  },
  {
    post_id: 6,
    title: "두번째 페이지에 나오는 6번째 밴드입니다",
    content: "동아리 소개글 6 : 어쩌구저쩌구",

    file_url: "",
    nickname: "",
    created_at: "2024.05.31",
    comments: [
      
    ],
  },
  {
    post_id: 7,
    title: "세번째 페이지에 나오는 7번째 밴드입니다",
    content: "동아리 소개글 7 : 어쩌구저쩌구",

    file_url: "",
    nickname: "",
    created_at: "2024.05.31",
    comments: [
      
    ],
  },
];
const posts3 = [
  {
    post_id: 1,
    title: "키보드하는 김시은입니다",
    content:
      "안녕하세요 저는 서울과기대 산업공학과에 재학중인 김시은입니다 MBTI는 ENFP이고요 세션은 키보드를 맡고있습니다!!! 저를 데려가주실 멋진 밴드 구합니다 어딜가서든 열심히 할 자신도 잇고요 저같은 멤버 어디서 또 못구합니다 ...",
    created_at: "2024.06.04",
    nickname: "김시은",
    email: "tldms0507@naver.com",
    sessions: [
      {
        session_id: 5,
        session_info: "키보드",
        created_at: "2024.06.04",
      },
    ],
  },
  {
    post_id: 2,
    title: "밴드를 고민중인 김고민중입니다",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    created_at: "2024.06.13",
    nickname: "김민중",
    email: "이메일주소",
    sessions: [
      {
        session_id: 1,
        session_info: "드럼",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 3,
    title: "영선이네 밴드부의 영선입니다",
    content:
      "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    created_at: "timestamp",
    nickname: "윤영선",
    email: "string",
    sessions: [
      {
        session_id: 4,
        session_info: "베이스",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 4,
    title: "고운 고운",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    created_at: "timestamp",
    nickname: "고운",
    email: "string",
    sessions: [
      {
        session_id: 5,
        session_info: "키보드",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 5,
    title: "아이돌을 겸하고있는 정재현입니다",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    created_at: "timestamp",
    nickname: "정재현",
    email: "string",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 6,
    title: "ㅈ-ㅔ목",
    content: "내용",
    created_at: "timestamp",
    nickname: "6번학생",
    email: "이메일",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 7,
    title: "string",
    content: "string",
    created_at: "timestamp",
    nickname: "7번",
    email: "string",
    sessions: [
      {
        session_id: 2,
        session_info: "기타",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 8,
    title: "string",
    content: "string",
    created_at: "timestamp",
    nickname: "8번학생",
    email: "string",
    sessions: [
      {
        session_id: 4,
        session_info: "베이스",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 9,
    title: "string",
    content: "string",
    created_at: "timestamp",
    nickname: "9번",
    email: "string",
    sessions: [
      {
        session_id: 2,
        session_info: "기타",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 10,
    title: "string",
    content: "string",
    created_at: "timestamp",
    nickname: "10번",
    email: "string",
    sessions: [
      {
        session_id: 1,
        session_info: "드럼",
        created_at: "timestamp",
      },
    ],
  },
  {
    post_id: 11,
    title: "string",
    content: "string",
    created_at: "timestamp",
    nickname: "11번",
    email: "string",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
        created_at: "timestamp",
      },
    ],
  },
];
let posts3_1 = [
  {
    post_id: 1,
    title: "키보드하는 김시은입니다",
    content:
      "안녕하세요 저는 서울과기대 산업공학과에 재학중인 김시은입니다 MBTI는 ENFP이고요 세션은 키보드를 맡고있습니다!!! 저를 데려가주실 멋진 밴드 구합니다 어딜가서든 열심히 할 자신도 잇고요 저같은 멤버 어디서 또 못구합니다 ...",

    nickname: "김시은",
    email: "tldms0507@naver.com",
    created_at: "2024.06.04",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
  {
    post_id: 2,
    title: "밴드를 고민중인 김고민중입니다",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",

    nickname: "김민중",
    email: "이메일주소",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
  {
    post_id: 3,
    title: "영선이네 밴드부의 영선입니다",
    content:
      "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",

    nickname: "윤영선",
    email: "string",
    created_at: "2024.06.04",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
  {
    post_id: 4,
    title: "고운 고운",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",

    nickname: "고운",
    email: "string",
    created_at: "2024.06.04",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
  {
    post_id: 5,
    title: "아이돌을 겸하고있는 정재현입니다",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "정재현",
    email: "string",
    created_at: "2024.06.04",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
  {
    post_id: 6,
    title: "제목",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "이름",
    email: "Daeil@band.ac.kr",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
  {
    post_id: 7,
    title: "제목",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "이름",
    email: "Daeil@band.ac.kr",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 2,
        session_info: "기타",
      },
    ],
    comments: [],
  },
  {
    post_id: 8,
    title: "제목",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "이름",
    email: "Daeil@band.ac.kr",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 4,
        session_info: "베이스",
      },
    ],
    comments: [],
  },
  {
    post_id: 9,
    title: "제목",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "이름",
    email: "Daeil@band.ac.kr",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 2,
        session_info: "기타",
      },
    ],
    comments: [],
  },
  {
    post_id: 10,
    title: "제목",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "이름",
    email: "Daeil@band.ac.kr",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 1,
        session_info: "드럼",
      },
    ],
    comments: [],
  },
  {
    post_id: 11,
    title: "제목",
    content: "글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! 글 내용 ~! ",
    nickname: "이름",
    email: "Daeil@band.ac.kr",
    created_at: "2024.06.13",
    sessions: [
      {
        session_id: 3,
        session_info: "보컬",
      },
    ],
    comments: [],
  },
];
let posts = [...posts1, ...posts2, ...posts3];

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json({ posts: posts1 });
});

//상세 게시물 조회
app.get("/posts_1/:post_id", (req, res) => {
  const { post_id } = req.params;
  console.log(`Received request for post_id: ${post_id}`);
  const post = posts1_1.find((post) => post.post_id === parseInt(post_id));
  if (post) {
    console.log(`Found post: ${JSON.stringify(post)}`);
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});
app.get("/posts2_1/:post_id", (req, res) => {
  const { post_id } = req.params;
  console.log(`Received request for post_id: ${post_id}`);
  const post = posts2_1.find((post) => post.post_id === parseInt(post_id));
  if (post) {
    console.log(`Found post: ${JSON.stringify(post)}`);
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});
app.get("/posts3_1/:post_id", (req, res) => {
  const { post_id } = req.params;
  console.log(`Received request for post_id: ${post_id}`);
  const post = posts3_1.find((post) => post.post_id === parseInt(post_id));
  if (post) {
    console.log(`Found post: ${JSON.stringify(post)}`);
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

//게시판에 따른 게시물 조회
app.post("/posts", (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});
app.get("/posts2", (req, res) => {
  res.json({ posts: posts2 });
});

app.get("/posts3", (req, res) => {
  res.json({ posts: posts3 });
});


//댓글 추가
app.post('/posts_1/:post_id/comments', (req, res) => {
  const post_id = parseInt(req.params.post_id, 10);
  const post = posts1_1.find(post => post.post_id === post_id);
  
  if (post) {
    const newComment = req.body;
    //일단 comment_id를 날짜로 표기함
      newComment.comment_id = new Date().getTime().toString(); 
      post.comments.push(newComment);
      res.json({ success: true, result: post.comments });
  } else {
      res.json({ success: false, message: 'Post not found' });
  }
});
app.post('/posts2_1/:post_id/comments', (req, res) => {
  const post_id = parseInt(req.params.post_id, 10);
  const post = posts2_1.find(post => post.post_id === post_id);
  
  if (post) {
    const newComment = req.body;
      newComment.comment_id = new Date().getTime().toString(); 
      post.comments.push(newComment);
      res.json({ success: true, result: post.comments });
  } else {
      res.json({ success: false, message: 'Post not found' });
  }
});
app.post('/posts3_1/:post_id/comments', (req, res) => {
  const post_id = parseInt(req.params.post_id, 10);
  const post = posts3_1.find(post => post.post_id === post_id);
  
  if (post) {
    const newComment = req.body;
      newComment.comment_id = new Date().getTime().toString(); 
      post.comments.push(newComment);
      res.json({ success: true, result: post.comments });
  } else {
      res.json({ success: false, message: 'Post not found' });
  }
});

//게시글 수정
app.put("/posts/:post_id", (req, res) => {
  const { post_id } = req.params;
  const { title, content, file_url } = req.body;
 let updatedPost = null;
  // Search for the post in posts1
  let post1Index = posts1.findIndex((post) => post.post_id === parseInt(post_id));
  if (post1Index !== -1) {
    posts1[post1Index].title = title;
    posts1[post1Index].content = content;
    updatedPost = posts1[post1Index];
  }
  let post1_1Index = posts1_1.findIndex((post) => post.post_id === parseInt(post_id));
  if (post1_1Index !== -1) {
    posts1_1[post1_1Index].title = title;
    posts1_1[post1_1Index].content = content;
    updatedPost = posts1_1[post1_1Index];
  }

  if (updatedPost) {
    res.json({ success: true, updatedPost });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});
app.put("/posts2/:post_id", (req, res) => {
  const { post_id } = req.params;
  const { title, content, file_url } = req.body;
 let updatedPost = null;
  let post2Index = posts2.findIndex((post) => post.post_id === parseInt(post_id));
  if (post2Index !== -1) {
    posts2[post2Index].title = title;
    posts2[post2Index].content = content;
    updatedPost = posts2[post2Index];
  }
  let post2_1Index = posts2_1.findIndex((post) => post.post_id === parseInt(post_id));
  if (post2_1Index !== -1) {
    posts2_1[post2_1Index].title = title;
    posts2_1[post2_1Index].content = content;
    updatedPost = posts2_1[post2_1Index];
  }

  if (updatedPost) {
    res.json({ success: true, updatedPost });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});
app.put("/posts3/:post_id", (req, res) => {
  const { post_id } = req.params;
  const { title, content, file_url } = req.body;
 let updatedPost = null;

  let post3Index = posts3.findIndex((post) => post.post_id === parseInt(post_id));
  if (post3Index !== -1) {
    posts3[post3Index].title = title;
    posts3[post3Index].content = content;
    updatedPost = posts3[post3Index];
  }
  let post3_1Index = posts3_1.findIndex((post) => post.post_id === parseInt(post_id));
  if (post3_1Index !== -1) {
    posts3_1[post3_1Index].title = title;
    posts3_1[post3_1Index].content = content;
    updatedPost = posts3_1[post3_1Index];
  }

  if (updatedPost) {
    res.json({ success: true, updatedPost });
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
