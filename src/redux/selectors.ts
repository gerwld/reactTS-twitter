
import { RootState } from './reducers';
import { TweetsState } from './contracts/state';

export const selectTweets = (state: RootState): TweetsState => state.post;

export const selectTweetsPost = (state: RootState) => selectTweets(state).posts;
export const selectTweetsLoadingStatus = (state: RootState) => selectTweets(state).LoadingStatus;