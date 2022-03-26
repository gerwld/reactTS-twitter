import React from 'react'
import { PostActionsTypes } from '../actions/post';

const initialState = {
  currentPostText: "",
  maxLength: 300,
}

const postReducer = (state = initialState, action:any) => {
  switch(action.type) {
    case PostActionsTypes.ON_POST_TYPE:
      return {
        ...state,
        currentPostText: action.payload,
      }
    default:
      return state;
  }
}

export default postReducer;