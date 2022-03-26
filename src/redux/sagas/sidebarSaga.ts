import { AxiosResponse } from "axios";
import { sidebarApi } from "../../services/API/sidebarAPI";
import { put, takeLatest, call } from "redux-saga/effects";
import { getTopics, setLoadingState, SidebarActions } from "../actions/sidebar";
import { LoadingStatus } from "../types";

export function* fetchTopicsRequest() {
  try {
    const data: Promise<AxiosResponse> = yield call(sidebarApi.fetchTopics);
    yield put(getTopics(data));
  } catch (error) {
    yield put(setLoadingState(LoadingStatus.ERROR));
  }
}

export function* sidebarSaga() {
  yield takeLatest(SidebarActions.FETCH_TOPICS, fetchTopicsRequest);
}
