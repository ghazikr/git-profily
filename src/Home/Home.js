import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [usernameValue, setUsernameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const getUserInfo = () => {
    fetch(`https://api.github.com/users/${usernameValue}`)
      .then((response) => response.json())
      .then((data) => {
        // setUserInfo(data);
        if (data.message === "Not Found") {
          setErrorMessage("User not found");
        } else {
          history.push(`/user_profile?name=${usernameValue}`);
        }
        console.log("hhh", data);
      })
      .catch((error) => {
        console.log("hhh", { error });
      });
  };

  const handleEnterClick = (event) => {
    if (event.keyCode === 13) {
      getUserInfo();
    }
  };
  return (
    <div id="home-container">
      <div>
        <h1>Please provide your github username</h1>
        <input
          id="username-input"
          type="text"
          placeholder="User login"
          value={usernameValue}
          onKeyUp={handleEnterClick}
          onChange={(event) => setUsernameValue(event.target.value)}
        />
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}
