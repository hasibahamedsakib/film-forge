export const getPopularMovies = async () => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("TMDB_API_KEY is not defined in environment variables");
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
    {
      cache: "force-cache",
    }
  );
  return res.json();
};
