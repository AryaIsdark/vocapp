export enum ActionTypes {
  SET_DATA = "me/setData",
  SET_LOADING = "me/setLoading",
  SET_HAS_ERROR = "me/setHasError",
}

export interface MeState {
  isLoading: boolean;
  hasError: boolean;
  data: any;
}

export interface Action {
  type: ActionTypes;
  payload: Partial<MeState>;
}
