import { AxiosResponse } from "axios";
import api from "./api";
import { TProject } from "./types/Project.type";
import { handleInternalApiError } from "src/utils/datafetcher-helpers/error-parser";

const makeApiRequest = async (request: Promise<AxiosResponse>) => {
    return request.then(response => response.data).catch(handleInternalApiError);
};



export const getProjects = () => makeApiRequest(api.get<AxiosResponse<TProject[]>>('/projects'));
export const editProject = (data: Partial<TProject>) => makeApiRequest(api.put<TProject>('/projects', data));
export const addProject = (data: Partial<TProject>) => makeApiRequest(api.post<TProject>('/projects', data));
export const deleteProject = (data: Partial<TProject>) => makeApiRequest(api.delete<TProject>(`/projects/${data.id}`));