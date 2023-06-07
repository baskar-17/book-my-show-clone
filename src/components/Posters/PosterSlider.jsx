import React from "react";
import Slider from "react-slick";

import Poster from "../Posters/Poster";
import CaroselSetting from "../Config/CarouselSetting";

function PosterSlider(props) {
  return (
    <div className="container mx-auto max-w-screen-2xl my-8">
      <h1 className="text-2xl font-bold mt-4">{props.heading}</h1>
      <p className="text-sm mb-4">{props.subheading}</p>
      <Slider {...CaroselSetting}>
        {props.from.map((item) => {
          return <Poster {...item} isDark={props.isDark} />;
        })}
      </Slider>
      <div />
    </div>
  );
}

export default PosterSlider;
