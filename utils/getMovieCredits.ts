export const getMovieCredits = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return response.json();
};
