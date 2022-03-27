
import { RootState } from './reducers';
import { SidebarState, PostsState, TweetState } from './contracts/state';
import { LoadingStatus } from './types';

export const selectTweets = (state: RootState): PostsState => state.post;
export const selectTweet = (state: RootState): TweetState => state.tweet;
export const selectSidebar = (state: RootState): SidebarState => state.sidebar;

export const selectTweetsPost = (state: RootState) => selectTweets(state).posts;
export const selectSidebarTopics = (state: RootState) => selectSidebar(state).topics;
export const selectTweetData = (state: RootState) => selectTweet(state).data;

export const selectTweetsLoadingStatus = (state: RootState): Boolean => selectTweets(state).LoadingStatus === LoadingStatus.LOADING;
export const selectTweetLoadingStatus = (state: RootState): Boolean => selectTweet(state).LoadingState === LoadingStatus.LOADING;
export const selectTweetErrorStatus = (state: RootState): Boolean => selectTweet(state).LoadingState === LoadingStatus.ERROR;