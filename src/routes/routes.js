import { Navigate } from "react-router-dom";
import SignIn from "../components/pages/SignIn";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../components/pages/MainPage";

// React router dom v.6
export const publicRoutes = createBrowserRouter([
 { path: "*", element: <Navigate to="/sign" /> },
 { path: "/sign", element: <SignIn /> },
 { path: "/", element: <SignIn /> },
]);

export const privateRoutes = createBrowserRouter([
 { path: "/sign", element: <Navigate to="/" /> },
 { path: "*", element: <MainPage /> },
]);
