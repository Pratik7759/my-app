import React from "react";
import Image from "next/image";
import ChinaImg from "../../../public/china.png";
import BackgroundImage from "../../../public/bg_card.png";

export default function CountryCard() {
  return (
    <div className="w-[200px] h-[150px] border border-gray-300 rounded-lg shadow-md flex flex-col items-start justify-center py-2 px-3 bg-black transition-transform duration-300 hover:scale-105">
      <div className="w-[60px] h-[60px] relative">
        <Image
          src={ChinaImg}
          alt="China"
          layout="fill"
          className="rounded-md"
        />
      </div>
      <p className="mt-3 text-lg font-semibold text-white">China</p>
    </div>
  );
}
