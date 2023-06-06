import React, { useState } from "react";
import Board from "../components/Board";
import SearchBar from "../components/SearchBar";
import { useParams } from "react-router-dom";
import Posts from "../components/Posts";

const DetailCommunityPage = () => {
  const { category } = useParams();
  const [boardType, setBoardType] = useState("전체글");
  const [searchTerm, setSearchTerm] = useState("");

  const boardTypeChangeHandler = (value) => {
    setBoardType(value);
  };
  const getSearchTerm = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  };

  return (
    <div style={{ margin: "0 15rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "3rem 0",
        }}
      >
        <h1 className="title">
          {category} 반려인들 - {boardType}
        </h1>
        <div>
          <SearchBar
            style={{ width: "25rem" }}
            placeholder={"검색어 입력"}
            onChange={getSearchTerm}
          />
        </div>
      </div>

      <div style={{ display: "flex", margin: "1rem 0" }}>
        <Board boardTypeChangeHandler={boardTypeChangeHandler} />
        <Posts />
      </div>

      <div style={{ float: "right" }}>
        <button className="button is-black">
          <a style={{ color: "white" }} href="/writingPost">
            <span>글 쓰기</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default DetailCommunityPage;
