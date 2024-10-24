import React from "react";
import Image from "next/image";
import { MovieProps } from "@/types/type";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className="bg-secondary shadow-[#0f4387cf] shadow-md overflow-hidden w-full sm:w-[260px] md:w-[260px] lg:w-[280px] xl:w-[280px] 2xl:w-[260px] cursor-pointer"
      key={movie.id}
    >
      {/* Movie Poster */}
      <div className=" w-full ">
        <Image
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "/default-image.png"
          }
          alt={movie.title}
          width={320}
          height={400}
          quality={70}
          draggable={false}
          className="w-full h-auto md:h-[290px] "
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-between w-full bg-white p-2  flex-wrap">
        <h2 className="text-base font-semibold">
          {movie.title.length > 22
            ? movie.title.substring(0, 22) + "..."
            : movie.title}
        </h2>
        <span className="text-yellow-500 font-bold">{movie.vote_average}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
