
import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type T[FTName] from "../types/[FTName].type";



export const delete[FTName] = (data: T[FTName]) => api.delete<T[FTName]>(`/[FTName]s/${data.id}`);

export const useDelete[FTName] = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<T[FTName]>({ queryKey: queryKey || ['[FTName]s'], mutationFn: delete[FTName], config, mutationType: "delete" });