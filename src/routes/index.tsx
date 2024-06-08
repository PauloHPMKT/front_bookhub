import { createBrowserRouter } from "react-router-dom";
import { BookDetails } from "../pages/BookDetails";
import App from "../App";
import { Home } from "../pages/Home";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <BookDetails />,
      },
      { 
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <BookDetails />,
      },
    ]
  },
]);

