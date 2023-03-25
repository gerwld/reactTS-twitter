import { Navigate } from "react-router-dom";
import {SignInPage, MainPage} from "components";
import { createBrowserRouter } from "react-router-dom";

// React router dom v.6
export const publicRoutes = createBrowserRouter([
 { path: "*", element: <Navigate to="/sign" /> },
 { path: "/sign", element: <SignInPage /> },
 { path: "/", element: <SignInPage /> },
]);

export const privateRoutes = createBrowserRouter([
 { path: "/sign", element: <Navigate to="/" /> },
 { path: "*", element: <MainPage /> },
]);
