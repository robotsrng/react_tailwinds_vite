import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type TProject from "../types/project.type";
import type { TProjectCreate } from "../types/project.type";


export const createProject = (data: TProjectCreate): Promise<TProject> => api.post('/projects', data);

export const useCreateProject = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<TProject>({ queryKey: queryKey || ['projects'], mutationFn: createProject, config, mutationType: "create" });
