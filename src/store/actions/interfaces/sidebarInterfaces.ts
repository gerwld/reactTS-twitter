import { SidebarActions } from "../sidebar";
import { Action } from 'redux';

export interface SidebarAction extends Action<SidebarActions> {
  type: SidebarActions;
  payload?: object | string;
}