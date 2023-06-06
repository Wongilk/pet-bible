import React, { useState } from "react";
import { category } from "../components/Datas";
import SearchBar from "../components/SearchBar";
const CommunityPage = () => {
  const [comuunityWithSearchTerm, setCommunityWithSearchTerm] = useState([]);

  const getSearchTerm = (searchTerm) => {
    setCommunityWithSearchTerm(
      category.filter((item) => item.type === searchTerm)
    );
  };

  const renderCommunity = () => {
    if (comuunityWithSearchTerm.length >= 1) {
      return (
        <div className="columns is-multiline" style={{ margin: "5rem 30rem" }}>
          {comuunityWithSearchTerm.map((item) => {
            return (
              <div className="column is-one-third" key={item.id}>
                <div className="card" style={{ textAlign: "center" }}>
                  <a href={`/community/${item.type}`}>
                    <img src={item.communityImgSrc} alt="bible" />
                    <span className="tag is-warning is-medium">
                      {item.type}
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="columns is-multiline" style={{ margin: "5rem 30rem" }}>
          {category.map((item) => {
            return (
              <div className="column is-one-third" key={item.id}>
                <div className="card" style={{ textAlign: "center" }}>
                  <a href={`/community/${item.type}`}>
                    <img src={item.communityImgSrc} alt="bible" />
                    <span className="tag is-warning is-medium">
                      {item.type}
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  return (
    <div>
      <SearchBar
        style={{ margin: "3rem 35rem" }}
        placeholder={"찾고자 하는 반려동물을 입력해주세요"}
        onChange={getSearchTerm}
      />
      {renderCommunity()}
    </div>
  );
};

export default CommunityPage;
