import { useInfiniteQueryHook } from "@/hooks/useInfiniteQueryHook";
import { getPopularMovies } from "@/utils/popularMovies";
import SectionTitle from "../SectionTitle";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { MovieProps, TMoviePageData } from "@/types/type";
import { UseInfiniteQueryResult } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const { ref, inView } = useInView();
  // get popular movies
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQueryHook(
      ["popularMovies"],
      getPopularMovies
    ) as unknown as UseInfiniteQueryResult<TMoviePageData, Error>;

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div className="my-10 2xl:my-20">
      <SectionTitle headingText="Popular Movies 🎥" />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 sm:gap-4  md:gap-5 2xl:gap-7">
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
