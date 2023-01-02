import { AxiosResponse } from "axios";
import api from "./api";
import { TProject } from "./types/Project.type";

export const getProjects = () => api.get<AxiosResponse<TProject[]>>('/projects').then((response) => response.data);

export const addProject = (data: Partial<TProject>) => api.post<TProject>('/projects', data).then((response) => response.data);
export const deleteProject = (data: Partial<TProject>) => api.delete<TProject>(`/projects/${data.id}`).then((response) => response.data);