import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/home";
import Abouts from "../pages/Abouts/Abouts";
import Services from "../pages/Services/Services";

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
    path: "/services",
    element: <Services />,
  },
]);
