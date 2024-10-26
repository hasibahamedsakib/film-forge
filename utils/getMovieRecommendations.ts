export const getMovieRecommendations = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.TMDB_API_KEY}`
  );
  return response.json();
};
