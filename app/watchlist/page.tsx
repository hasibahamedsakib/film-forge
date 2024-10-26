import Image from "next/image";
import {
  getWatchlist,
  removeFromWatchlist,
} from "@/app/actions/watchlistActions";
import React from "react";

// সার্ভার অ্যাকশন হিসেবে ডিফাইন করা
async function handleRemoveFromWatchlist(formData: FormData) {
  "use server";
  const movieId = formData.get("movieId") as string;
  if (movieId) {
    await removeFromWatchlist(movieId);
  }
}

export default async function WatchlistPage() {
  const watchlist = await getWatchlist();
  console.log(watchlist);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {watchlist.map((movie) => (
        <div key={movie.id} className="flex flex-col items-center">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
          />
          <h2>{movie.title}</h2>
          <form action={handleRemoveFromWatchlist}>
            <input type="hidden" name="movieId" value={movie.id} />
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white rounded mt-2"
            >
              Remove
            </button>
          </form>
        </div>
      ))}
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
