import { Action } from 'redux';
import { LoadingStatus } from '../types';
import { SidebarAction } from './interfaces/sidebarInterfaces';

export enum SidebarActions {
  FETCH_TOPICS = "/twitter-ts/topics/FETCH_TOPICS",
  SET_TOPICS_DATA = "/twitter-ts/topics/SET_TOPICS_DATA",
  SET_LOADING_STATE = "twitter-ts/topics/SET_LOADING_STATE",
}


export const fetchTopics:SidebarAction = {
  type: SidebarActions.FETCH_TOPICS
}

export const getTopics = (payload:object):SidebarAction => ({
  type: SidebarActions.SET_TOPICS_DATA,
  payload
})

export const setLoadingState = (payload: LoadingStatus): SidebarAction => ({
  type: SidebarActions.SET_LOADING_STATE,
  payload,
});