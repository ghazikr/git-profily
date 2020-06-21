import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [usernameValue, setUsernameValue] = useState("");
  const history = useHistory();

  const handleEnterClick = (event) => {
    if (event.keyCode === 13) {
      history.push(`/user_profile?login=${usernameValue}`);
    }
  };
  return (
    <div id="home-container">
      <h1>Please provide your github login</h1>
      <input
        type="text"
        id="username-input"
        value={usernameValue}
        onKeyUp={handleEnterClick}
        onChange={(event) => setUsernameValue(event.target.value)}
      />
    </div>
  );
}
