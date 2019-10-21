import React, { useState, ReactElement } from "react";
import { Route, Switch } from "react-router";
import { NotFound } from "./pages/NotFound";
import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Topic } from "./pages/Topic";
import AppContext, { defaultState } from "./config/appContext";
import { User } from "./types/app";

const App = (): ReactElement<any> => {
  const [gitHubUrl, setGitHubUrl] = useState("");
  const [user, setUser] = useState(defaultState.user);
  const gitHubUrlChanged = (url: string) => {
    setGitHubUrl(url);
  };
  const handleUserChange = (user: User) => {
    setUser(user);
  };
  return (
    <AppContext.Provider
      value={{
        user: user,
        gitHubUrl: gitHubUrl,
        onGitHubUrlChange: gitHubUrlChanged,
        onUserChange: handleUserChange
      }}
    >
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/topic" component={Topic} />
        <Route component={NotFound} />
      </Switch>
    </AppContext.Provider>
  );
};

export default App;
