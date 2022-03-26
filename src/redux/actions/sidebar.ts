import { Action } from 'redux';

export enum SidebarActions {
  FETCH_TOPICS = "/twitter-ts/topics/FETCH_TOPICS",
  GET_TOPICS = "/twitter-ts/topics/GET_TOPICS",
}

export interface SidebarAction extends Action<SidebarActions> {
  type: SidebarActions,
  payload?: object | string
}

export const fetchTopics:SidebarAction = {
  type: SidebarActions.FETCH_TOPICS
}

export const getTopics = (payload:object):SidebarAction => ({
  type: SidebarActions.GET_TOPICS,
  payload
})
