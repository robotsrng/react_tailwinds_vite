import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type TProject from "../types/project.type";
import { TProjectUpdate } from "../types/project.type";



export const updateProject = (values: TProjectUpdate) => api.put<TProject[]>('/projects', values);

export const useUpdateProject = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<TProject>({ queryKey: queryKey || ['projects'], mutationFn: updateProject, config, mutationType: "update" });
