import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./scss/index.scss";
import App from "./App";
import ErrorPage404 from "./error-page-404";

const router = createHashRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage404 />,
  },
]);

const container = document.getElementById("root");
if (!container) {
  throw new Error('Root element with id "root" not found');
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
