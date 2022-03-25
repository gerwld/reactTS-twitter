import { combineReducers } from "redux";
import postReducer from "./post";


const reducers = combineReducers({
  post: postReducer
})

export type RootState = ReturnType<typeof reducers>

export default reducers;