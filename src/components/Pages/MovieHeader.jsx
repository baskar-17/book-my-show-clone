import React from "react";
// import PosterDetails from "../Config/TempPosters";

function MovieHeader() {
  return (
    <div>
      <div className="md:hidden">
        <img
          src="https://lawliberty.org/app/uploads/2020/06/Inception.jpg"
          alt="Movie Banner"
        />
      </div>
      <div className="hidden md:block lg:hidden">
        <img
          src="https://lawliberty.org/app/uploads/2020/06/Inception.jpg"
          alt="Movie Banner"
        />
      </div>
      <div className="hidden lg:block h-96 relative overflow-hidden">
        <div
          className="absolute w-full h-full z-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)",
          }}
        />

        <div className="absolute z-20 h-80 left-16 top-10 ">
          <img
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/por-thozhil-et00357691-1684415887.jpg"
            alt=""
            className="h-full w-full rounded-xl"
          />
        </div>

        <div className="absolute z-30 h-80 left-16 top-10 ">
          <h2>Por Thozhil</h2>
        </div>

        <img
          src="https://lawliberty.org/app/uploads/2020/06/Inception.jpg"
          alt="Movie Banner"
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
}
export default MovieHeader;
