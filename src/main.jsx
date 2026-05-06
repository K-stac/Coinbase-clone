import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add this
import App from "./App.jsx";
import "./index.css";

const baseName = import.meta.env.MODE === 'production' ? '/' : '/Coinbase-clone';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={baseName}>
      <App />
    </BrowserRouter>
  </StrictMode>
);