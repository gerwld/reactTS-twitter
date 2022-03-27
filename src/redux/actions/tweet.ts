import { Action } from "redux";
import { LoadingStatus } from "../types";

export enum TweetActions {
  FETCH_TWEET_DATA = "/twitter-ts/tweet/FETCH_TWEET",
  SET_TWEET_DATA = "/twitter-ts/tweet/SET_TWEET_DATA",
  SET_LOADING_STATE = "twitter-ts/tweet/SET_LOADING_STATE",
}

export interface TweetAction extends Action<TweetActions> {
  type: TweetActions;
  payload?: object | string;
}

export interface FetchTweetDataActionInterface extends Action<TweetActions> {
  type: TweetActions.FETCH_TWEET_DATA;
  payload: string;
}

export const fetchTweet = (payload): TweetAction => ({
  type: TweetActions.FETCH_TWEET_DATA,
  payload,
});

export const getTweet = (payload: object): TweetAction => ({
  type: TweetActions.SET_TWEET_DATA,
  payload,
});

export const setLoadingState = (payload: LoadingStatus): TweetAction => ({
  type: TweetActions.SET_LOADING_STATE,
  payload,
});
