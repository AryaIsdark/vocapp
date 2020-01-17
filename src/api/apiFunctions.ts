import { api } from './client';

export const getPosts = (params: any = {}) =>
  api.get<any>('/posts', params);


export const getPost = (id: string) =>
  api.get<any>(`/posts/${id}`);

export const getPostComments = (id: string) =>
  api.get<any>(`/posts/${id}/comments`);

