import { LoadingStatus } from "../types";
import { produce } from "immer";
import { TweetActions } from "../actions/tweet";

const tweetState = {
  data: undefined,
  LoadingState: LoadingStatus.NEVER,
};

const tweetReducer = produce((draft, action) => {
  switch (action.type) {
    case TweetActions.FETCH_TWEET_DATA:
      draft.data = undefined;
      draft.LoadingState = LoadingStatus.LOADING;
      break;
    case TweetActions.SET_TWEET_DATA:
      draft.data = action.payload;
      draft.LoadingState = LoadingStatus.LOADED;
      break;
    case TweetActions.SET_LOADING_STATE:
      draft.LoadingState = action.payload;
      break;
    default:
      break;
  }
}, tweetState);

export default tweetReducer;
