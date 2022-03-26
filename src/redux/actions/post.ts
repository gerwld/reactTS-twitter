
export enum PostActionsTypes {
  ON_POST_TYPE = "twitter-ts/post/ON_POST_TYPE",
  GET_LAST_POSTS = "twitter-ts/post/GET_LAST_POSTS"
}

export const onPostType = (value: string) => ({
  type: PostActionsTypes.ON_POST_TYPE,
  payload: value
})

export const getAllPosts = (obj: object) => ({
  type: PostActionsTypes.GET_LAST_POSTS,
  payload: obj
})