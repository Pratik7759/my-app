import React from "react";

export default function BlueBanner() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#19d2b0] via-[#2087c6] to-[#2087c6] p-10">
      <div>
        <p className="text-[40px] font-bold text-white leading-none">
          Get your Global eSIM
        </p>
        <p className="text-[40px] font-bold text-white">
          activated in seconds.
        </p>
        <p className="text-base font-bold text-white">We've got you covered!</p>
      </div>
      <div className="flex justify-start gap-3">
        <button className="bg-[#03fe9d] text-white px-4 py-2 hover:bg-green-600 rounded-md">
          Installation Guide
        </button>
        <button className="bg-[#03fe9d] text-white px-4 py-2 hover:bg-green-600 rounded-md">
          Customer Support
        </button>
        <button className="bg-[#03fe9d] text-white px-4 py-2 hover:bg-green-600 rounded-md">
          Check your device Compatibility
        </button>
        <button className="bg-[#03fe9d] text-white px-4 py-2 hover:bg-green-600 rounded-md">
          Activate your eSIM
        </button>
      </div>
    </div>
  );
}
