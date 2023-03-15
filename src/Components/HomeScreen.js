import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";
import requests from "../Request";
import "./HomeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homescreen__container">
      {/* navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        rowID="1"
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row
        rowID="2"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row rowID="3" title="Comedy" fetchUrl={requests.fetchComedyMovies} />

      <Row rowID="4" title="Romance" fetchUrl={requests.fetchRomanceMovies} />

      <Row
        rowID="5"
        title="Documentries"
        fetchUrl={requests.fetchDocumentriesMovies}
      />

      <Row rowID="6" title="Top Rated" fetchUrl={requests.fetchTopRated} />

      <Row rowID="7" title="Trending Now" fetchUrl={requests.fetchTrending} />

      <Row
        rowID="8"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
    </div>
  );
};

export default HomeScreen;
