import { Action } from "redux"

export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  FETCH_POSTS_DATA = "twitter-ts/post/FETCH_POSTS_DATA",
  SET_POSTS_DATA = "twitter-ts/post/SET_POSTS_DATA",
  SET_LOADING_STATE = "twitter-ts/post/SET_LOADING_STATE",
  FETCH_ADD_POST = "twitter-ts/post/ADD_POST",
  ADD_POST = "twitter-ts/post/ADD_POST",
}

export interface PostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes,
  payload: object | string
}

export interface FetchPostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes
}

export const onPostType = (payload: string): PostActions => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload
})

export const fetchPosts:FetchPostActionInterface = {
  type: PostActionsTypes.FETCH_POSTS_DATA,
}

export const setPosts = (payload: object): PostActions => ({
  type: PostActionsTypes.SET_POSTS_DATA,
  payload
})

export const setLoadingState = (payload: string): PostActions => ({
  type: PostActionsTypes.SET_LOADING_STATE,
  payload
})

export const fetchAddPost = (payload: string): PostActions => ({
  type: PostActionsTypes.FETCH_ADD_POST,
  payload
})

export const addPost = (payload: string): PostActions => ({
  type: PostActionsTypes.ADD_POST,
  payload
})


export type PostActions = PostActionInterface;