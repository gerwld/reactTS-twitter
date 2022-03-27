import React from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes/routes";

const AuthRouter: React.FC = (): React.ReactElement => {
  return (
    <Routes>
      {publicRoutes.map((route: any) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component to={route.toPath ? route.toPath : ""} />}
        />
      ))}
    </Routes>
  );
};

export default AuthRouter;
