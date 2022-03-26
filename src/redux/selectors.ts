
import { RootState } from './reducers';

export const selectTweets = (state: RootState) => state.post.posts;

