export const fetchMovies = async (id: number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&page=${id}`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
};
export const getWatchlist = async () => {
  const res = await fetch(`/api/watchlist`);
  return res.json();
};
