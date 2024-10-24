import { getMovieCredits } from "@/utils/getMovieCredits";
import { getMovieDetails } from "@/utils/getMovieDetails";
import Image from "next/image";

async function MovieDetails({ params }: { params: { id: string } }) {
  const movieId = params.id;
  const movie = await getMovieDetails(movieId);
  const credits = await getMovieCredits(movieId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-700 mb-4">{movie.overview}</p>
          <div className="mb-4">
            <strong>Genres:</strong>{" "}
            {movie.genres
              .map((genre: { name: string }) => genre.name)
              .join(", ")}
          </div>
          <div className="mb-4">
            <strong>Release Date:</strong>{" "}
            {new Date(movie.release_date).toLocaleDateString()}
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Cast</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {credits.cast
                .slice(0, 8)
                .map(
                  (actor: {
                    id: string;
                    name: string;
                    profile_path: string;
                    character: string;
                  }) => (
                    <li key={actor.id} className="text-center">
                      <Image
                        src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                        alt={actor.name}
                        width={100}
                        height={150}
                        quality={70}
                        className="rounded-lg mx-auto mb-2"
                        priority
                      />
                      <p className="font-semibold">{actor.name}</p>
                      <p className="text-sm text-gray-600">{actor.character}</p>
                    </li>
                  )
                )}
            </ul>
          </div>
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
