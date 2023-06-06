import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";
const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let code = "";
  const loginWithKakao = () => {
    new window.Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/login",
    });
    code = searchParams.get("code");
    /*
    백에서 해야 할 듯?
    let body = {
        Content-Type
    }
    
    axios.post("https://kauth.kakao.com/oauth/token",)*/
  };
  return (
    <div>
      <a id="kakao-login-btn" onClick={loginWithKakao}>
        <img
          src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"
          width="250"
          alt="카카오 로그인 버튼"
        />
      </a>
    </div>
  );
};

export default KakaoLogin;
