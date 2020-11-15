import { ActionTypes } from "./types";

export const setData = (data: any) => {
  return {
    type: ActionTypes.SET_DATA,
    payload: { data },
  };
};
