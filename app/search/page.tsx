"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { searchMovie } from "@/utils/searchMovie";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "@/components/SectionTitle";
import MovieCard from "@/components/MovieCard";
import { MovieProps } from "@/types/type";
import Loader from "@/components/Loader";
import PopularMovies from "@/components/PopularMovies";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  // get search data
  const { data, isLoading, error } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovie(query),
  });
  const results = data?.results;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat px-2 py-5 sm:p-10 lg:p-14 xl:p-20  w-full mx-auto">
      <div className="">
        <SectionTitle headingText="Search Results 🔍" />
        {isLoading && (
          <div className="flex justify-center items-start ">
            <Loader />
          </div>
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 sm:gap-4">
          {results?.length === 0 ? (
            <div className="text-center text-2xl font-bold text-red-500">
              Opps... No movies found at this keyword
            </div>
          ) : (
            results?.map((movie: MovieProps) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          )}
        </div>
      </div>
      <PopularMovies />
    </section>
  );
};

export default SearchPage;
