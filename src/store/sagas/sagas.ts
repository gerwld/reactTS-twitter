import { all } from "redux-saga/effects";
import { fetchPostsRequest, postSaga } from './postsSaga';
import { sidebarSaga } from "./sidebarSaga";
import { tweetSaga } from "./tweetSaga";

export default function* rootSaga() {
  yield all([
    postSaga(),
    sidebarSaga(),
    tweetSaga()
  ])
}