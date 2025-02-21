import React from "react";
import Image from "next/image"; // ✅ Import Image
import AppStore from "../../../public/appstore.svg";
import ScannerImage from "../../../public/scanner.webp";

export default function GetApp() {
  return (
    <div className="bg-[linear-gradient(45deg,#0e8562,#0b486c_20%,#2ea7db_47%,#139960_82%)] rounded-[20px] pt-5 pl-10 pr-10 pb-0 flex justify-between mx-auto w-[90%] max-w-[1200px]">
      <div>
        <h2 className="text-[30px] text-white font-bold mb-5">
          Get the Commbitz app.
        </h2>
        {/* ✅ Corrected Image Component Usage */}
        <div className="flex justify-start gap-5">
          <Image
            src={AppStore}
            alt="App Store"
            width={150}
            height={50}
            className="rounded-md"
          />
          <Image
            src={AppStore}
            alt="App Store"
            width={150}
            height={50}
            className="rounded-md"
          />
        </div>
        <p className="text-white text-lg mt-4">
          Download or scan the code to install the app.
        </p>
      </div>
      <Image
        src={ScannerImage}
        alt="App Store"
        width={250}
        height={150}
        className="rounded-md"
      />
    </div>
  );
}
