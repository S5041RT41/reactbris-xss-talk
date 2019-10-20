import * as React from "react";
import { render } from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import Theme from "./config/theme";

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
