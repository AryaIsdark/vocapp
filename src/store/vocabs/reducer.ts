import { ActionTypes, Action } from "./types";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_DATA:
      return {
        ...state,
        data: payload.data,
      };

    default:
      return state;
  }
};

export default reducer;
