import Image from "next/image";
import heroImg from "@/app/assets/banner/bannar_img.png";

const Banner = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between flex-col lg:flex-row">
        <div>
          <h5 className="text-sm text-white rounded-full px-7 py-2 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Marketing Tech Expert
          </h5>

          <h1>Hi there! Bart Warrot</h1>
          <h3> Tech meets Marketing</h3>
        </div>

        <div className="lg:w-[515px] lg:h-[630px]">
          <Image src={heroImg} alt="hero_image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
