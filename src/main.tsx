import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/scss/index.scss";
import App from "@/App";
import ErrorPage404 from "@/error-page-404";
import Index from "@/pages/Index";
import Catalog from "@/pages/Catalog";

const BASE_PATH = "/Sedona-HTML-Academy/";

const router = createBrowserRouter([
  {
    path: BASE_PATH,
    element: <App></App>,
    errorElement: <ErrorPage404 />,
    children: [
      {
        index: true,
        element: <Index></Index>,
      },
      {
        path: "catalog",
        element: <Catalog></Catalog>,
      },
      {
        path: "*",
        element: <ErrorPage404 />,
      },
    ],
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
