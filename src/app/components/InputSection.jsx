import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import search icon

export default function InputSection() {
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center justify-center bg-[#171717] pt-10">
      <div className=" text-center">
        <p className="text-base text-white">
          Connect Anywhere, Anytime – Your eSIM, Your Way
        </p>
        <p className="text-[40px] font-medium text-white">
          International eSIM Destinations
        </p>
      </div>
      <div className="flex items-center border border-black rounded-md overflow-hidden max-w-[500px] w-full mt-3">
        <div className="px-3 text-gray-500 bg-black">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 py-3 px-3 outline-none bg-black text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Handle change
        />
        <button className="bg-[#03fe9d] text-white px-4 py-2 hover:bg-green-600">
          Search
        </button>
      </div>

      <div className="flex items-center justify-center mt-10 gap-6 mb-6">
        <button className="bg-[#03fe9d] text-white px-4 py-2 hover:bg-green-600 rounded-md">
          Popular Plans
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Local eSIMs
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-md">
          Regions
        </button>
      </div>
    </div>
  );
}
