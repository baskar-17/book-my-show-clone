import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiFillHeart } from "react-icons/ai";

function Poster(props) {
  //Number formater
  function formatNumber(num) {
    num = Number(num);
    if (isNaN(num)) return "-";
    if (num >= 1e9) {
      return (num / 1e9).toFixed(2) + "B";
    } else if (num >= 1e6) {
      return (num / 1e6).toFixed(2) + "M";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(2) + "K";
    } else {
      return num.toFixed(1);
    }
  }

  return (
    <>
      <Link to={`/movie/${props.title.replace(/\s+/g, "-")}`}>
        <div className="flex flex-col items-start gap-2 pr-8">
          <div className="w-full flex flex-col rounded-lg truncate divide-y divide-slate-800">
            <div className="h-80 w-full object-cover">
              <img
                src={props.src}
                alt={props.title}
                className="w-full h-full "
              />
            </div>
            <div className="">
              <p className="flex items-center gap-4 p-2 bg-black text-white">
                {props.like > props.vote ? (
                  <>
                    <AiFillHeart color="red" />
                    {formatNumber(props.like)} Likes
                  </>
                ) : (
                  <>
                    <AiFillStar color="orange" />
                    {(props.vote / 100).toFixed(2)} / 10 Votes
                  </>
                )}
              </p>
            </div>
          </div>
          <div>
            <h3
              className={`text-lg font-bold 
            ${props.isDark ? "text-white" : "text-gray-800"}`}
            >
              {props.title}
            </h3>
            <p
              className={`text-sm 
            ${props.isDark ? "text-white" : "text-gray-800"}`}
            >
              {props.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Poster;
