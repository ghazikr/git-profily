import React from "react";
import UserProfile from "./UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path={`/user_profile`}>
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}
