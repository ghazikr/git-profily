import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faBriefcase,
  faMapMarkedAlt,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
const ICON_COLOR = "#8C8B9C";
const formatDate = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`;
};

export default function UserInfo({ data }) {
  console.log("data", data);

  return (
    <section className="user-info card">
      <div
        className="header"
        style={{
          height: "160px",
          width: "100%",
          background: "#43425D",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>
      <div
        className="card-info-body"
        style={{ zIndex: 1 }}
        // style={{ transform: "translateY(-60px)" }}
      >
        <img
          src={data.avatar_url}
          width="120px"
          height="120px"
          style={{
            borderRadius: "100%",
            maxWidth: "100%",
            display: "flex",
            margin: "0 auto",
          }}
        />
        <div
          className="name-info"
          style={{ textAlign: "center", marginBottom: "40px" }}
        >
          <h2 id="user-name">{data.name}</h2>
          <span id="user-login-name">@{data.login}</span>
        </div>
        <div className="info-stats">
          {[
            { name: "Repositories", icon: faCodeBranch, count: 25 },
            { name: "Followers", icon: faCodeBranch, count: 51 },
            { name: "Following", icon: faCodeBranch, count: 18 },
          ].map(({ name, icon, count }) => (
            <div
              className="row-stat"
              style={{ alignItems: "center", marginBottom: "10px" }}
            >
              <span
                style={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #56D9FE",
                  display: "flex",
                  borderRadius: "100%",
                }}
              >
                <FontAwesomeIcon
                  icon={icon}
                  color="#56D9FE"
                  style={{ width: "22px", height: "25px", margin: "auto" }}
                />
              </span>
              <span className="stat-item-name">{name}</span>
              <span className="stat-item-nb">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-footer">
        <div className="stat-box">
          <FontAwesomeIcon icon={faBriefcase} color={ICON_COLOR} />
          <span className="label-stat-box">@{data.company}</span>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faMapMarkedAlt} color={ICON_COLOR} />
          <span className="label-stat-box">{data.location}</span>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faCalendarWeek} color={ICON_COLOR} />
          <span className="label-stat-box">{formatDate(data.created_at)}</span>
        </div>
      </div>
    </section>
  );
}
