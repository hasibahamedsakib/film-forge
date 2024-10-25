export const getMovieRecommendations = async (movieId: string) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY; 
 
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`
  );
  return response.json();
};
