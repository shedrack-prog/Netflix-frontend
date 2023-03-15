import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "../Request";
const Banner = () => {
  const truncateText = (str, num) => {
    return str?.length > num ? str.slice(0, num) + "..." : str;
  };

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );

      return request;
    }

    fetchData();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className="banner__contents">
        <h2 className="banner__title">
          {movie?.name || movie?.title || movie?.originalName}
        </h2>
        <div>
          <button className="banner__contents__buttons">Play</button>
          <button className="banner__contents__buttons">My List</button>
        </div>
        <p className="banner__overview">{truncateText(movie?.overview, 150)}</p>
      </div>
      <div className="banner__fade" />
    </div>
  );
};

export default Banner;
