const apiKey = process.env.TMDB_API_KEY;
// API Endpoints
export const apiEndpoint = {
  popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`,
  movieDetails: (id: string) =>
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
  movieCredits: (id: string) =>
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
  movieRecommendations: (id: string) =>
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`,
};

// Fetching common function
export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw error;
  }
};
