"use client";
import { MovieProps, TMoviePageData } from "@/types/type";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SectionTitle from "../SectionTitle";

import Loader from "../Loader/Loader";
import { useInfiniteQueryHook } from "@/hooks/useInfiniteQueryHook";
import { UseInfiniteQueryResult } from "@tanstack/react-query";

import MovieCard from "../Movies/MovieCard";
import { fetchMovies } from "@/utils/fetchMovie";

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
    <div className="pt-10 3xl:pt-14">
      <SectionTitle headingText=" All Movies here 🎥" />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 sm:gap-4 md:gap-5 2xl:gap-7">
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
