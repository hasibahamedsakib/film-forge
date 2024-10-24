export interface MovieProps {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
}

export interface TMoviePageData {
  pages: Array<{ results: MovieProps[] }>;
}
