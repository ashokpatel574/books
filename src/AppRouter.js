import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DataContextProvider from "./context/DataContext";
import App from "./App";
import SearchPage from "./pages/SearchPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <DataContextProvider>
        <App />
      </DataContextProvider>
    ),
  },
  {
    path: "/search",
    element: (
      <DataContextProvider>
        <SearchPage />
      </DataContextProvider>
    ),
  },
]);

export default AppRouter;
