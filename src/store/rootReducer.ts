import { combineReducers } from "redux";
import posts from "./posts/reducer";
import { PostsState } from "./posts/types";
import postDetails from "./postDetails/reducer";
import { PostDetailsState } from "./postDetails/types";
import comments from "./comments/reducer";
import { CommentsState } from "./comments/types";
import vocabs from "./vocabs/reducer";
import { VocabsState } from "./vocabs/types";

export interface AppState {
  posts: PostsState;
  postDetails: PostDetailsState;
  comments: CommentsState;
  vocabs: VocabsState;
}

const rootReducer = combineReducers<any>({
  posts,
  postDetails,
  comments,
  vocabs,
});

export default rootReducer;
