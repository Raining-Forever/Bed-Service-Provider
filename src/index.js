import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ScoreProvider } from "./context/ScoreContext";
import { AuthProvider } from "./context/AuthContext";

import moment from "moment-timezone";
import { BrowserRouter as Router } from "react-router-dom";

moment.tz.setDefault("UTC");
ReactDOM.render(
  <Router>
    <ScoreProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ScoreProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
