import React from 'react'
import { ON_POST_TYPE } from '../actions/post';

const initialState = {
  currentPostText: ""
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_POST_TYPE:
      return {
        ...state,
        currentPostText: action.payload
      }
    default:
      return state;
  }
}

export default postReducer;