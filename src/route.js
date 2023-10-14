import { createHashRouter } from "react-router-dom";
import App from "./pages/App";
import Main from "./pages/Main";
import AboutUsPage from "./pages/AboutUsPage";
import Artists from "./pages/Artists";
import Application from "./pages/Application";
import NickHoltPage from "./pages/NickHoltPage";
import ErrorPage from "./assets/components/ErrorPage";
import ReviewsPage from "./pages/ReviewsPage";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        path: "reviews",
        element: <ReviewsPage />,
      },
    ],
  },
  {
    path: "error",
    element: <ErrorPage />,
  },

  // {
  //   path: "/home",
  //   element: <App />,
  // },
]);

export default router;
