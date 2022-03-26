import React from 'react'
import produce from 'immer';
import { PostActionsTypes } from '../actions/post';

const initialState = {
  currentPostText: "",
  maxLength: 300,
  posts: []
}

const postReducer = (state = initialState, action: any) => {
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

const postReducerOnImmer = produce((draft, action) => {
  const {type, payload} = action;
  if(type === PostActionsTypes.ON_POST_TYPE) {
    draft.currentPostText = payload;    
  }
  if(type === PostActionsTypes.FETCH_POSTS) {
    draft.posts = payload;    
  }
}, initialState)

export default postReducerOnImmer;