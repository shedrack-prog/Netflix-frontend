import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "./axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Row = ({ title, fetchUrl, isLargeRow, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const story_card = document.getElementById("story-card" + rowID);
    // const arrowLeft = document.getElementById("arrowLeft");

    story_card &&
      story_card.addEventListener("scroll", function displayButton() {
        if (story_card.scrollLeft >= 100) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      });

    return () =>
      story_card &&
      story_card.removeEventListener("scroll", function displayButton() {
        if (story_card.scrollLeft >= 100) {
          setOpen(true);
        } else {
          setOpen(false);
        }
      });
  }, []);

  function slideRight() {
    const slider = document.getElementById("story-card" + rowID);
    slider.scrollLeft = slider.scrollLeft + 300;
  }

  function slideLeft() {
    const slider = document.getElementById("story-card" + rowID);
    slider.scrollLeft = slider.scrollLeft - 300;
  }

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div className="row">
      <h1 className="text-[2rem]">{title}</h1>

      <div
        id={"story-card" + rowID}
        className="row__poster flex items-center group transition-all duration-300 scroll-smooth scroll"
      >
        <div
          className={` hidden   group-hover:block ${
            open ? "opacity-100" : "opacity-0"
          }  transition-all duration-200 z-40  left-8 cursor-pointer
         absolute  bg-gray-300 text-black rounded-full p-3`}
          onClick={slideLeft}
        >
          <AiOutlineArrowLeft size={27} />
        </div>
        {movies.map((movie) => (
          <img
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            key={movie.id}
            className={`poster ${
              isLargeRow && "poster__large"
            } transition-all duration-300`}
            alt={movie.name}
          />
        ))}
        <div
          className="z-40  right-8 hidden group-hover:block transition-all duration-200
         absolute  bg-gray-300 text-black rounded-full p-3 cursor-pointer"
          onClick={slideRight}
        >
          <AiOutlineArrowRight size={27} />
        </div>
      </div>
    </div>
  );
};

export default Row;
