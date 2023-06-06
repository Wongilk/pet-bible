import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "lightgray",
        height: "8rem",
        position: "relative",
        transform: "translateY(-100)",
      }}
    >
      <div
        className="content has-text-centered"
        style={{ paddingTop: "0.5rem" }}
      >
        Follow
        <div>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
        </div>
        <p>Contact : sample@naver.com</p>
        <p>© 2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
