import AddToWatchlistButton from "@/components/AddToWatchlistButton";
import MovieCard from "@/components/MovieCard";
import CastCard from "@/components/movies/CastCard";
import SectionTitle from "@/components/SectionTitle";
import { MovieProps, TActor } from "@/types/type";
import { getMovieCredits } from "@/utils/getMovieCredits";
import { getMovieDetails } from "@/utils/getMovieDetails";
import { getMovieRecommendations } from "@/utils/getMovieRecommendations";
import Image from "next/image";

async function MovieDetails({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const movie = await getMovieDetails(movieId);
  const credits = await getMovieCredits(movieId);
  const recommendations = await getMovieRecommendations(movieId);

  return (
    <div className="bg-secondary bg-banner_bg relative bg-left-top bg-no-repeat px-2 py-5 sm:p-10 lg:p-14 xl:p-20  w-full mx-auto">
      <div className="flex justify-end">
        <AddToWatchlistButton movie={movie} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 flex-shrink flex-grow">
        <div className="md:w-[40%]">
          <Image
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "/default-image.png"
            }
            alt={movie.title}
            width={600}
            height={750}
            fetchPriority="high"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
        <div className="md:w-[60%]">
          <h1 className="text-3xl font-bold mb-4 text-white">{movie.title}</h1>
          <p className=" mb-4 text-white">{movie.overview}</p>
          <div className="mb-4 text-white">
            <strong>Genres:</strong>{" "}
            {movie.genres
              .map((genre: { name: string }) => genre.name)
              .join(", ")}
          </div>
          <div className="mb-4 text-white">
            <strong>Release Date:</strong>{" "}
            {new Date(movie.release_date).toLocaleDateString()}
          </div>
          <div className="">
            <h2 className="text-2xl font-bold mb-2 text-white">Cast</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
              {credits.cast.slice(0, 8).map((actor: TActor) => (
                <CastCard actor={actor} key={actor.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Recommendations List */}
      <div className="py-10 2xl:py-20">
        <SectionTitle headingText="Recommendations 🎥" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 sm:gap-4">
          {recommendations?.results?.map((movie: MovieProps) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Implement this function to generate static paths for popular movies
  // This is just a placeholder
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export const dynamicParams = true;

export const revalidate = 60; // Revalidate every 60 seconds

export default MovieDetails;
