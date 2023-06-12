import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

import { NextArrow, PrevArrow } from "./Arrows";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Movies from "../../Assets/wired-outline-1876-cinema.gif";
import Music from "../../Assets/wired-outline-43-music-note.gif";
import Sports from "../../Assets/wired-outline-430-rugby-ball.gif";
import Comedy from "../../Assets/wired-outline-261-emoji-smile.gif";
import Stream from "../../Assets/wired-outline-62-film.gif";
import Plays from "../../Assets/wired-outline-1092-applause.gif";
import SeeAll from "../../Assets/wired-outline-12-layers.gif";

const header = [
  { icon: Movies, title: "Movies" },
  { icon: Music, title: "Music" },
  { icon: Sports, title: "Sports" },
  { icon: Comedy, title: "Comedy" },
  { icon: Stream, title: "Stream" },
  { icon: Plays, title: "Plays" },
  { icon: SeeAll, title: "See All" },
];

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
    dots: false,
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  // const settingsSm = {
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  // };

  return (
    <div>
      <div className="sm:block md:hidden">
        <div className="flex gap-10 p-4 w-full overflow-scroll">
          {header.map((item) => (
            <div className="flex flex-col items-center">
              <img src={item.icon} alt={item.title} className="w-10 h-10" />
              <p className="text-sm font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block lg:hidden bg-slate-100">
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

      <div className="hidden lg:block bg-slate-100">
        <Slider {...settingsLg}>
          {images.map((image) => (
            <div className="w-full h-80 px-2 py-2">
              <img
                src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`}
                alt="Book my show Hero Slider"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroCarousel;
