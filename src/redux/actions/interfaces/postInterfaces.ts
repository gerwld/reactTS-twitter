import { PostActionsTypes } from "../posts";
import { Action } from "redux";
import { PendingStatus } from "../../types";

export interface FetchPostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes;
}

export interface PostFetchingActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes;
  payload: PendingStatus;
}

export interface PostActionInterface extends Action<PostActionsTypes> {
  type: PostActionsTypes;
  payload: object | string;
}

export type PostActions = PostActionInterface;
