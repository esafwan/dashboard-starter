import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {PersistProvider} from "./Context/PersistContext";
import {AuthProvider} from "./Context/AuthContext";
import App from "./App";
import "./translations/i18n";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PersistProvider>
          <App/>
        </PersistProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);