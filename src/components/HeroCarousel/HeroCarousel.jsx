import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

import { NextArrow, PrevArrow } from "./Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroCarousel() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      try {
        const getImages = await axios.get("/movie/now_playing", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setImages(getImages.data.results);
        console.log(getImages);
      } catch (error) {
        console.error(error);
      }
    };

    requestNowPlayingMovies();
  }, []);

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

  return (
    <div className="bg-slate-100">
      <div className="lg:hidden">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="w-full h-44 md:h-80 object-cover">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
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
