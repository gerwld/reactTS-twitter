import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { PostsAPI } from '../../services/API/postsAPI';
import { PostActionsTypes, setLoadingState, setPosts, PostActionInterface } from '../actions/posts';
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

export function* addPostRequest({payload}: PostActionInterface) {
  try {
    const data = {
      _id: Math.random().toString(36).substring(2),
      text: payload,
      user: {
        username: "Among_us",
        fullname: "Sus sus",
        avatarUrl: "https://source.unsplash.com/random/100x100?100",
      }
    };
    const items:Promise<AxiosResponse> = yield call(PostsAPI.addPost, data);
    yield put(setPosts(data)); 
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR)); 
  }
}

export function* postSaga() {
  yield takeLatest(PostActionsTypes.FETCH_POSTS_DATA, fetchPostsRequest)
  yield takeLatest(PostActionsTypes.FETCH_ADD_POST, addPostRequest)
}