import React from "react";
import { AiOutlineHome, AiOutlineComment } from "react-icons/ai";
import { BiBible } from "react-icons/bi";
const NavBar = () => {
  return (
    <div>
      <nav className="navbar" style={{ margin: "1rem 15rem" }}>
        <div className="navbar-brand">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/imgs/mainLogo.png`}
              width="90px"
              alt="mainLogo"
            />
          </a>
        </div>

        <div className="navbar-end">
          <a className="navbar-item" href="http://localhost:3000/">
            <AiOutlineHome size={40} /> <b> 홈</b>
          </a>
          <a className="navbar-item" href="http://localhost:3000/bible">
            <BiBible size={40} /> <b> 바이블</b>
          </a>
          <a className="navbar-item" href="http://localhost:3000/community">
            <AiOutlineComment size={40} /> <b> 펫뮤니티</b>
          </a>
        </div>
      </nav>
      <hr
        style={{
          backgroundColor: "lightgray",
          margin: "0 15rem",
        }}
      />
    </div>
  );
};

export default NavBar;
