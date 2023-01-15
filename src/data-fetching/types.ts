import { UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
    ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
    ExtractFnReturnType<MutationFnType>,
    AxiosError,
    Parameters<MutationFnType>[0]
>;

export type UseStandardMutationHookOptions = {
    queryKey?: string[];
    config?: any;
};

export type MutationType = 'delete' | 'update' | 'create';

export type StandardMutationProps<TModel> = {
    queryKey: string[];
    mutationFn: (entity: TModel) => Promise<any>;
    mutationType: MutationType;
    config: {};
};
