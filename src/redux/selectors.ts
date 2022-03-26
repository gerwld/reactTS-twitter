
import { RootState } from './reducers';
import { TweetsState } from './contracts/state';
import { LoadingStatus } from './types';

export const selectTweets = (state: RootState): TweetsState => state.post;

export const selectTweetsPost = (state: RootState) => selectTweets(state).posts;

export const selectTweetsLoadingStatus = (state: RootState): Boolean => selectTweets(state).LoadingStatus === LoadingStatus.LOADING;