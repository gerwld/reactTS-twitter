import React from "react";
import produce from "immer";
import { PostActionsTypes } from "../actions/posts";
import { LoadingStatus } from "../types";

const PostsState = {
  currentPostText: "",
  maxLength: 300,
  posts: [],
  LoadingStatus: LoadingStatus.NEVER,
};

const postReducer = produce((draft, action) => {
  switch (action.type) {
    case PostActionsTypes.ON_POST_TYPE:
      draft.currentPostText = action.payload;
      break;
    case PostActionsTypes.FETCH_POSTS_DATA:
      draft.posts = [];
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    case PostActionsTypes.SET_POSTS_DATA:
      draft.posts = action.payload;
      draft.LoadingStatus = LoadingStatus.LOADED;
      break;
    case PostActionsTypes.SET_LOADING_STATE:
      draft.LoadingStatus = action.payload;
      break;
    case PostActionsTypes.FETCH_ADD_POST:
      draft.LoadingStatus = LoadingStatus.LOADING;
      break;
    case PostActionsTypes.ADD_POST:
      draft.posts.splice(0, 0, action.payload as never);
      break;

    default:
      break;
  }
}, PostsState);

export default postReducer;
