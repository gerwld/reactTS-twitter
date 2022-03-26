import { Action } from "redux"

export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  FETCH_POSTS = "twitter-ts/post/FETCH_POSTS",
  SET_LOADING_STATE = "twitter-ts/post/SET_LOADING_STATE",
}

export interface PostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes,
  payload: object | string
}

export const onPostType = (payload: string): PostActionInterface => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload
})

export const fetchPosts = (payload: object): PostActionInterface => ({
  type: PostActionsTypes.FETCH_POSTS,
  payload
})

export const setLoadingState = (payload: string): PostActionInterface => ({
  type: PostActionsTypes.SET_LOADING_STATE,
  payload
})


export type PostActions = PostActionInterface;