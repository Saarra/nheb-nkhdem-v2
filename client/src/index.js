import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StyledApp } from "./components/styles/Global.styled";

ReactDOM.render(
  <StyledApp>
  <Provider store={store}>
    <App />
  </Provider>
  </StyledApp>,
  document.getElementById("root")
);


// If you want your app to work offline and load faster, you can chađinge
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
