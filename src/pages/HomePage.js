import React from "react";
const HomePage = () => {
  return (
    <div>
      <div
        style={{ justifyContent: "center", display: "flex", marginTop: "5rem" }}
      >
        <h1 className="title is-4">최근 인기 게시물</h1>
      </div>
      <div
        className="columns is-multiline "
        style={{ margin: "5rem 15rem", textAlign: "center" }}
      >
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
          </div>
          <div className="content">First column</div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
          </div>
          <div className="content">Second column</div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
          </div>
          <div className="content">Third column</div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
          </div>
          <div className="content">Fourth column</div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
          </div>
          <div className="content">Fifth column</div>
        </div>
        <div className="column is-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder "
                />
              </figure>
            </div>
          </div>
          <div className="content">Sixth column</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
