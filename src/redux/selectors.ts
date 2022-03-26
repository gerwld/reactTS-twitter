
import { RootState } from './reducers';
import { SidebarState, TweetsState } from './contracts/state';
import { LoadingStatus } from './types';

export const selectTweets = (state: RootState): TweetsState => state.post;
export const selectSidebar = (state: RootState): SidebarState => state.sidebar;

export const selectTweetsPost = (state: RootState) => selectTweets(state).posts;
export const selectSidebarTopics = (state: RootState) => selectSidebar(state).topics;

export const selectTweetsLoadingStatus = (state: RootState): Boolean => selectTweets(state).LoadingStatus === LoadingStatus.LOADING;