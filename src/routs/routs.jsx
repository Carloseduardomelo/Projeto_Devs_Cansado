import { createBrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Abouts from "../pages/Abouts/Abouts";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Abouts />,
  },
]);
