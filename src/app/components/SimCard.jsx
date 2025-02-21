import React from "react";
import Image from "next/image";
import CardImg1 from "../../../public/telephonia.webp";

export default function SimCard() {
  return (
    <div className="max-w-[200px] min-w-[200px] h-[135px] py-2 px-3 bg-black rounded-md shadow-lg flex items-center border border-green-300">
      <Image src={CardImg1} alt="Logo" width={175} height={44} />
    </div>
  );
}
