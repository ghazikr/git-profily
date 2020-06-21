import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faMapMarkedAlt,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import statsData from "./statsData";

const FOOTER_ICON_COLOR = "#8C8B9C";

const formatDate = (date) => {
  const dateObj = new Date(date);
  return `${dateObj.getDate()}-${dateObj.getMonth()}-${dateObj.getFullYear()}`;
};

const iconStyles = {
  width: "22px",
  height: "25px",
  margin: "auto",
};

export default function UserInfo({ data }) {
  return (
    <section className="user-info card">
      <div className="user-info-header"></div>
      <div className="card-info-body">
        <img id="user-img" src={data.avatar_url} width="120px" height="120px" />
        <div
          className="name-info"
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <h1 id="user-name">{data.name}</h1>
          <span id="user-login-name">@{data.login}</span>
        </div>
        <div className="info-stats">
          <ul style={{ margin: "auto" }}>
            {statsData.map(({ name, icon, count, color }) => (
              <li
                className="row-stat"
                style={{ alignItems: "center", marginBottom: "22px" }}
                key={name}
              >
                <div className="icon-container">
                  <span
                    style={{
                      width: "60px",
                      height: "60px",
                      border: `1px solid ${color}`,
                      display: "flex",
                      borderRadius: "100%",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={icon}
                      color={color}
                      style={iconStyles}
                    />
                  </span>
                </div>

                <span className="stat-item-name">{name}</span>
                <span className="stat-item-nb">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="stats-footer">
        <div className="stat-box">
          <FontAwesomeIcon icon={faBriefcase} color={FOOTER_ICON_COLOR} />
          <span className="label-stat-box">{data.company}</span>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faMapMarkedAlt} color={FOOTER_ICON_COLOR} />
          <span className="label-stat-box">{data.location}</span>
        </div>
        <div className="stat-box">
          <FontAwesomeIcon icon={faCalendarWeek} color={FOOTER_ICON_COLOR} />
          <span className="label-stat-box">{formatDate(data.created_at)}</span>
        </div>
      </div>
    </section>
  );
}
