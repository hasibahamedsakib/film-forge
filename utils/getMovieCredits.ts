export const getMovieCredits = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      cache: "force-cache",
    }
  );
  return response.json();
};
