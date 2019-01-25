import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store.js";
import App from "./App.jsx";
import { Provider } from "react-redux";
import SwitchTheme from "./counter/switchTheme";

console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <SwitchTheme />
    <App />
  </Provider>,
  document.getElementById("root")
);
