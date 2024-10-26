"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { searchMovie } from "@/utils/searchMovie";
import { useQuery } from "@tanstack/react-query";
import SectionTitle from "@/app/Components/SectionTitle";
import MovieCard from "@/app/Components/Movies/MovieCard";
import { MovieProps } from "@/types/type";
import Loader from "@/app/Components/Loader/Loader";
import PopularMovies from "@/app/Components/Movies/PopularMovies";
import { Container } from "@/app/Components/Container";

const SearchContent = () => {
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
    <section className=" bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat ">
      <Container>
        <div className="pt-10 3xl:pt-14">
          <SectionTitle headingText="Search Results 🔍" />
          {isLoading && (
            <div className="flex justify-center items-start ">
              <Loader />
            </div>
          )}
          {results?.length === 0 && (
            <div className="text-center text-2xl font-bold text-red-500">
              Opps... No movies found at this keyword
            </div>
          )}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 sm:gap-4  md:gap-5 2xl:gap-7">
            {results?.map((movie: MovieProps) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
        <PopularMovies />
      </Container>
    </section>
  );
};

const SearchPage = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
};

export default SearchPage;
