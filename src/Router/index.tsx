import { createBrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import HomePage from "../Pages/HomePage";
import InicioPage from "../Pages/InicioPage";

const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.INICIO,
    element: <InicioPage />,
  },
]);

export default router;
