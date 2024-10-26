"use client";

import { useState, useTransition, useEffect } from "react";
import {
  addToWatchlist,
  removeFromWatchlist,
  isInWatchlist,
} from "@/app/actions/watchlistActions";
import { MovieProps } from "@/types/type";

interface AddToWatchlistButtonProps {
  movie: MovieProps;
}

const AddToWatchlistButton = ({ movie }: AddToWatchlistButtonProps) => {
  const [isInWatchlistState, setIsInWatchlistState] = useState<boolean | null>(
    null
  );
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkWatchlistStatus = async () => {
      try {
        const status = await isInWatchlist(Number(movie.id));
        setIsInWatchlistState(status);
      } catch (err) {
        setError("Failed to check watchlist status");
        console.error(err);
      }
    };
    checkWatchlistStatus();
  }, [movie.id]);

  const handleWatchlistToggle = () => {
    startTransition(async () => {
      try {
        if (isInWatchlistState) {
          await removeFromWatchlist(Number(movie.id));
        } else {
          await addToWatchlist(Number(movie.id));
        }
        setIsInWatchlistState(!isInWatchlistState);
      } catch (err) {
        setError("Failed to update watchlist");
        console.error(err);
      }
    });
  };

  if (isInWatchlistState === null) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <button
      onClick={handleWatchlistToggle}
      disabled={isPending}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {isPending
        ? "Processing..."
        : isInWatchlistState
        ? "Remove from Watchlist"
        : "Add to Watchlist"}
    </button>
  );
};

export default AddToWatchlistButton;
