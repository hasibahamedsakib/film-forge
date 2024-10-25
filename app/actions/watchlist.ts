"use server";

import { MovieProps } from "@/types/type";

let watchlist: MovieProps[] = [];

export async function addToWatchlist(movie: MovieProps) {
  if (!watchlist.some((m) => m.id === movie.id)) {
    watchlist.push(movie);
  }
}

export async function removeFromWatchlist(movieId: number) {
  watchlist = watchlist.filter((m) => m.id !== movieId);
}

export async function getWatchlist() {
  return watchlist;
}
