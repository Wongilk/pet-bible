import React, { useState } from "react";
import DropDown from "../components/DropDown";
import { boardTypes } from "../components/Datas";
import PostEditor from "../components/PostEditor";
const WritingPostPage = () => {
  const [boardType, setBoardType] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");

  let content = [];
  boardTypes.map((item) => {
    if (item.name !== "인기글") content.push(item.name);
  });

  const boardTypeClickHandler = (boardType) => {
    setBoardType(boardType);
  };

  const titleChangeHandler = (e) => {
    setPostTitle(e.target.value);
  };
  const getContent = (value) => {
    setPostContent(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    boardType !== ""
      ? alert(boardType + postTitle)
      : alert("게시판을 선택해주세요");
    let body = {
      boardType: boardType,
      postTitle: postTitle,
      postContent: postContent,
    };
    //to Back-end
  };

  return (
    <div style={{ margin: "2rem 15rem" }}>
      <h1 className="title is-3">카페 글쓰기</h1>
      <hr style={{ backgroundColor: "black" }} />

      <div>
        <DropDown
          buttonName={"게시판을 선택해주세요"}
          content={content}
          ClickHandler={boardTypeClickHandler}
        />
        <form onSubmit={submitHandler}>
          <input
            className="input"
            type="text"
            placeholder="제목을 입력해주세요"
            style={{ marginTop: "1rem" }}
            onChange={titleChangeHandler}
            value={postTitle}
            required
          />

          <PostEditor getContent={getContent} />

          <button
            className="button"
            type="submit"
            style={{ marginTop: "3rem", float: "right" }}
          >
            작성하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default WritingPostPage;
