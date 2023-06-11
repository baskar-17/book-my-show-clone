import React, { useState, useEffect } from "react";
import axios from "axios";
import LiveEvents from "../LiveEvents/LiveEvents";
import PosterSlider from "../Posters/PosterSlider";

function HomePage() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const requestPopularMovies = async () => {
      try {
        const getPopularMovies = await axios.get("/movie/now_playing", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setNowPlaying(getPopularMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestPopularMovies = async () => {
      try {
        const getPopularMovies = await axios.get("/movie/popular", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setPopularMovies(getPopularMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    requestPopularMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      try {
        const getUpcomingMovies = await axios.get("/movie/upcoming", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setUpcomingMovies(getUpcomingMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    requestUpcomingMovies();
  }, []);

  useEffect(() => {
    const requestTopRatedMovies = async () => {
      try {
        const getTopRatedMovies = await axios.get("/movie/top_rated", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setTopRatedMovies(getTopRatedMovies.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    requestTopRatedMovies();
  }, []);

  return (
    <div>
      <div className="container mx-auto max-w-screen-xl p-4">
        <PosterSlider
          from={nowPlaying}
          heading={"Recommended Movies"}
          subheading={
            "Watch the recommended movies where more poeples are going"
          }
          isDark={false}
          date={false}
        />
      </div>

      <div className="container mx-auto max-w-screen-xl p-4">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
          alt="break banner"
          className="w-full"
        />
      </div>

      <div className="container mx-auto max-w-screen-xl p-4">
        <LiveEvents
          from={popularMovies}
          heading={"The Best Of Live Events"}
          subheading={"Live events for all your entertainment needs"}
        />
      </div>

      <div className="bg-slate-800 py-4">
        <div className="container mx-auto max-w-screen-xl p-4 text-white">
          <img
            src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
            alt="Premier Banner"
            className="w-full"
          />
          <PosterSlider
            from={popularMovies}
            heading={popularMovies.length > 0 ? "Premieres" : ""}
            subheading={
              popularMovies.length > 0 ? "New Releases every Friday" : ""
            }
            isDark={true}
            date={false}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl p-4">
        <PosterSlider
          from={upcomingMovies}
          heading={"Upcoming Movies"}
          subheading={"Watch the upcoming movies where more poeples are going"}
          isDark={false}
          date={false}
        />
      </div>

      <div className="container mx-auto max-w-screen-xl p-4">
        <PosterSlider
          from={popularMovies}
          heading={"Events happening near you"}
          subheading={
            "Some subheading whill go here and this is the place holder"
          }
          isDark={false}
          date={false}
        />
      </div>

      <div className="container mx-auto max-w-screen-xl p-4">
        <PosterSlider
          from={popularMovies}
          heading={"Online Streaming Events"}
          subheading={
            "Some subheading whill go here and this is the place holder"
          }
          isDark={false}
          date={true}
        />
      </div>
    </div>
  );
}

export default HomePage;
