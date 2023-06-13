import { useState, useEffect } from "react";
import axios from "axios";

function useMovieData(movieId) {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getNowPlayingMovies = await axios.get("/movie/now_playing", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setNowPlaying(getNowPlayingMovies.data.results);

        const getPopularMovies = await axios.get("/movie/popular", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setPopularMovies(getPopularMovies.data.results);

        const getUpcomingMovies = await axios.get("/movie/upcoming", {
          params: {
            api_key: "a2509a5ce6a680b1529282d3d4ddb0e4",
          },
        });
        setUpcomingMovies(getUpcomingMovies.data.results);

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

    fetchData();
  }, []);

  return {
    nowPlaying,
    popularMovies,
    upcomingMovies,
    topRatedMovies,
  };
}

export default useMovieData;
