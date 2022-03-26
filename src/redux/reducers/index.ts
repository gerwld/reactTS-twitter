import { combineReducers } from "redux";
import postReducer from "./post";
import sidebarReducer from './sidebar';


const reducers = combineReducers({
  post: postReducer,
  sidebar: sidebarReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers;