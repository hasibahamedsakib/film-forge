/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { MovieProps } from "@/types/type";
import { cookies } from "next/headers";

export async function addToWatchlist(movie: MovieProps) {
  const currentWatchlist = await getWatchlist();
  if (!currentWatchlist.find((item) => item.id === movie.id)) {
    currentWatchlist.push(movie);
  }
  cookies().set("watchlist", JSON.stringify(currentWatchlist));
}

export async function removeFromWatchlist(movieId: string) {
  const currentWatchlist = await getWatchlist();
  const updatedWatchlist = currentWatchlist.filter(
    (item) => item.id !== movieId
  );
  cookies().set("watchlist", JSON.stringify(updatedWatchlist));
}

export async function getWatchlist(): Promise<Record<string, any>[]> {
  const savedWatchlist = cookies().get("watchlist")?.value;
  if (savedWatchlist) {
    return JSON.parse(savedWatchlist);
  }
  return [];
}
