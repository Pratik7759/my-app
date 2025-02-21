import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import GoogleIcon from "../../../public/google.svg";

export default function ReviewsCard() {
  return (
    <div className="w-[300px] p-5 rounded-2xl shadow-md border bg-gradient-to-b from-[#fbfffe] to-[#03fe9d]">
      {/* Star Rating */}
      <div className="flex text-yellow-400 mb-2">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      {/* Feedback Text */}
      <p className="text-gray-700 italic">
        I’ve been using the eSIM service for a few months now and I’m extremely
        satisfied with the performance. Switching to the eSIM was hassle-free,
        and I never have to worry about changing physical SIM cards when I
        travel. Connectivity is fast and reliable, even in remote areas. Highly
        recommend!
      </p>

      {/* User Info */}
      <div className="flex items-center mt-4">
        <p className="text-gray-900 font-semibold">John Wilson,</p>
        <p className="text-gray-900 font-semibold pl-1">Melbourne</p>
      </div>
      <div className="flex items-center mt-4 gap-3">
        <Image
          src={GoogleIcon}
          alt="John Wilson"
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="text-white">Google</p>
      </div>
    </div>
  );
}
