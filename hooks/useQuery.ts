import {
  useQuery as useReactQuery,
  UseQueryOptions,
} from "@tanstack/react-query";

export const useQuery = <TData = unknown, TError = unknown>(
  key: string | string[],
  queryFn: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError>
) => {
  return useReactQuery<TData, TError>({
    queryKey: Array.isArray(key) ? key : [key],
    queryFn,
    ...options,
  });
};
