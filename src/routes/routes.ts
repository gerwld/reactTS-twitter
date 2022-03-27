import { Navigate } from "react-router";
import SignIn from "../components/pages/SignIn";
import NotFound from "../components/pages/NotFound";


// export const privateRoutes = [
//   { path: "/", component: Navigate, toPath: "/home" },
//   // { path: "*", component: Navigate, toPath: "/not-found" },
//   { path: "/not-found", component: NotFound },
//   { path: "/home/*", component: Home },
//   { path: "/explore", component: Home },
// ];

// React router dom v.6
export const publicRoutes = [
  { path: "*", component: Navigate, toPath: "/sign" },
  { path: "/sign", component: SignIn },
  { path: "/", component: SignIn },
];