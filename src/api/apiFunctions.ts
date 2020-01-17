import { api } from './client';

export const getPosts = (params: any = {}) =>
  api.get<any>('/posts', params);


export const getPost = (id: string) =>
  api.get<any>(`/posts/${id}`);

export const getComments = (entityType: string, entityId: string) =>
  api.get<any>(`/${entityType}/${entityId}/comments`);

