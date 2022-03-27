import React from "react";
import produce from "immer";
import { PostActionsTypes } from "../actions/posts";
import { LoadingStatus } from "../types";

const PostsState = {
  currentPostText: "",
  maxLength: 300,
  posts: undefined,
  LoadingStatus: LoadingStatus.NEVER,
};

const postReducer = (state = PostsState, action: any) => {
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
  switch (action.type) {
    case PostActionsTypes.ON_POST_TYPE:
      draft.currentPostText = action.payload;
      break;
    case PostActionsTypes.FETCH_POSTS_DATA:
      draft.posts = undefined;
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    case PostActionsTypes.SET_POSTS_DATA:
      draft.posts = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    case PostActionsTypes.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;
    default:
      break;
  }
}, PostsState);

export default postReducerOnImmer;
