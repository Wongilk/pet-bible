import React from "react";
import { BsClipboard } from "react-icons/bs";
import { boardTypes } from "./Datas";
const Board = ({ boardTypeChangeHandler }) => {
  const handleClick = (type) => {
    boardTypeChangeHandler(type);
  };
  return (
    <div>
      <aside className="menu" style={{ width: "15rem", textAlign: "center" }}>
        <p className="menu-label">
          <BsClipboard />
          게시판
        </p>
        <ul className="menu-list">
          {boardTypes.map((item, index) => (
            <li key={index} onClick={() => handleClick(item.name)}>
              <a>
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Board;
