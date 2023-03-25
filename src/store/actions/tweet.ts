import { LoadingStatus } from "../types";
import { TweetAction, GetTweetDataActionInterface } from "./interfaces/tweetInterfaces";

export enum TweetActions {
  FETCH_TWEET_DATA = "/twitter-ts/tweet/FETCH_TWEET",
  SET_TWEET_DATA = "/twitter-ts/tweet/SET_TWEET_DATA",
  SET_LOADING_STATE = "twitter-ts/tweet/SET_LOADING_STATE",
}

export const fetchTweet = (payload): TweetAction => ({
  type: TweetActions.FETCH_TWEET_DATA,
  payload,
});

export const getTweet = (payload): GetTweetDataActionInterface => ({
  type: TweetActions.SET_TWEET_DATA,
  payload,
});

export const setLoadingState = (payload: LoadingStatus): TweetAction => ({
  type: TweetActions.SET_LOADING_STATE,
  payload,
});
