import {ActionTypes, Action} from './types'
import * as api from 'api/apiFunctions'
import { Dispatch } from 'react';


export const loadData = (params = {}) => async (dispatch: Dispatch<Action>) => {
    // dispatch(setIsLoading(true));
  
    try {
      const response = await api.getPosts();
        console.log(response)
      dispatch({
        type: ActionTypes.SET_DATA,
        payload: { data: response.data },
      });
    } catch (err) {
    //   dispatch(setHasError(true));
    console.log(err)
    } finally {
    //   dispatch(setIsLoading(false));
    }
  };