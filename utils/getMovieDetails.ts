export const getMovieDetails = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`,
    {
      cache: "force-cache",
    }
  );
  return response.json();
};
