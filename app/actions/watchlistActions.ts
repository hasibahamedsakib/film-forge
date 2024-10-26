"use server";

import { MovieProps } from "@/types/type";
import { getMovieDetails } from "@/utils/getMovieDetails";
import { cookies } from "next/headers";

const WATCHLIST_COOKIE = "watchlist";

export async function addToWatchlist(movieId: number) {
  const watchlistCookie = cookies().get(WATCHLIST_COOKIE)?.value;
  const watchlist = watchlistCookie ? JSON.parse(watchlistCookie) : [];

  if (!watchlist.includes(movieId)) {
    watchlist.push(movieId);
    cookies().set(WATCHLIST_COOKIE, JSON.stringify(watchlist), {
      httpOnly: true,
    });
  }
}

export async function removeFromWatchlist(movieId: number) {
  const watchlistCookie = cookies().get(WATCHLIST_COOKIE)?.value;
  if (watchlistCookie) {
    const watchlist = JSON.parse(watchlistCookie);
    const updatedWatchlist = watchlist.filter((id: number) => id !== movieId);
    cookies().set(WATCHLIST_COOKIE, JSON.stringify(updatedWatchlist), {
      httpOnly: true,
    });
  }
}

export async function getWatchlist() {
  const watchlistCookie = cookies().get(WATCHLIST_COOKIE)?.value;
  if (watchlistCookie) {
    const watchlistIds = JSON.parse(watchlistCookie);
    const movies = await Promise.all(
      watchlistIds.map((id: number) => getMovieDetails(id.toString()))
    );
    return movies;
  }
  return [];
}
export async function isInWatchlist(movieId: number): Promise<boolean> {
  const watchlist = await getWatchlist();
  return watchlist.some((movie: MovieProps) => movie.id === movieId);
}
