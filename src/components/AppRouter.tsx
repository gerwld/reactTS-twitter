import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from '../routes/routes';

const AppRouter: React.FC = (): React.ReactElement => {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route: any) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component to={route.toPath ? route.toPath : ""} />}
            />
          ))
        : publicRoutes.map((route: any) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component to={route.toPath ? route.toPath : ""} />}
            />
          ))}
    </Routes>
  );
};

export default AppRouter;
