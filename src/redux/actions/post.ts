import { Action } from "redux"

export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  FETCH_POSTS_DATA = "twitter-ts/post/FETCH_POSTS_DATA",
  SET_POSTS_DATA = "twitter-ts/post/SET_POSTS_DATA",
  SET_LOADING_STATE = "twitter-ts/post/SET_LOADING_STATE",
}

export interface PostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes,
  payload: object | string
}

export const onPostType = (payload: string): PostActions => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload
})

export const fetchPosts = () => ({
  type: PostActionsTypes.FETCH_POSTS_DATA,
})

export const setPosts = (payload: object) => ({
  type: PostActionsTypes.SET_POSTS_DATA,
  payload
})

export const setLoadingState = (payload: string): PostActions => ({
  type: PostActionsTypes.SET_LOADING_STATE,
  payload
})


export type PostActions = PostActionInterface;