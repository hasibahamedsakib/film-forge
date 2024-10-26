"use client";

import { useState, useTransition } from "react";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "@/app/actions/watchlistActions";
import { MovieProps } from "@/types/type";

interface AddToWatchlistButtonProps {
  movie: { id: string; title: string; poster_path: string };
}

const AddToWatchlistButton = ({ movie }: AddToWatchlistButtonProps) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleWatchlistToggle = () => {
    startTransition(async () => {
      if (isInWatchlist) {
        await removeFromWatchlist(movie.id);
      } else {
        await addToWatchlist(movie as unknown as MovieProps);
      }
      setIsInWatchlist(!isInWatchlist);
    });
  };

  return (
    <button
      onClick={handleWatchlistToggle}
      disabled={isPending}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {isPending
        ? "Processing..."
        : isInWatchlist
        ? "Remove from Watchlist"
        : "Add to Watchlist"}
    </button>
  );
};

export default AddToWatchlistButton;
