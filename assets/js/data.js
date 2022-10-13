let data = [
  {
    id: 1,
    image: "./assets/imgs/exams/image 105.png",
    title:
      "20 Bài Tập Kiểm Tra, Rèn Luyện Javascript Phần 4 (Câu hỏi và hướng dẫn chi tiết)",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 32,
  },
  {
    id: 2,
    image: "./assets/imgs/exams/image 108.png",
    title: "20 Bài Tập Về ES6 Và Javascript Hiện Đại Phần 2",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 15,
  },
  {
    id: 3,
    image: "./assets/imgs/exams/image 109.png",
    title: "Đề trắc nghiệm 500 câu MySQL tự luyện",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",

    users: 67,
  },
  {
    id: 4,
    image: "./assets/imgs/exams/image 105.png",
    title: "Python operator test (30 mins ver.)",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 23,
  },
  {
    id: 5,
    image: "./assets/imgs/exams/image 108.png",
    title: "Bộ 20 câu hỏi MySQL cơ bản 3",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 45,
  },
  {
    id: 6,
    image: "./assets/imgs/exams/image 109.png",
    title: "Đề trắc nghiệm 500 câu python tự luyện",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 10,
  },

  {
    id: 7,
    image: "./assets/imgs/exams/image 105.png",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 45,
  },
  {
    id: 8,
    image: "./assets/imgs/exams/image 108.png",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 67,
  },
  {
    id: 9,
    image: "./assets/imgs/exams/image 109.png",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    timeday: "Thời gian: 20h00 ngày 08 - 03 - 2022",
    users: 32,
  },
];

let ranksWeb = [
  {
    image: "./assets/imgs/ranks/148bdcb21c43d01d8952.jpg",
    fullname: "Nguyễn Tuấn Anh",
    poin: 200,
    skills: ["Javascript", "HTML/CSS", "ReactJs", "NodeJs"],
  },
  {
    image: "./assets/imgs/ranks/148bdcb21c43d01d8952.jpg",
    fullname: "Nguyễn Tuấn Anh",
    poin: 200,
    skills: ["Javascript", "HTML/CSS", "MongoDb", "NodeJs"],
  },
  {
    image: "./assets/imgs/ranks/148bdcb21c43d01d8952.jpg",
    fullname: "Nguyễn Tuấn Anh",
    poin: 180,
    skills: ["Javascript", "HTML/CSS", "ReactJs", "MongoDb"],
  },
  {
    image: "./assets/imgs/ranks/148bdcb21c43d01d8952.jpg",
    fullname: "Nguyễn Tuấn Anh",
    poin: 120,
    skills: ["Java", "HTML/CSS", "VueJs", "MySQL"],
  },
];

let examlist = [
  {
    id: 1,
    image: "./assets/imgs/exams/image 105.png",
    title: "20 Bài Tập Về ES6 Và Javascript Hiện Đại Phần 2",
    timestart: "2022/10/20 20:00:00",
    state: "future",
    branch: "Thiết kế web",
    users: 45,
  },
  {
    id: 2,
    image: "./assets/imgs/exams/image 108.png",
    title: "20 Bài Tập Về DOM Trong Javascript",
    timestart: "2022/10/18 20:00:00",
    state: "future",
    branch: "Thiết kế web",

    users: 49,
  },
  {
    id: 3,
    image: "./assets/imgs/exams/image 109.png",
    title: "20 Bài Tập Về ES6 Và Javascript Hiện Đại Phần 2",
    timestart: "2022/12/20 20:00:00",
    state: "future",
    branch: "Thiết kế web",

    users: 34,
  },
  {
    id: 4,
    image: "./assets/imgs/exams/image 109.png",
    title: "20 Bài Tập Về ES6 Và Javascript Hiện Đại Phần 2",
    timestart: "2022/11/20 20:00:00",
    state: "present",
    branch: "Thiết kế web",

    users: 34,
  },
  {
    id: 5,
    image: "./assets/imgs/exams/image 109.png",
    title: "20 Bài Tập Về ES6 Hiện Đại Phần 2",
    timestart: "2022/11/20 20:00:00",
    state: "present",
    branch: "Thiết kế web",

    users: 34,
  },
  {
    id: 6,
    image: "./assets/imgs/exams/image 108.png",
    title: "20 Bài Tập Về ES6 Hiện Đại Phần 2",
    timestart: "2022/12/20 20:00:00",
    state: "present",
    branch: "Thiết kế web",

    users: 12,
  },
  {
    id: 7,
    image: "./assets/imgs/exams/image 109.png",
    title: "20 Bài Tập Về ES6 Hiện Đại Phần 2",
    timestart: "2022/11/20 20:00:00",
    state: "past",
    branch: "Thiết kế web",

    users: 39,
  },
  {
    id: 8,
    image: "./assets/imgs/exams/image 105.png",
    title: "20 Bài Tập Về ES6 Hiện Đại Phần 2",
    timestart: "2022/11/20 20:00:00",
    state: "past",
    branch: "Thiết kế web",

    users: 78,
  },
  {
    id: 9,
    image: "./assets/imgs/exams/image 105.png",
    title: "20 Bài Tập Về ES6 Hiện Đại Phần 2",
    timestart: "2022/11/20 20:00:00",
    state: "past",
    branch: "Thiết kế web",
    users: 78,
  },
  {
    id: 10,
    image: "./assets/imgs/exams/image 105.png",
    title: "Graphic design toàn quốc",
    timestart: "2022/11/20 20:00:00",
    state: "past",
    branch: "TKDH",
    users: 78,
  },
  {
    id: 11,
    image: "./assets/imgs/exams/image 109.png",
    title: "Thiết kế bao bì",
    timestart: "2022/11/20 20:00:00",
    state: "past",
    branch: "TKDH",
    users: 78,
  },
  {
    id: 12,
    image: "./assets/imgs/exams/image 108.png",
    title: "Thiết kế Logo thế giới",
    timestart: "2022/11/20 20:00:00",
    state: "present",
    branch: "TKDH",
    users: 26,
  },
  {
    id: 13,
    image: "./assets/imgs/exams/image 108.png",
    title: "Thiết kế Logo thế giới",
    timestart: "2022/12/20 16:00:00",
    state: "future",
    branch: "TKDH",
    users: 67,
  },
  {
    id: 14,
    image: "./assets/imgs/exams/image 105.png",
    title: "Thiết kế Logo thế giới lần 2",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "TKDH",
    users: 56,
  },
  {
    id: 14,
    image: "./assets/imgs/exams/image 105.png",
    title: "Thiết kế Logo thế giới lần 2",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "TKDH",
    users: 56,
  },

  {
    id: 15,
    image: "./assets/imgs/exams/image 105.png",
    title: "Lập trình java toàn quốc",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "UDPM",
    users: 56,
  },
  {
    id: 16,
    image: "./assets/imgs/exams/image 108.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "UDPM",
    users: 26,
  },
  {
    id: 16,
    image: "./assets/imgs/exams/image 108.png",
    title: "Lập trình C# và Python fpoly",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "UDPM",
    users: 76,
  },
  {
    id: 17,
    image: "./assets/imgs/exams/image 109.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "present",
    branch: "UDPM",
    users: 26,
  },
  {
    id: 18,
    image: "./assets/imgs/exams/image 109.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "present",
    branch: "UDPM",
    users: 26,
  },
  {
    id: 19,
    image: "./assets/imgs/exams/image 109.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "past",
    branch: "UDPM",
    users: 26,
  },
  {
    id: 20,
    image: "./assets/imgs/exams/image 109.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "past",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 21,
    image: "./assets/imgs/exams/image 109.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "past",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 22,
    image: "./assets/imgs/exams/image 108.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "past",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 23,
    image: "./assets/imgs/exams/image 108.png",
    title: "Lập trình C# và Python",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 24,
    image: "./assets/imgs/exams/image 108.png",
    title: "Marketing in the word",
    timestart: "2022/12/20 12:00:00",
    state: "future",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 25,
    image: "./assets/imgs/exams/image 108.png",
    title: "Marketing in the word",
    timestart: "2022/12/20 12:00:00",
    state: "present",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 26,
    image: "./assets/imgs/exams/image 108.png",
    title: "Marketing in the word",
    timestart: "2022/12/20 12:00:00",
    state: "present",
    branch: "Marketing",
    users: 26,
  },
  {
    id: 27,
    image: "./assets/imgs/exams/image 108.png",
    title: "Marketing in the word",
    timestart: "2022/12/20 12:00:00",
    state: "present",
    branch: "Marketing",
    users: 26,
  },
];
