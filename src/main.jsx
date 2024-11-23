import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AnimationsProvider } from "./context/Animations.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimationsProvider>
      <BrowserRouter>
        <ToastContainer />
        <App />
      </BrowserRouter>
    </AnimationsProvider>
  </StrictMode>
);
