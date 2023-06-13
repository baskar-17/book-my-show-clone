import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovieData from "../Config/MovieData";
import { AiFillStar } from "react-icons/ai";

const launchRazorPay = () => {
  const options = {
    key: "rzp_test_gNX7TdwCLb6LDu",
    amount: 50000,
    currency: "INR",
    name: "Book My Show Clone",
    description: "Movie Purchase on Rental",
    image:
      "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done");
    },
    theme: { color: "#c4242d" },
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

function MovieHeader() {
  const MovieData = useMovieData();
  console.log(MovieData);

  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const movie = (
      MovieData.nowPlaying ||
      MovieData.popularMovies ||
      MovieData.topRatedMovies ||
      MovieData.upcomingMovies
    ).find((movie) => movie.id === parseInt(id));

    setMovieDetail(movie);
  }, [
    id,
    MovieData.nowPlaying,
    MovieData.popularMovies,
    MovieData.topRatedMovies,
    MovieData.upcomingMovies,
  ]);

  console.log(movieDetail);

  if (!movieDetail) {
    return <div>Loading...</div>;
  }

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

      <div className="hidden lg:block h-full">
        <div className="h-96 -z-10 relative overflow-hidden">
          <div
            className="absolute w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #1A1A1A 30%, #1A1A1A 40%, rgba(26, 26, 26, 0.0409746) 90%, #1A1A1A 100%)",
            }}
          />
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`}
            alt="Movie Banner"
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="absolute w-2/3 left-64 top-36 px-0">
          <div className="w-52 h-full object-cover flex gap-8 items-center">
            <img
              src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className="h-full w-full rounded-xl"
            />

            <div className="absolute w-1/2 left-64 flex flex-col gap-4">
              <h2 className="text-white text-4xl font-bold">
                {movieDetail && movieDetail.title
                  ? movieDetail.title
                  : "Not found"}
              </h2>

              <div>
                <img src="" alt="" />
                <p className="text-white text-md flex gap-4 items-center font-bold text-2xl">
                  <AiFillStar size={32} color="#ed2151" />
                  {movieDetail.vote_average}
                  /10 Votes
                </p>
              </div>
              <div className="bg-neutral-700 w-fit p-2 rounded-md flex gap-16">
                <div>
                  <p className="text-white text-lg font-semibold">
                    Add your rating & review
                  </p>
                  <p className="text-white text-md">your ratings matter</p>
                </div>
                <button className="rounded-lg px-2 font-bold bg-white text-black">
                  Rate Now
                </button>
              </div>
              <div className="text-white flex items-center gap-4">
                <p>2 hrs 16 min</p>
                <span> • </span>
                <p>UA</p>
                <span> • </span>
                <p>
                  {movieDetail && movieDetail.release_date.toLocaleString()}
                </p>
              </div>
              <button
                onClick={launchRazorPay}
                className="bg-red-500 hover:bg-red-600 mt-4 px-16 w-fit py-4 rounded-md text-white font-semibold"
              >
                Book tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHeader;
