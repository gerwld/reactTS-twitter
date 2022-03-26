import { all } from "redux-saga/effects";
import { fetchPostsRequest, postSaga } from './saga';

export default function* rootSaga() {
  yield all([
    fetchPostsRequest(),
    postSaga()
  ])
}