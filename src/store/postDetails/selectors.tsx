import { AppState } from 'store/rootReducer';

export const isLoading = (state: AppState) => state.posts && state.postDetails.isLoading;

export const hasError = (state: AppState) => state.posts && state.postDetails.hasError;

export const data = (state: AppState) => state.posts && state.postDetails.data;