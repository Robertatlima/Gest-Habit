import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import Providers from "./providers";
import GlobalStyle from "./styles/global";
import GlobalStyleReset from "./styles/reset/reset";
ReactDOM.render(
  <React.StrictMode>
   
      <Providers>
        <BrowserRouter>
        <GlobalStyleReset/>
        <GlobalStyle/>
          <App />
        </BrowserRouter>
      </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
