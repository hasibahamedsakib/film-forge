export const getMovieCredits = async (movieId: string) => {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error("TMDB_API_KEY is not defined in environment variables");
  }
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    {
      cache: "force-cache",
    }
  );
  return response.json();
};
