"use client";
import React, { useState } from "react";

export default function Search({ data }) {
  const [val, setVal] = useState("");

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(val.toLowerCase())
  );
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={val}
        onChange={handleChange}
        className="w-full max-w-sm p-3 text-gray-800 placeholder-gray-500 border-4 border-indigo-500 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-indigo-300 hover:shadow-md transition duration-200"
      />
      {filteredData.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
