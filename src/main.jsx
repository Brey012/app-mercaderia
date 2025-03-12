import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PanelControl from "./pages/PanelDeControl";
import Login from "./pages/auth/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
let router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/panel",
    element: <PanelControl />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
