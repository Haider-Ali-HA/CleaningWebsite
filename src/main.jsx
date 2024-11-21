import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AnimationsProvider } from "./context/Animations.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimationsProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AnimationsProvider>
  </StrictMode>
);
