import { api } from "./client";

export const getPosts = (params: any = {}) => api.get<any>("/posts", params);

export const getPost = (id: string) => api.get<any>(`/posts/${id}`);
export const getMe = (id: string) => api.get<any>(`/users/me/${id}`);

export const getComments = (entityType: string, entityId: string) =>
  api.get<any>(`/${entityType}/${entityId}/comments`);

export const getTranslation = (query: string) => api.get(`/translate/${query}`);

export const postVocabulary = (params: any) =>
  api.post(`/vocabularies/`, params);

export const getVocabularies = (groupId: string) =>
  api.get(`/vocabularies?groupId=${groupId}`);
export const getVocabulary = (id: string) => api.get(`/vocabularies/${id}`);

export const authenticate = (params: any) =>
  api.post(`/users/authenticate/`, params);
