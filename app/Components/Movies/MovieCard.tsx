import React from "react";
import Image from "next/image";
import { MovieProps } from "@/types/type";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  return (
    <div
      className="relative group bg-secondary shadow-[#0f4387cf] shadow-md overflow-hidden w-full sm:w-[260px] md:w-[350px] lg:w-[280px] xl:w-[280px] 2xl:w-[260px rounded-md"
      key={movie.id}
    >
      <div>
        {/* Movie Poster */}
        <div className=" w-full ">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/default-image.png"
            }
            alt={movie.title}
            width={350}
            height={420}
            quality={70}
            draggable={false}
            className="w-full h-auto md:h-[290px] 2xl:h-[320px] transition-all duration-500 group-hover:scale-125 object-fill group-hover:translate-y-5"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between w-full bg-secondary p-3  flex-wrap">
          <h2 className="text-base font-semibold truncate text-white">
            {movie.title.length > 22
              ? movie.title.substring(0, 22) + "..."
              : movie.title}
          </h2>
          <span className="text-primary font-bold">
            {movie.vote_average.toFixed(1)}⭐
          </span>
        </div>
      </div>
      {/* Animated details button */}

      <Link href={`/movies/${movie.id}`} title="see details">
        <button className="absolute bottom-0 right-0 -mb-10 group-hover:mb-0  bg-primary bg-opacity-80 transition-all duration-300 ease-in-out w-full rounded text-white p-2 hover:bg-opacity-100 font-semibold">
          movie details
        </button>
      </Link>
    </div>
  );
};

export default MovieCard;
