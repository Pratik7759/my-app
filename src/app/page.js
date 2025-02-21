"use client";

import Header from "./components/Header";
import BackgroundSlider from "./components/BackgroundSlider";
import SimCard from "./components/SimCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputSection from "./components/InputSection";
import CountryCard from "./components/CountryCard";
import BlueBanner from "./components/BlueBanner";
import ReviewsCard from "./components/ReviewsCard";
import GetApp from "./components/GetApp";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const cardData = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div className="container mx-auto ">
      <Header />
      <main className="flex-grow">
        <BackgroundSlider />
      </main>
      <div className="bg-black p-5 pl-9">
        <Slider {...settings}>
          {cardData.map((_, index) => (
            <SimCard key={index} />
          ))}
        </Slider>
      </div>
      <InputSection />
      <div className="grid grid-cols-6 gap-4 p-5 bg-[#171717]">
        {Array.from({ length: 12 }).map((_, index) => (
          <CountryCard key={index} />
        ))}
      </div>
      <BlueBanner />

      <div className="bg-[#171717] p-10">
        <div className="pl-10">
          <p className="text-white text-lg pl-10">Reviews</p>
          <p className="text-white text-[40px] font-bold pl-10 pb-5">
            {" "}
            Explore Commbitz: See What Users Say
          </p>
        </div>

        <div className="flex flex-row gap-5 justify-center items-center p-5">
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
          <ReviewsCard />
        </div>
      </div>
      <div className="bg-[#171717] pb-10">
        <GetApp />
      </div>
    </div>
  );
}
