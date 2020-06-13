import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function RepoCard({
  name,
  description,
  value,
  language,
  forks = 40,
}) {
  return (
    <li className="repo-card">
      <div className="left">
        <span>{name}</span>
        <p>{description}</p>
      </div>
      <div className="right">
        <span className="language-tag">{language}</span>
        <div className="repo-stats">
          <span style={{ marginRight: "5px" }}>
            <FontAwesomeIcon
              icon={faCodeBranch}
              color="#CECFD0"
              style={{ marginRight: "2px" }}
            />
            {forks}
          </span>
          <span>
            <FontAwesomeIcon
              icon={faStar}
              color="#CECFD0"
              style={{ marginRight: "2px" }}
            />
            {value}
          </span>
        </div>
      </div>
    </li>
  );
}
