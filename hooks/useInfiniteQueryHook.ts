import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

interface PageData<T> {
  page: number;
  total_pages: number;
  results: T[];
}

export const useInfiniteQueryHook = <T>(
  queryKey: string[],
  fetchFunction: (page: number) => Promise<PageData<T>>,
  options?: Omit<
    UseInfiniteQueryOptions<PageData<T>, Error, PageData<T>>,
    "queryKey" | "queryFn" | "getNextPageParam" | "initialPageParam"
  >
) => {
  return useInfiniteQuery({
    queryKey,
    queryFn: ({ pageParam = 1 }) => fetchFunction(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
    ...options,
  });
};
