import { useQuery } from "@tanstack/react-query";
import api from "src/data-fetching/api";
import type TProject from "../types/project.type";
import { SearchFilters } from "src/utils/datafetcher-helpers/searchFilters.types";



export const getProjects = (params: SearchFilters<TProject>) => api.get<TProject[]>('/projects', { params }).then((res) => res.data);

export const useGetProjects = (params: SearchFilters<TProject>) => useQuery<TProject[], Error>({ queryKey: ['projects', params], queryFn: () => getProjects(params) });