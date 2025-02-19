"use client";
import Search from "@/Search";
import { useEffect, useState } from "react";

export default function Home() {
  const data = ["ram", "Mohan", "RajEsh", "apple"];
  const [recipes, setRecipes] = useState([]);

  const newData = async () => {
    try {
      let response = await fetch("https://dummyjson.com/recipes");
      let data = await response.json();
      // console.log(data);
      setRecipes(data.recipes);
    } catch {
      console.log("Error");
    }
  };

  useEffect(() => {
    newData();
  }, [recipes]);

  return (
    <div className="container mx-auto p-8">
      <Search data={data} />

      {recipes.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
}
