import { AppState } from "store/rootReducer";

export const isLoading = (state: AppState) => state.me && state.me.isLoading;

export const hasError = (state: AppState) => state.me && state.me.hasError;

export const data = (state: AppState) => state.me && state.me.data;

export const getFirstVocabularyGroup = (state: AppState) =>
  state.me &&
  state.me.data &&
  state.me.data.vocabularyGroups &&
  state.me.data.vocabularyGroups[0] &&
  state.me.data.vocabularyGroups[0]._id;
