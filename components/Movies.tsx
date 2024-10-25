"use client";
import { MovieProps, TMoviePageData } from "@/types/type";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { fetchMovies } from "@/utils/fetchMovie";
import SectionTitle from "./SectionTitle";
import MovieCard from "./MovieCard";
import Loader from "./Loader";
import { useInfiniteQueryHook } from "@/hooks/useInfiniteQueryHook";
import { UseInfiniteQueryResult } from "@tanstack/react-query";

const Movies = () => {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQueryHook(
    ["allMovies"],
    fetchMovies
  ) as unknown as UseInfiniteQueryResult<TMoviePageData, Error>;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="">
      <SectionTitle headingText=" All Movies here 🎥" />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 sm:gap-4 2">
        {isLoading && (
          <div className="flex w-full justify-center items-start h-screen">
            <Loader />
          </div>
        )}
        {data?.pages?.map((page) =>
          page?.results?.map((movie: MovieProps) => (
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

export default Movies;
