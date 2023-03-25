import React from "react";
import { produce } from "immer";
import { SidebarActions } from "../actions/sidebar";
import { LoadingStatus } from "../types";

const sidebarState = {
  topics: [],
  LoadingState: LoadingStatus.NEVER,
};

const sidebarReducer = produce((draft, action) => {
  switch (action.type) {
    case SidebarActions.FETCH_TOPICS:
      draft.topics = [];
      draft.LoadingState = LoadingStatus.LOADING;
      break;
    case SidebarActions.SET_TOPICS_DATA:
      draft.topics = action.payload;
      draft.LoadingState = LoadingStatus.LOADED;
      break;
    case SidebarActions.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
    default:
      break;
  }
}, sidebarState);

export default sidebarReducer;
