import { AxiosResponse } from "axios";
import { put, call, takeEvery } from "redux-saga/effects";

import { LoadingStatus } from "../types";
import { FetchTweetDataActionInterface, getTweet, setLoadingState, TweetActions } from "../actions/tweet";
import { PostsAPI } from '../../services/API/postsAPI';


export function* fetchTweetRequest({payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    const data: Promise<AxiosResponse> = yield call(PostsAPI.fetchPost, tweetId);
    yield put(getTweet(data));
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActions.FETCH_TWEET_DATA, fetchTweetRequest);
}
