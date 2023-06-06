import React, { useState } from "react";
import { AiOutlineMail, AiOutlineHistory } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { RxPencil2 } from "react-icons/rx";
import { RiLockPasswordLine } from "react-icons/ri";

const MyPage = () => {
  const [activeTab, setActiveTab] = useState("article");
  const [nickname, setNickName] = useState("wongil");
  const [email, setEmail] = useState("wongil@naver.com");
  const [password, setPassWord] = useState("abcdefghijk");

  const [isNickChangeBtnClick, setNickChangeBtnClick] = useState(false);
  const [isEmailChangeBtnClick, setEmailChangeBtnClick] = useState(false);
  const [isPwdChangeBtnClick, setPwdChangeBtnClick] = useState(false);

  const nickChangeBtnClickHandler = () => {
    setNickChangeBtnClick(!isNickChangeBtnClick);
  };
  const emailChangeBtnClickHandler = () => {
    setEmailChangeBtnClick(!isEmailChangeBtnClick);
  };
  const pwdChangeBtnClickHandler = () => {
    setPwdChangeBtnClick(!isPwdChangeBtnClick);
  };
  const handleTabsClick = (tab) => {
    setActiveTab(tab);
  };
  console.log(isNickChangeBtnClick, isEmailChangeBtnClick, isPwdChangeBtnClick);
  return (
    <div style={{ margin: "5rem 30rem" }}>
      <div>
        <h4>
          <RxPencil2 /> 내 정보 확인 및 수정
        </h4>

        <table className="mypage_container" style={{ marginTop: "1rem" }}>
          <colgroup>
            <col style={{ width: "200px" }}></col>
            <col style={{ width: "60%" }}></col>
            <col style={{ width: "20%" }}></col>
          </colgroup>
          <tbody>
            {/* 닉네임 */}
            <tr className={isNickChangeBtnClick ? "hide_row" : ""}>
              <th>
                <p>
                  <BiUserCircle /> 닉네임
                </p>
              </th>
              <td>
                <p>{nickname}</p>
              </td>
              <td>
                <button className=" button" onClick={nickChangeBtnClickHandler}>
                  변경
                </button>
              </td>
            </tr>
            {isNickChangeBtnClick && (
              <tr>
                <th>
                  <p>
                    <BiUserCircle /> 닉네임
                  </p>
                </th>
                <td>
                  *10자 이내 새로운 닉네임을 입력해주세요
                  <br />
                  *중복 닉네임은 불가합니다
                  <br />
                  <input
                    className="input"
                    type="text"
                    placeholder="새로운 닉네임"
                  />
                  <button
                    className="button"
                    type="submit"
                    onClick={() => setNickChangeBtnClick(!isNickChangeBtnClick)}
                  >
                    취소
                  </button>
                  <button className="button" type="submit">
                    확인
                  </button>
                </td>
              </tr>
            )}

            {/* 이메일 */}
            <tr className={isEmailChangeBtnClick ? "hide_row" : ""}>
              <th>
                <p>
                  <AiOutlineMail /> 이메일
                </p>
              </th>
              <td>
                <p>{email}</p>
              </td>
              <td>
                <button
                  className=" button"
                  onClick={emailChangeBtnClickHandler}
                >
                  변경
                </button>
              </td>
            </tr>
            {isEmailChangeBtnClick && (
              <tr>
                <th>
                  <p>
                    <AiOutlineMail /> 이메일
                  </p>
                </th>
                <td>
                  *10자 이내 새로운 닉네임을 입력해주세요
                  <br />
                  *중복 닉네임은 불가합니다
                  <br />
                  <input
                    className="input"
                    type="email"
                    placeholder="새로운 이메일"
                  />
                  <button
                    className="button"
                    type="submit"
                    onClick={() =>
                      setEmailChangeBtnClick(!isEmailChangeBtnClick)
                    }
                  >
                    취소
                  </button>
                  <button className="button" type="submit">
                    확인
                  </button>
                </td>
              </tr>
            )}
            {/* 비밀번호*/}
            <tr className={isPwdChangeBtnClick ? "hide_row" : ""}>
              <th>
                <p>
                  <RiLockPasswordLine /> 비밀번호
                </p>
              </th>
              <td>
                <p>{"".padEnd(password.length, "*")}</p>
              </td>
              <td>
                <button className=" button" onClick={pwdChangeBtnClickHandler}>
                  변경
                </button>
              </td>
            </tr>
            {isPwdChangeBtnClick && (
              <tr>
                <th>
                  <p>
                    <RiLockPasswordLine /> 비밀번호
                  </p>
                </th>
                <td>
                  *8자 이상 대문자 + 소문자 + 특수문자 비밀번호을 입력해주세요
                  <br />
                  <input
                    className="input"
                    type="password"
                    placeholder="새로운 비밀번호"
                  />
                  <button
                    className="button"
                    type="submit"
                    onClick={() => setPwdChangeBtnClick(!isPwdChangeBtnClick)}
                  >
                    취소
                  </button>
                  <button className="button" type="submit">
                    확인
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr
          style={{
            backgroundColor: "lightgray",
            marginTop: "2rem",
          }}
        />

        <h4>
          <AiOutlineHistory /> 나의 활동
        </h4>
        <div className="tabs" style={{ marginTop: "1rem" }}>
          <ul>
            <li
              className={activeTab === "article" ? "is-active" : ""}
              onClick={() => handleTabsClick("article")}
            >
              <a>작성 글</a>
            </li>
            <li
              className={activeTab === "comment" ? "is-active" : ""}
              onClick={() => handleTabsClick("comment")}
            >
              <a>작성 댓글</a>
            </li>
            <li
              className={activeTab === "like" ? "is-active" : ""}
              onClick={() => handleTabsClick("like")}
            >
              <a>좋아요한 글</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
