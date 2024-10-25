"use client";

import { removeFromWatchlist } from "@/app/actions/watchlist";
import { useRouter } from "next/navigation";

export default function RemoveFromWatchlistButton({
  movieId,
}: {
  movieId: number;
}) {
  const router = useRouter();

  const handleRemove = async () => {
    await removeFromWatchlist(movieId);
    router.refresh();
  };

  return (
    <button
      onClick={handleRemove}
      className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm hover:bg-red-600"
    >
      Remove
    </button>
  );
}
