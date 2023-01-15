import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type T[FTName] from "../types/[FTName].type";
import type { T[FTName]Create } from "../types/[FTName].type";


export const create[FTName] = (data: T[FTName]Create): Promise<T[FTName]> => api.post('/[FTName]s', data);

export const useCreate[FTName] = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<T[FTName]>({ queryKey: queryKey || ['[FTName]s'], mutationFn: create[FTName], config, mutationType: "create" });
