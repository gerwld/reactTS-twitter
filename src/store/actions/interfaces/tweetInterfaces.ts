import { Action } from "redux";
import { TweetActions } from "../tweet";

export interface TweetAction extends Action<TweetActions> {
  type: TweetActions;
  payload?: object | string;
}

export interface FetchTweetDataActionInterface extends Action<TweetActions> {
  type: TweetActions.FETCH_TWEET_DATA;
  payload: string;
}

export interface GetTweetDataActionInterface extends Action<TweetActions> {
  type: TweetActions.SET_TWEET_DATA;
  payload: object | undefined;
}
