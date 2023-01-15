import api from "src/data-fetching/api";
import { useStandardMutation } from "src/data-fetching/reactQuery";
import { UseStandardMutationHookOptions } from "src/data-fetching/types";
import type TUser from "../types/User.type";
import type { TUserCreate } from "../types/User.type";


export const createUser = (data: TUserCreate): Promise<TUser> => api.post('/Users', data);

export const useCreateUser = ({ queryKey, config }: UseStandardMutationHookOptions = {}) => useStandardMutation<TUser>({ queryKey: queryKey || ['Users'], mutationFn: createUser, config, mutationType: "create" });
