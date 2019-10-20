import { createContext } from "react";
import { AppState } from "src/types/app";

const defaultState: AppState = {
  userName: "",
  gitHubUrl: "",
  onGitHubUrlChange: () => {},
  onUserNameChange: () => {}
};

export default createContext(defaultState);
