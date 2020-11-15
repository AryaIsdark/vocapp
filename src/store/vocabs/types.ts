export enum ActionTypes {
  SET_DATA = "vocabs/setData",
}

export interface VocabsState {
  data: any;
}

export interface Action {
  type: ActionTypes;
  payload: Partial<VocabsState>;
}
