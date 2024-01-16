import { createBrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home/home";
import Abouts from "../pages/Abouts/Abouts";

import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Abouts />,
  },
  {
    path: "/error",
    element: <Error />,
  },

  <Route key="404" path="*" element={<Error />} />,
]);
