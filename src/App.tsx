import React, { useState, ReactElement } from "react";
import { Route, Switch } from "react-router";
import { NotFound } from "./pages/NotFound";
import { Landing } from "./pages/Landing";
import { Profile } from "./pages/Profile";
import AppContext from "./config/appContext";

const App = (): ReactElement<any> => {
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [userName, setUserName] = useState("");
  const gitHubUrlChanged = (url: string) => {
    setGitHubUrl(url);
  };
  const userNameChanged = (name: string) => {
    setUserName(name);
  };
  return (
    <AppContext.Provider
      value={{
        userName: userName,
        gitHubUrl: gitHubUrl,
        onGitHubUrlChange: gitHubUrlChanged,
        onUserNameChange: userNameChanged
      }}
    >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </AppContext.Provider>
  );
};

export default App;
