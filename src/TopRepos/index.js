import React from "react";
import "./repos.css";

import RepoCard from "./RepoCard";
export default function UserRepos({ data }) {
  return (
    <section className="section-card">
      <h1>Top Repos</h1>
      <ul id="user-repos">
        {data.map(({ name, value, language, description }) => (
          <RepoCard
            name={name}
            value={value}
            language={language}
            description={description}
            key={name}
          />
        ))}
      </ul>
    </section>
  );
}
