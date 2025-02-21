import { useState, useEffect } from "react";
import Image from "next/image";
import Banner1 from "../../../public/banner.png";
import Banner2 from "../../../public/banner2.png";

const images = [Banner1, Banner2]; // Paths in public folder

const BackgroundSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px]">
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          src={images[currentImage]}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      {/* Overlay Text */}
      {/* <div className="">Travel smart with eSIM</div> */}

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white left-0 max-w-[293px]  pl-10">
        <h6 className="text-white">
          Pioneering the World's 1st Early Stage Profitable eSIM Company
        </h6>
        <p className="text-[40px] text-white font-medium leading-none mt-1">
          Travel smart with eSIM
        </p>
      </div>

      <div className="absolute text-[40px] top-1/2 right-0 transform -translate-y-1/2 flex flex-col font-bold items-end z-10 text-white max-w-[438px] pr-4 bg-black bg-opacity-50 py-4 px-6 rounded-md mr-7">
        Affordable eSIM. Global Connectivity. Unlimited Freedom.
      </div>
    </div>
  );
};

export default BackgroundSlider;
