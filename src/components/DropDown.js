import React, { useState } from "react";
const DropDown = ({ buttonName, content, ClickHandler }) => {
  const [isClick, setIsClick] = useState(false);
  const [clickedItem, setClickedItem] = useState("");
  const onClick = (item) => {
    ClickHandler(item);
    setClickedItem(item);
  };
  return (
    <div>
      <div
        className={isClick ? "dropdown is-active" : "dropdown"}
        onClick={() => setIsClick(!isClick)}
        style={{ width: "100%" }}
      >
        <div className="dropdown-trigger" style={{ width: "100%" }}>
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            style={{ width: "100%", justifyContent: "flex-start" }}
          >
            {clickedItem === "" ? buttonName : clickedItem}
          </button>
        </div>

        <div className="dropdown-menu" role="menu" style={{ width: "100%" }}>
          <div className="dropdown-content">
            {/* 여기서 뽑아온 데이터 content 출력 */}
            {content.map((item, index) => {
              return (
                <a
                  key={index}
                  className="dropdown-item"
                  onClick={() => onClick(item)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
