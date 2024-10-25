import Image from "next/image";
import { TActor } from "@/types/type";

const CastCard = ({ actor }: { actor: TActor }) => {
  return (
    <div className="group relative w-36 sm:w-[250px] h-52 sm:h-[320px] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-full">
        <Image
          src={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
              : "/default-image.png"
          }
          width={300}
          height={300}
          alt={actor.name}
          fetchPriority="high"
          loading="lazy"
          className="transition-all duration-300 group-hover:scale-110 object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-indigo-500 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-all duration-300 group-hover:translate-y-0">
        <h5 className="text-xl font-bold truncate mb-1 text-yellow-300">
          {actor.name}
        </h5>
        <p className="text-sm text-white font-semibold truncate">
          {actor.character}
        </p>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
        <button className="w-8 h-8 rounded-full bg-yellow-300 text-indigo-900 flex justify-center items-center shadow-md hover:bg-yellow-400 transition-all duration-300">
          <span className="text-lg">🎦</span>
        </button>
      </div>
    </div>
  );
};

export default CastCard;
