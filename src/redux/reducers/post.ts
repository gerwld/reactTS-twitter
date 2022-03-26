import React from "react";
import produce from "immer";
import { PostActionsTypes } from "../actions/post";
import { LoadingStatus } from "../types";

const initialState = {
  currentPostText: "",
  maxLength: 300,
  posts: undefined,
  LoadingStatus: LoadingStatus.NEVER,
};

const postReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PostActionsTypes.ON_POST_TYPE:
      return {
        ...state,
        currentPostText: action.payload,
      };
    default:
      return state;
  }
};

const postReducerOnImmer = produce((draft, action) => {
  const { payload } = action;
  switch (action.type) {
    case PostActionsTypes.ON_POST_TYPE:
      draft.currentPostText = payload;
      break;
    case PostActionsTypes.FETCH_POSTS:
      draft.posts = payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    case PostActionsTypes.SET_LOADING_STATE:
      draft.LoadingStatus = payload;
      break;
    default:
      break;
  }
}, initialState);

export default postReducerOnImmer;
