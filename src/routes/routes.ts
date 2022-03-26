import { Navigate } from "react-router";
import Home from '../components/pages/Home';
import SignIn from '../components/pages/SignIn';
import NotFound from '../components/pages/NotFound';

// React router dom v.6
export const privateRoutes = [
  { path: "/", component: Navigate, toPath: "/home" },
  // { path: "*", component: Navigate, toPath: "/not-found" },
  { path: "/not-found", component: NotFound },
  { path: "/home", component: Home },
  { path: "/home/*", component: Home },
];

export const publicRoutes = [
  { path: "*", component: Navigate, toPath: "/sign" },
  { path: "/sign", component: SignIn },
  { path: "/", component: SignIn },
];
