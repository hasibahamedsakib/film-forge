export const searchMovie = async (query: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${query}`
  );
  return res.json();
};
