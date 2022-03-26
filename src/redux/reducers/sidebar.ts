import React from "react";
import { produce } from "immer";

const sidebarState = {};

const sidebarReducer = produce((draft, action) => {
  switch (action.type) {
    case "Aboba":
      break;
    default:
      break;
  }
}, sidebarState);

export default sidebarReducer; 