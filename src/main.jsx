import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { router } from "./App.jsx";
import ThemeContextProvider from "./contexts/themeContext.jsx";
import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext.jsx";
import DataContextProvider from "./contexts/dataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <CartContextProvider>
        <DataContextProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </DataContextProvider>
      </CartContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
