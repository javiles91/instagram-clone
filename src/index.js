import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);

// client side rendering app: react (cra)
// -> databaase whish is Firebase
// -> react-loading-skeleton

// architecture
// scr
// -> components,
// -> constants,
// -> context,
// -> helpers,
// -> hooks
// -> lib (firebase is going to live in here),
// -> services (firebase functions in here)
// -> styles (talwind's folder (app/tailwind))
