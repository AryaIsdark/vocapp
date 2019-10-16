export enum ActionTypes {
    SET_DATA = 'posts/setData',
    SET_LOADING = 'posts/setLoading',
    SET_HAS_ERROR = 'posts/setHasError'
}

export interface PostsState {
    isLoading: boolean | undefined,
    hasError : boolean | undefined,
    data : any
}

export interface Action {
    type: ActionTypes;
    payload: Partial<PostsState>;
}
  