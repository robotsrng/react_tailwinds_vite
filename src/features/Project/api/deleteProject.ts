
import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type TProject from "../types/project.type";



export const deleteProject = (data: TProject) => api.delete<TProject>(`/projects/${data.id}`);

export const useDeleteProject = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<TProject>({ queryKey: queryKey || ['projects'], mutationFn: deleteProject, config, mutationType: "delete" });