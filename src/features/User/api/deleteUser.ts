
import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type TUser from "../types/User.type";



export const deleteUser = (data: TUser) => api.delete<TUser>(`/Users/${data.id}`);

export const useDeleteUser = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<TUser>({ queryKey: queryKey || ['Users'], mutationFn: deleteUser, config, mutationType: "delete" });