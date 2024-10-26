export const getPopularMovies = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
};
