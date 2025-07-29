import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register.tsx";
import Home from "./pages/Home.tsx";
import AudioTech from "./pages/AudioTech.tsx";
import Product from "./pages/Product.tsx";
import Layout from "./components/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Home",
        element: <Home />,
      },
      {
        path: ":AudioTech",
        element: <AudioTech />,
      },
      {
        path: "Product",
        element: <Product />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
