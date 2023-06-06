import React from "react";
import { CgProfile } from "react-icons/cg";
const DetailPostPage = () => {
  const sampleData = {
    profile: <CgProfile size={50} />,
    imgs: ["./imgs/샘플 이미지.jpeg"],
    title: "우리집 웰시",
    content: "3살",
    writer: "김원길",
    clicks: 1234,
    reg_date: "2023-05-18 14:56",
    category: "자랑",
    comments: ["귀엽네요"],
    likes: 15,
  };
  // sample
  const htm = {
    __html: `
  <div>
    <p>${sampleData.comments}</p>
    <img src="${sampleData.imgs[0]}"/>
    <b>abcdefg</b>
  </div>
  `,
  };
  const renderImgs = () => {
    return (
      <div>
        {sampleData.imgs.map((src, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img src={src} alt="imgs" style={{ width: "60rem" }} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="card" style={{ margin: "1rem 15rem" }}>
        <div className="card-content">
          {/* sample */}
          {/* <div dangerouslySetInnerHTML={htm}></div> */}

          <p>
            {sampleData.category} {`>`}
          </p>
          <p className="title is-5">{sampleData.title}</p>
          <div style={{ display: "flex" }}>
            <div>{sampleData.profile}</div>
            <div style={{ marginLeft: "1rem" }}>
              <div>
                <p>{sampleData.writer}</p>
              </div>
              <div>
                <span>{sampleData.reg_date} </span>
                <span>
                  {" "}
                  {"조회수 : "}
                  {sampleData.clicks}
                </span>
              </div>
            </div>
          </div>
          <hr style={{ backgroundColor: "lightgray", marginTop: "0" }} />
          {renderImgs()}
          <div style={{ textAlign: "center" }}>
            <p className="subtitle is-5">{sampleData.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPostPage;
