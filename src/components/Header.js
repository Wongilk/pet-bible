import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { MdPets } from "react-icons/md";
const Header = () => {
  return (
    <nav className="navbar" style={{ margin: "0 15rem" }}>
      <div className="navbar-brand">
        {/* 인스타 페이스북 등등  */}
        <a className="navbar-item">
          <BsFacebook size={25} />
        </a>
        <a className="navbar-item">
          <BsInstagram size={25} />
        </a>
        <a className="navbar-item">
          <BsYoutube size={25} />
        </a>
        <p className="navbar-item">
          성숙한 보호자가 되는 방법 [<MdPets size={20} />펫 바이블]
        </p>
      </div>

      <div className="navbar-end">
        <a className="navbar-item" href="http://localhost:3000/login">
          로그인
        </a>
        <span style={{ margin: "1rem auto" }}>|</span>
        <a className="navbar-item" href="http://localhost:3000/register">
          회원가입
        </a>
        <span style={{ margin: "1rem auto" }}>|</span>
        <a className="navbar-item" href="http://localhost:3000/mypage">
          마이페이지
        </a>
      </div>
    </nav>
    // <nav>
    //   <div className="navbar-brand" style={{ margin: "1rem 3rem" }}>
    //     <a href="/">
    //       <img src="./imgs/mainLogo.png" width="75px" alt="mainLogo" />
    //     </a>
    //     <div className="navbar-start"></div>

    //     <div className="navbar-item has-dropdown is-hoverable">
    //       <a className="navbar-link">
    //         <FaUserAlt size={35} />
    //       </a>
    //       <div className="navbar-dropdown">
    //         <a className="navbar-item" href="http://localhost:3000/login">
    //           로그인
    //         </a>
    //         <a className="navbar-item" href="http://localhost:3000/mypage">
    //           마이페이지
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   <hr style={{ backgroundColor: "black" }} />
    // </nav>
  );
};

export default Header;
