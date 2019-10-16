import { combineReducers } from 'redux';
import posts from './posts/reducer';
import { PostsState } from './posts/types';


export interface AppState {
  posts: PostsState;
}

const rootReducer = combineReducers<any>({
  posts,
});

export default rootReducer;
