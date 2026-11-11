import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./store/index";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./Context/ThemeContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ThemeProvider>
    <Provider store={store}>
        <BrowserRouter>
          <div className="font-Dana">
            <Toaster position="top-right" reverseOrder={false} />

            <App />
          </div>
        </BrowserRouter>
    </Provider>
      </ThemeProvider>
  </StrictMode>,
);
