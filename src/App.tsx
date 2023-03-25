import React from "react";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";

const App = () => {
 const isAuth = true;
 const routes = isAuth ? privateRoutes : publicRoutes;
 return <RouterProvider router={routes} />;
}

export default App;
