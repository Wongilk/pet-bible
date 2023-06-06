import { BsPostcardHeart } from "react-icons/bs";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineNotification } from "react-icons/ai";
const category = [
  {
    id: 1,
    type: "강아지",
    bibleImgSrc: "./imgs/바이블/강아지 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/강아지 커뮤니티.png",
  },
  {
    id: 2,
    type: "고양이",
    bibleImgSrc: "./imgs/바이블/고양이 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/고양이 커뮤니티.png",
  },
  {
    id: 3,
    type: "토끼",
    bibleImgSrc: "./imgs/바이블/토끼 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/토끼 커뮤니티.png",
  },
  {
    id: 4,
    type: "새",
    bibleImgSrc: "./imgs/바이블/새 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/새 커뮤니티.png",
  },
  {
    id: 5,
    type: "햄스터",
    bibleImgSrc: "./imgs/바이블/햄스터 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/햄스터 커뮤니티.png",
  },
  {
    id: 6,
    type: "거북이",
    bibleImgSrc: "./imgs/바이블/거북이 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/거북이 커뮤니티.png",
  },
  {
    id: 7,
    type: "물고기",
    bibleImgSrc: "./imgs/바이블/물고기 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/물고기 커뮤니티.png",
  },
  {
    id: 8,
    type: "도마뱀",
    bibleImgSrc: "./imgs/바이블/도마뱀 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/도마뱀 커뮤니티.png",
  },
  {
    id: 9,
    type: "곤충",
    bibleImgSrc: "./imgs/바이블/곤충 바이블.png",
    communityImgSrc: "./imgs/커뮤니티/곤충 커뮤니티.png",
  },
];
const boardTypes = [
  {
    name: "전체글",
    icon: <MdOutlineArticle />,
  },
  {
    name: "인기글",
    icon: <BsPostcardHeart />,
  },
  {
    name: "공지",
    icon: <AiOutlineNotification />,
  },
  {
    name: "정보 공유",
    icon: <MdOutlineArticle />,
  },
  {
    name: "자랑",
    icon: <MdOutlineArticle />,
  },
  {
    name: "꿀팁",
    icon: <MdOutlineArticle />,
  },
  {
    name: "자유",
    icon: <MdOutlineArticle />,
  },
];
export { category, boardTypes };
