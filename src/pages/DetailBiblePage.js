import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import DropDown from "../components/DropDown";
import { useParams } from "react-router-dom";

const DetailBiblePage = () => {
  const { category } = useParams();
  const [selectedType, setSelectedType] = useState("-------------");
  const exContent = ["진돗개", "삽살개", "웰시코기"];
  console.log(category);
  const typeClickHandler = (type) => {
    setSelectedType(type);
  };
  return (
    <div style={{ margin: "5rem 15rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <DropDown
            buttonName={"품종"}
            content={exContent}
            ClickHandler={typeClickHandler}
          />
        </div>
        <div>
          <SearchBar style={{ width: "25rem" }} placeholder={"검색어 입력"} />
        </div>
      </div>

      <div className="tile is-ancestor" style={{ marginTop: "2rem" }}>
        <div className="tile is-parent is-4">
          <div className="tile is-child box">
            <figure className="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png" />
            </figure>
          </div>
        </div>
        <div className="tile is-parent is-8">
          <div className="tile is-child box">content</div>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-12">
          <div className="tile is-child box">main content</div>
        </div>
      </div>
    </div>
  );
};

export default DetailBiblePage;
