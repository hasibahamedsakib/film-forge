import React from "react";
import Image from "next/image";
import { MovieProps } from "@/types/type";
import Link from "next/link";

const MovieCard = ({ movie }: { movie: MovieProps }) => {
  return (
    <div
      className="relative group bg-secondary shadow-[#0f4387cf] shadow-md overflow-hidden w-full sm:w-[260px] md:w-[260px] lg:w-[280px] xl:w-[280px] 2xl:w-[260px rounded-md"
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
            width={320}
            height={400}
            quality={70}
            draggable={false}
            className="w-full h-auto md:h-[290px] 2xl:h-[320px] transition-all duration-500 group-hover:scale-125 object-fill group-hover:translate-y-5"
            loading="lazy"
          />
        </div>
        <div className="flex items-center justify-between w-full bg-white p-2  flex-wrap">
          <h2 className="text-base font-semibold truncate">
            {movie.title.length > 22
              ? movie.title.substring(0, 22) + "..."
              : movie.title}
          </h2>
          <span className="text-primary font-bold">{movie.vote_average}</span>
        </div>
      </div>
      {/* Animated side panel */}
      <div className="absolute top-0 right-0 -mr-10 group-hover:mr-0 h-[120px] w-0 bg-primary bg-opacity-80 transition-all duration-300 ease-in-out group-hover:w-[40px] flex flex-col justify-center items-center rounded-md">
        <button className="text-white hover:text-secondary transition-colors duration-200 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
        <Link href={`/movies/${movie.id}`} title="see details">
          <button className="text-white hover:text-secondary transition-colors duration-200 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path
                fillRule="evenodd"
                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </Link>
        <button className="text-white hover:text-secondary transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
