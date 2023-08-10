import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyle from "./components/GlobalStyle/index.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle>
      <App />
    </GlobalStyle>
  </React.StrictMode>
);
