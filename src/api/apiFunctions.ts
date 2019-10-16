
import { api } from './client';


export const getPosts = (params: any = {}) =>
  api.get<any>('/posts', params);
