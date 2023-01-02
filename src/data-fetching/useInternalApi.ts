import { useQuery } from '@tanstack/react-query';

import type { DomainQueryFunction } from './types';

/**
 * Hook to wrap useSWR and provide typed results.
 * @param query query/fetcher functions
 * @param queryParams params to pass to the query/fetcher.
 * @param swrConfig useSWR configuration
 * @returns
 * @example
 * const { data: { data: projectSearchFieldsData } = { data: [] } } = useDomainQuery(listDomainSearchFields, {
    filter: {
      domainType: { eq: DataViewDomainType.PROJECT },
    },
  })
 */
export const useInternalApi = <TResult, TParams>(
  query: DomainQueryFunction<TResult, TParams>,
  queryParams: TParams,
) => {
  const result = useQuery<TResult, Error>({
    queryKey: [query, queryParams], queryFn: () => {
      const res = query(queryParams);
      return res;
    },
  });
  // TODO - Update the result to be standardised ie. handle the fetchStatus and other properties
  const parsedResult = result;
  return parsedResult;
};

export default useInternalApi;
