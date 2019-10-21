import { createContext } from "react";
import { AppState } from "src/types/app";

export const defaultState: AppState = {
  user: {
    password: "",
    address: "",
    country: "",
    creditCard: [],
    name: "",
    email: ""
  },
  gitHubUrl: "",
  onGitHubUrlChange: () => {},
  onUserChange: () => {}
};

export default createContext(defaultState);
