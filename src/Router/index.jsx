import { createBrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import HomePage from "../Pages/HomePage.jsx";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
]);

export default router;
