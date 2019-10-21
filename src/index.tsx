import * as React from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import axios from "axios";
import App from "./App";
import Theme from "./config/theme";

axios.defaults.baseURL = `http://${process.env.SERVER_BASE_URL}`;

const history = createBrowserHistory();
const GlobalStyle = createGlobalStyle`
  body {
    background: url(background.gif);
  }
`;

render(
  <ThemeProvider theme={Theme}>
    <Router history={history}>
      <GlobalStyle />
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
