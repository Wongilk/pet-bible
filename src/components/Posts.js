import React from "react";

const Posts = () => {
  return (
    <div style={{ width: "100%" }}>
      <table className="table" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[필독] ㄴㅁㅇㄴㅁㅇㅁㄴㄴㅁㄴㅇㄴㅇㅁㄴㄴㅁㅇ</td>
            <td>ㄱㅇㄱ</td>
            <td>2023.05.03</td>
            <td>1234</td>
          </tr>
          <tr>
            <td>
              [필독]
              ㄴㅁㅇㄴㅁdㅇㅁㄴㄴㅁㄴㅇㄴdddddddddddddddddddddㅇㅁㄴㄴㅁㅇ
            </td>
            <td>ㄱㅇㄱ</td>
            <td>2023.05.03</td>
            <td>1234</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
