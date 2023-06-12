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
      <Link
        to={{
          pathname: `/movie/${props.id}/${props.title.replace(/\s+/g, "-")}`,
        }}
      >
        <div className="flex flex-col items-start gap-2 pr-4 ">
          <div className="w-full flex flex-col rounded-lg truncate divide-y divide-slate-800">
            <div className="h-full w-full object-cover">
              <img
                src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
                alt={props.original_title}
                className="w-full h-full "
              />
            </div>
            <div className="">
              <p className="flex items-center gap-4 p-2 bg-black text-white">
                {props.popularity / 100 > props.vote_average ? (
                  <>
                    <AiFillHeart color="red" />
                    {formatNumber(props.popularity)} Likes
                  </>
                ) : (
                  <>
                    <AiFillStar color="orange" />
                    {props.vote_average} / 10 Votes
                  </>
                )}
              </p>
            </div>
          </div>
          <div>
            <h3
              className={`sm:text-sm md:text-md lg:text-lg font-semibold 
            ${props.isDark ? "text-white" : "text-gray-800"}`}
            >
              {props.original_title}
            </h3>
            <p
              className={`text-ellipsis h-8 text-sm 
            ${props.isDark ? "text-white" : "text-gray-800"}`}
            >
              Released on: {props.release_date}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Poster;
