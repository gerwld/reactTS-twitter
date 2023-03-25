import React from "react";
import { Provider } from "react-redux";
import store from "./redux/redux-store";
import { RouterProvider } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import Loader from "./components/UI/Loader/Loader";

function App() {
 const isAuth = true;
 const routes = isAuth ? privateRoutes : publicRoutes;
 return (
  <React.Suspense fallback={Loader}>
   <Provider store={store}>
    <RouterProvider router={routes} />
   </Provider>
  </React.Suspense>
 );
}

export default App;
