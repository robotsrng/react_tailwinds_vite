import { useQuery } from "@tanstack/react-query";
import api from "src/data-fetching/api";
import type TUser from "../types/User.type";
import { SearchFilters } from "src/utils/datafetcher-helpers/searchFilters.types";



export const getUsers = (params: SearchFilters<TUser>) => api.get<TUser[]>('/Users', { params }).then((res) => res.data);

export const useGetUsers = (params: SearchFilters<TUser>) => useQuery<TUser[], Error>({ queryKey: ['Users', params], queryFn: () => getUsers(params) });