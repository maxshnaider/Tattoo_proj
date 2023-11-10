import { createBrowserRouter} from "react-router-dom";
import App from "./pages/App";
import Main from "./pages/Main";
import AboutUsPage from "./pages/AboutUsPage";
import Artists from "./pages/Artists";
import Application from "./pages/Application";
import ErrorPage from "./components/ErrorPage";
import ReviewsPage from "./pages/ReviewsPage";
import ArtistPage from "./pages/ArtistsPage";

const router = createBrowserRouter([
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
        path: "artists",
        element: <Artists />,
      },
      {
        path: "artists/:artistName",
        element: <ArtistPage />,
      },
      {
        path: "reviews",
        element: <ReviewsPage />,
      },
      {
        path: "error",
        element: <ErrorPage />,
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