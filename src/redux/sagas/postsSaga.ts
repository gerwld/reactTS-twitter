import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PostsAPI } from '../../services/API/postsAPI';
import { PostActionsTypes, setLoadingState, setPosts } from '../actions/posts';
import { AxiosResponse } from 'axios';
import { LoadingStatus } from '../types';

export function* fetchPostsRequest() {
  try {
    const data:Promise<AxiosResponse> = yield call(PostsAPI.fetchPosts);
    yield put(setPosts(data)); 
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR)); 
  }
}

export function* postSaga() {
  yield takeLatest(PostActionsTypes.FETCH_POSTS_DATA, fetchPostsRequest)
}