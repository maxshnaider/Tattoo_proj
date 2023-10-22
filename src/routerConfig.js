import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Main from "./pages/Main";
import AboutUsPage from "./pages/AboutUsPage";
import Artists from "./pages/Artists";
import Application from "./pages/Application";
import NickHoltPage from "./pages/NickHoltPage";
import ErrorPage from "./assets/components/ErrorPage";
import ReviewsPage from "./pages/ReviewsPage";
import SandraPage from "./pages/SandraPage";
import TerryDutraPage from "./pages/TerryDutraPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    index: true,
    element: <Main />,
  },
  {
    path: "about",
    element: <AboutUsPage />,
  },
  {
    path: "artists",
    element: <Artists />,
  },
  {
    path: "application",
    element: <Application />,
  },
  {
    path: "nick",
    element: <NickHoltPage />,
  },
  {
    path: "sandra",
    element: <SandraPage />,
  },
  {
    path: "terry",
    element: <TerryDutraPage />,
  },
  {
    path: "reviews",
    element: <ReviewsPage />,
  },
  {
    path: "error",
    element: <ErrorPage />,
  },
]);

export default router;
