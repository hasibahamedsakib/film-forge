import { getWatchlist } from "@/app/actions/watchlist";
import MovieCard from "@/components/MovieCard";
import AddToWatchlistButton from "@/components/AddToWatchlistButton";

export default async function WatchlistPage() {
  const watchlist = await getWatchlist();

  return (
    <div className="bg-secondary p-5 sm:p-10 lg:p-14 xl:p-20 2xl:px-[120px] w-full mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">My Watchlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {watchlist.map((movie) => (
          <div key={movie.id} className="relative">
            <MovieCard movie={movie} />
            <AddToWatchlistButton movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
