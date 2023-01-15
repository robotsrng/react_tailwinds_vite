import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type TUser from "../types/User.type";
import { TUserUpdate } from "../types/User.type";



export const updateUser = (values: TUserUpdate) => api.put<TUser[]>('/Users', { values });

export const useUpdateUser = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<TUser>({ queryKey: queryKey || ['Users'], mutationFn: updateUser, config, mutationType: "update" });
