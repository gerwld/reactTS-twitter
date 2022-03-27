import { Navigate } from "react-router";
import Home from "../components/pages/MainScreen";
import SignIn from "../components/pages/SignIn";
import NotFound from "../components/pages/NotFound";
import { link } from "fs";

// React router dom v.6
export const privateRoutes = [
  { path: "/", component: Navigate, toPath: "/home" },
  // { path: "*", component: Navigate, toPath: "/not-found" },
  { path: "/not-found", component: NotFound },
  { path: "/home/*", component: Home },
  { path: "/explore", component: Home },
];

export const publicRoutes = [
  { path: "*", component: Navigate, toPath: "/sign" },
  { path: "/sign", component: SignIn },
  { path: "/", component: SignIn },
];

export const allRouteTitles = {
  "/home/tweet/": "Tweet",
  "/home": "Home",
  "/explore": "Explore",
};

export const getTitleByLocation = (loc: string, allRoute: object) => {
  let result = "/home";
  let lucky = allRoute[loc];
  if (lucky) return lucky;

  Object.keys(allRoute).find((e) => {
    if (loc.includes(e, 0)) {
      result = e;
      return true;
    }});
  return allRoute[result];
};
