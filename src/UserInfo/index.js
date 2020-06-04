import React from "react";

export default function UserInfo({ data }) {
  return (
    <section
      className="user-info"
      style={{
        minWidth: "400px",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,.125)",
      }}
    >
      <div className="content" style={{ width: "100%" }}>
        <div
          className="placeholder"
          style={{ height: "150px", background: "#eef" }}
        ></div>
        <div style={{ transform: "translateY(-60px)" }}>
          <img
            src={data.avatar_url}
            width="120px"
            height="120px"
            style={{ borderRadius: "100%", maxWidth: "100%" }}
          />
          <div className="name-info">
            <span>{data.name}</span> <span>{data.login}</span>
          </div>
          <p>works {data.company}</p>
          <p> {data.location}</p>
          <div className="stats" style={{ display: "flex" }}>
            <div style={{ flexGrow: "1" }}>
              <h5>repos </h5>
              {data.public_repos}
            </div>
            <div style={{ flexGrow: "1" }}>
              <h5>followers </h5>
              {data.followers}
            </div>
            <div style={{ flexGrow: "1" }}>
              <h5>following </h5>
              {data.following}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
