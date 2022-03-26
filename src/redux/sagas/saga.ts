import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PostsAPI } from '../../services/API/postsAPI';
import { fetchPosts, PostActionsTypes, setLoadingState } from '../actions/post';
import { AxiosResponse } from 'axios';
import { LoadingStatus } from '../types';

export function* fetchPostsRequest() {
  try {
    const data:Promise<AxiosResponse> = yield call(PostsAPI.fetchPosts);
    // yield put(fetchPosts(data)); 
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR)); 
  }
}

export function* watchIncrementAsync() {
  yield takeLatest(PostActionsTypes.FETCH_POSTS, fetchPostsRequest)
}