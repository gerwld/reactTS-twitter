import { combineReducers } from "redux";
import postReducer from "./posts";
import sidebarReducer from './sidebar';
import tweetReducer from './tweet';


const reducers = combineReducers({
  post: postReducer,
  sidebar: sidebarReducer,
  tweet: tweetReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers;