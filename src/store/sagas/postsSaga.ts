import { call, put, takeLatest } from 'redux-saga/effects'
import { PostsAPI } from '../../services/API/postsAPI';
import { PostActionsTypes, setLoadingState, setPosts, addPost, setPostPendingState } from '../actions/posts';
import { AxiosResponse } from 'axios';
import { LoadingStatus, PendingStatus } from '../types';
import { PostActionInterface } from '../actions/interfaces/postInterfaces';

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
        username: "gerwld",
        fullname: "Gerwld",
        avatarUrl: "/img/avatar.jpeg",
      },
    };
    const resp: Promise<AxiosResponse> = yield call(PostsAPI.addPost, item);
    yield put(addPost(resp));

  } catch (error) {
    yield put(setPostPendingState(PendingStatus.ERROR));
  }
}

export function* postSaga() {
  yield takeLatest(PostActionsTypes.FETCH_POSTS_DATA, fetchPostsRequest);
  yield takeLatest(PostActionsTypes.FETCH_ADD_POST, addPostRequest);
}
