import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';

import "./index.css";
import "./config/styles/index.scss";
import App from "./App";
import theme from './config/theme';

ReactDOM.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
