import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type T[FTName] from "../types/[FTName].type";
import { T[FTName]Update } from "../types/[FTName].type";



export const update[FTName] = (values: T[FTName]Update) => api.put<T[FTName][]>('/[FTName]s', { values });

export const useUpdate[FTName] = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<T[FTName]>({ queryKey: queryKey || ['[FTName]s'], mutationFn: update[FTName], config, mutationType: "update" });
