import { all } from "redux-saga/effects";
import { fetchPostsRequest, postSaga } from './postsSaga';
import { sidebarSaga } from "./sidebarSaga";

export default function* rootSaga() {
  yield all([
    postSaga(),
    sidebarSaga()
  ])
}