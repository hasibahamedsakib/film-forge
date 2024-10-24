import { useInfiniteQueryHook } from "@/hooks/useInfiniteQueryHook";
import { popularMovies } from "@/utils/popularMovies";
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import { MovieProps, TMoviePageData } from "@/types/type";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import Loader from "./Loader";

const PopularMovies = () => {
  const { ref, inView } = useInView();
  // get popular movies
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQueryHook(
    ["popularMovies"],
    popularMovies
  ) as unknown as UseInfiniteQueryResult<TMoviePageData, Error>;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="my-10 2xl:my-20">
      <SectionTitle headingText="Popular Movies 🎥" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 sm:gap-4">
        {data?.pages.map((page) =>
          page.results.map((movie: MovieProps) => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        )}
      </div>
      <div ref={ref} className="flex justify-center items-center mt-8">
        {isFetchingNextPage && <Loader />}
      </div>
    </div>
  );
};

export default PopularMovies;
