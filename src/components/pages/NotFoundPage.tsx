import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => (
 <div>
  <h1>NotFound - 404</h1>
  <NavLink to="/home">Go Home</NavLink>
 </div>
);

export default NotFoundPage;
