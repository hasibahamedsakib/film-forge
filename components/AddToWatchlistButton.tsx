"use client";

import { useState } from "react";
import { MovieProps } from "@/types/type";
import { addToWatchlist, removeFromWatchlist } from "@/app/actions/watchlist";

export default function AddToWatchlistButton({ movie }: { movie: MovieProps }) {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const handleClick = async () => {
    if (isInWatchlist) {
      await removeFromWatchlist(movie.id);
    } else {
      await addToWatchlist(movie);
    }
    setIsInWatchlist(!isInWatchlist);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-80"
    >
      {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
    </button>
  );
}
