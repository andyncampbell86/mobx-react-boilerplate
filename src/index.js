import React from "react";
import { render } from "react-dom";
import { BrowserRouter, browserHistory } from "react-router-dom";
import DevTools from "mobx-react-devtools";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import Routes from "./routes";

import DefaultComponent from "./components/DefaultComponent";
import DefaultComponent2 from "./components/DefaultComponent2";

render(
  <MuiThemeProvider>
    <BrowserRouter history={browserHistory}>{Routes}</BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
