import React from 'react'
import { ON_POST_TYPE } from '../actions/post';

const initialState = {
  currentPostText: "wgwedfvdfbdfbdfbdfb",
  maxLength: 300,
  currLength: 0
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_POST_TYPE:
      return {
        ...state,
        currentPostText: action.payload,
        currLength: action.payload.length,
      }
    default:
      return state;
  }
}

export default postReducer;