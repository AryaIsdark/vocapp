import { ActionTypes, Action } from "./types";
import { Dispatch } from "react";
import { AppState } from "store/rootReducer";
import * as api from "api/apiFunctions";

export const loadData = () => async (
  dispatch: Dispatch<Action>,
  getState: () => AppState
) => {
  const defaultGroup = getState().me.data.vocabularyGroups[0]._id;
  try {
    const response = (await api.getVocabularies(defaultGroup)) as any;
    dispatch(setData(response.data.data));
  } catch (err) {
    // dispatch(setHasError(true));
  } finally {
    // dispatch(setIsLoading(false));
  }
};

export const setData = (data: any) => {
  return {
    type: ActionTypes.SET_DATA,
    payload: { data },
  };
};
