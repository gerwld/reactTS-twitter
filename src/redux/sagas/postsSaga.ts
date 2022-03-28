import { call, put, takeLatest } from 'redux-saga/effects'
import { PostsAPI } from '../../services/API/postsAPI';
import { PostActionsTypes, setLoadingState, setPosts, PostActionInterface, addPost } from '../actions/posts';
import { AxiosResponse } from 'axios';
import { LoadingStatus } from '../types';

export function* fetchPostsRequest() {
  try {
    const data: Promise<AxiosResponse> = yield call(PostsAPI.fetchPosts);
    yield put(setPosts(data));
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR));
  }
}

export function* addPostRequest({ payload }: PostActionInterface) {
  try {
    const item = {
      _id: Math.random().toString(36).substring(2),
      id: Math.random().toString(36).substring(2),
      text: payload,
      user: {
        username: "Among_us",
        fullname: "Sus sus",
        avatarUrl: "https://source.unsplash.com/random/100x100?100",
      },
    };
    const resp = yield call(PostsAPI.addPost, item);

    yield put(addPost(resp));
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR));
  }
}

export function* postSaga() {
  yield takeLatest(PostActionsTypes.FETCH_POSTS_DATA, fetchPostsRequest);
  yield takeLatest(PostActionsTypes.FETCH_ADD_POST, addPostRequest);
}
