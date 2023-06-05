import React from "react";
import Slider from "react-slick";

import { NextArrow, PrevArrow } from "./Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarousel() {
  const settingsLg = {
    arrows: true,
    centerMode: true,
    centerPadding: `${(window.innerWidth * 0.17).toFixed()}px`,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "https://in.bmscdn.com/webin/static/offers/tubelight/blockbuster-week-banner3.jpg",
    "https://in.bmscdn.com/offers/tncbanner/get-rs150-off-on-movie-tickets-bms150.jpg?08092018221632",
    "https://in.bmscdn.com/webin/best-of-2018/best-of-2018-banner.jpg",
  ];

  return (
    <div className="bg-slate-100">
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="w-full h-44 md:h-80">
              <img
                src={image}
                alt="Book my show Hero Slider"
                className="w-full h-full"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden lg:block">
        <Slider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-80 px-2 py-2">
              <img
                src={image}
                alt="Book my show Hero Slider"
                className="w-full h-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroCarousel;
