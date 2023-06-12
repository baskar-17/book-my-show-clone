import React from "react";
import MovieHeader from "./MovieHeader";

function MoviePage() {
  return (
    <>
      <MovieHeader />
      <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-64">
        <div className="flex flex-col items-start gap-3">
          <h3 className="text-gray-900 font-bold text-2xl">About the movie</h3>
          <p>
            An academically bright but faint-hearted cop needs to overcome his
            fears in order to succeed. He must team up with a hostile and a
            reclusive senior cop to catch a serial killer on the loose.
          </p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="text-gray-900 font-bold text-2xl">
            Top offers for you
          </h3>
          <div className="flex gap-3 p-4 w-96 bg-amber-100 border-dashed border-2 border-yellow-400 rounded-xl">
            <img
              src="https://in.bmscdn.com/offers/tnclogo/filmy-pass---rs-75-off-on-movies-filmypass99.jpg?26082021190202"
              alt="icon"
              className="w-6 h-6 object-cover"
            />
            <div>
              <p className="font-semibold">10% off on movie munchies!</p>
              <p>Tap to view deails</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
