import { all } from "redux-saga/effects";
import { fetchPostsRequest, watchIncrementAsync } from './saga';

export default function* rootSaga() {
  yield all([
    fetchPostsRequest(),
    watchIncrementAsync()
  ])
}