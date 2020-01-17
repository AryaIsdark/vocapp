import { combineReducers } from 'redux';
import posts from './posts/reducer';
import { PostsState } from './posts/types';
import postDetails from './postDetails/reducer';
import { PostDetailsState } from './postDetails/types';


export interface AppState {
  posts: PostsState;
  postDetails: PostDetailsState;
}

const rootReducer = combineReducers<any>({
  posts,
  postDetails
});

export default rootReducer;
