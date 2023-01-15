import { QueryClient, DefaultOptions, useMutation, UseMutationOptions, UseQueryOptions } from '@tanstack/react-query';
import { TArgsTypesControlModelProps } from 'src/utils/story-helpers';
import { BaseEntity } from 'src/utils/types/baseEntity';
import { AxiosError } from 'axios';
import { MutationType, StandardMutationProps } from './types';

const queryConfig: DefaultOptions = {
    queries: {
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: false,
    },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });


export const getUpdatedEntities = <TModel extends BaseEntity,>(mutationType: MutationType, entity: TModel, previousEntities: TModel[] = []) => {
    switch (mutationType) {
        case 'delete':
            return previousEntities?.filter(
                (prevEntity) => prevEntity.id !== entity.id
            );
        case 'update':
            return previousEntities?.map(
                (prevEntity) => prevEntity.id === entity.id ? entity : prevEntity
            );
        case 'create':
            return [...previousEntities, entity];
        default:
            return previousEntities;
    }
};


// TODO ADD NOTIFICATIONS
export const useStandardMutation = <TModel extends BaseEntity,>
    ({ queryKey, mutationFn, mutationType, config }: StandardMutationProps<TModel>) =>
    useMutation<Response, unknown, TModel>({
        onMutate: async (entity: TModel) => {
            await queryClient.cancelQueries({ queryKey });

            const previousEntities = queryClient.getQueryData<TModel[]>(queryKey);

            const updatedEntities = getUpdatedEntities<TModel>(mutationType, entity as TModel, previousEntities!);

            queryClient.setQueryData(
                queryKey,
                updatedEntities
            );

            return { previousEntities };
        },
        onError: (_, __, context: any) => {
            if (context?.previousEntities) {
                queryClient.setQueryData(queryKey, context.previousEntities);
            }
        },
        onSuccess: () => {
            // Invalidate and refetch the list
            queryClient.invalidateQueries(queryKey);
        },
        ...config,
        mutationFn,
    });

