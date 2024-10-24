export const popularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return res.json();
};
    