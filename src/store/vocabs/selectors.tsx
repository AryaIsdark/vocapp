import { AppState } from "store/rootReducer";

export const data = (state: AppState) => state.vocabs && state.vocabs.data;
