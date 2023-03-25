import { PendingStatus } from "../types";
import {
  FetchPostActionInterface,
  PostActions,
  PostFetchingActionInterface,
} from "./interfaces/postInterfaces";

export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  FETCH_POSTS_DATA = "twitter-ts/post/FETCH_POSTS_DATA",
  SET_POSTS_DATA = "twitter-ts/post/SET_POSTS_DATA",
  SET_LOADING_STATE = "twitter-ts/post/SET_LOADING_STATE",

  FETCH_ADD_POST = "twitter-ts/post/FETCH_ADD_POST",
  ADD_POST = "twitter-ts/post/ADD_POST",
  SET_POST_PENDING_STATE = "twitter-ts/post/SET_POST_PENDING_STATE",
}

export const onPostType = (payload: string): PostActions => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload,
});

export const fetchPosts: FetchPostActionInterface = {
  type: PostActionsTypes.FETCH_POSTS_DATA,
};

export const setPosts = (payload: object): PostActions => ({
  type: PostActionsTypes.SET_POSTS_DATA,
  payload,
});

export const setLoadingState = (payload: string): PostActions => ({
  type: PostActionsTypes.SET_LOADING_STATE,
  payload,
});

export const fetchAddPost = (payload: string): PostActions => ({
  type: PostActionsTypes.FETCH_ADD_POST,
  payload,
});

export const addPost = (payload): PostActions => ({
  type: PostActionsTypes.ADD_POST,
  payload,
});

export const setPostPendingState = (payload: PendingStatus): PostFetchingActionInterface => ({
  type: PostActionsTypes.SET_POST_PENDING_STATE,
  payload,
});
