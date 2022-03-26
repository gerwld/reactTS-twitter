import { Action } from "redux"

export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  FETCH_POSTS = "twitter-ts/post/FETCH_POSTS"
}

export interface PostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes,
  payload: object | string
}

export const onPostType = (value: string): PostActionInterface => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload: value
})

export const fetchPosts = (obj: object): PostActionInterface => ({
  type: PostActionsTypes.FETCH_POSTS,
  payload: obj
})


export type PostActions = PostActionInterface;