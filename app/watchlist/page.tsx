import Image from "next/image";
import {
  getWatchlist,
  removeFromWatchlist,
} from "@/app/actions/watchlistActions";
import React from "react";
import SectionTitle from "../Components/SectionTitle";
import { Container } from "../Components/Container";
import { MovieProps } from "@/types/type";
import Link from "next/link";

async function handleRemoveFromWatchlist(id: number) {
  "use server";

  if (id) {
    await removeFromWatchlist(Number(id));
  }
}

export default async function WatchlistPage() {
  const watchlist = await getWatchlist();
  console.log(watchlist);
  return (
    <div className="bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat ">
      <Container>
        <div className="pt-10">
          <SectionTitle headingText="My Watchlist" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-6 sm:gap-4  md:gap-5 2xl:gap-7">
          {watchlist.length < 1 && (
            <h1 className="text-center text-2xl font-bold text-white">
              Your watchlist is empty
            </h1>
          )}
          {watchlist?.map((movie: MovieProps) => (
            <div
              key={movie.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || ""}
                  width={350}
                  height={320}
                  className="w-full h-[320px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={`/movies/${movie.id}`}
                    className="text-white text-lg font-semibold bg-primary px-4 py-2 rounded-full hover:bg-primary-dark transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-2 truncate">
                  {movie.title}
                </h2>
                <form action={handleRemoveFromWatchlist.bind(null, movie.id)}>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-red-500 text-white rounded transition-colors duration-300 hover:bg-red-600"
                  >
                    Remove from Watchlist
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

// "use client";

// import { MovieProps } from "@/types/type";
// import SectionTitle from "@/components/SectionTitle";
// import { getWatchlist } from "@/utils/fetchMovie";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import Loader from "@/components/Loader";
// import MovieCard from "@/components/MovieCard";

// const WatchlistPage = () => {
//   const queryClient = useQueryClient();
//   const { data: watchlist, isLoading } = useQuery({
//     queryKey: ["watchlist"],
//     queryFn: getWatchlist,
//   });
//   const removeFromWatchlist = async (id: string) => {
//     await fetch("/api/watchlist", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });
//     queryClient.invalidateQueries({ queryKey: ["watchlist"] });
//   };

//   return (
//     <div className="bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat px-2 py-5 sm:p-10 lg:p-14 xl:p-20  w-full mx-auto min-h-screen">
//       <SectionTitle headingText="My Watchlist" />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//         {isLoading ? (
//           <div>
//             <Loader />{" "}
//           </div>
//         ) : (
//           watchlist?.map((movie: MovieProps) => (
//             <div key={movie.id} className="relative">
//               <MovieCard movie={movie} />
//               <button
//                 onClick={() => removeFromWatchlist(movie.id)}
//                 className="px-4 py-2 bg-red-500 text-white rounded mt-2"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default WatchlistPage;
