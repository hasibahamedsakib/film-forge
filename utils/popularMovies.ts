export const getPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
};
