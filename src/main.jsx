import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Reservation from "./pages/Reservation.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
   {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/reservation",
    element: <Reservation />
  }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />,

  <StrictMode>
    <App />
  </StrictMode>
);
