import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCode } from "@fortawesome/free-solid-svg-icons";

export default function RepoCard({ name, description, value, language }) {
  return (
    <li className="repo-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="repo-footer">
        <span>
          <FontAwesomeIcon icon={faStar} />
          {value}
        </span>
        <span>
          <FontAwesomeIcon icon={faCode} /> {language}
        </span>
      </div>
    </li>
  );
}
