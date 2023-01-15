import { useQuery } from "@tanstack/react-query";
import api from "src/data-fetching/api";
import type T[FTName] from "../types/[FTName].type";
import { SearchFilters } from "src/utils/datafetcher-helpers/searchFilters.types";



export const get[FTName]s = (params: SearchFilters<T[FTName]>) => api.get<T[FTName][]>('/[FTName]s', { params }).then((res) => res.data);

export const useGet[FTName]s = (params: SearchFilters<T[FTName]>) => useQuery<T[FTName][], Error>({ queryKey: ['[FTName]s', params], queryFn: () => get[FTName]s(params) });