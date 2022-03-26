import { Action } from "redux"

export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  GET_LAST_POSTS = "twitter-ts/post/GET_LAST_POSTS"
}

export interface PostActionInterface extends Action {
  type: PostActionsTypes,
  payload: object | string
}

export const onPostType = (value: string): PostActionInterface => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload: value
})

export const getAllPosts = (obj: object): PostActionInterface => ({
  type: PostActionsTypes.GET_LAST_POSTS,
  payload: obj
})