import React from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../images/movies/11.jpg";
import Image2 from "../images/movies/12.jpg";
import Image3 from "../images/movies/13.jpg";
import Image4 from "../images/movies/14.jpg";
import Image5 from "../images/movies/15.jpg";
import Image6 from "../images/movies/16.jpg";
import Image7 from "../images/movies/17.jpg";
import Image8 from "../images/movies/18.jpg";
import Image9 from "../images/movies/19.jpg";

import Image10 from "../images/shows/1.jpg";
import Image11 from "../images/shows/2.jpg";
import Image12 from "../images/shows/3.jpg";
import Image13 from "../images/shows/4.jpg";
import Image14 from "../images/shows/5.jpg";
import { useNavigate } from "react-router-dom";
import "./moviecarousal.css";

export default function MovieCarousal() {
  const navigate = useNavigate();

  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 4000, // Animation speed
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "linear", // Number of slides to scroll at once
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const bookTicket = (index) => {
    console.log("/movieeee/", index);
    navigate("/movie");
    // navigate(`/movie/${index}`);
  };

  const movies = [
    { id: 1, title: "Ram Sethu", poster: Image1 },
    { id: 2, title: "Black Panther", poster: Image2 },
    { id: 3, title: "Bh", poster: Image3 },
    { id: 4, title: "Drishyam", poster: Image4 },
    { id: 5, title: "Dhrishyam 2", poster: Image5 },
    { id: 6, title: "UUnchai", poster: Image6 },
    { id: 7, title: "Inception", poster: Image7 },
    { id: 8, title: "Interstellar", poster: Image8 },
    { id: 9, title: "Inception", poster: Image9 },
    // Add more movie objects here
  ];

  const shows = [
    { id: 1, title: "Ram Sethu", poster: Image10 },
    { id: 2, title: "Black Panther", poster: Image11 },
    { id: 3, title: "Bh", poster: Image12 },
    { id: 4, title: "Drishyam", poster: Image13 },
    { id: 5, title: "Dhrishyam 2", poster: Image14 },
  ];

  // const moviePosters = [
  //   Image1,
  //   Image2,
  //   Image3,
  //   Image4,
  //   Image5,
  //   Image6,
  //   Image7,
  //   Image8,
  //   Image9,
  // ];

  // old version(mahith)
  return (
    <div style={{ marginTop: "35px" }}>
      <div className="elevated-carousal">
        <h3 style={{ padding: "20px", fontSize: "20px" }}>
          Now showing in theatres
        </h3>
        <Slider {...settings}>
          {movies.map((index) => (
            <div key={index} style={{}}>
              <img
                src={index.poster}
                alt={`Movie Poster ${index + 1}`}
                style={{ width: "80%", height: "auto" }}
              />
              <Button
                variant="contained"
                onClick={() => bookTicket(index)}
                sx={{ marginTop: 1, marginRight: 5, marginLeft: 12 }}
              >
                Book Now
              </Button>
            </div>
          ))}
        </Slider>
      </div>
      <div
        className="elevated-carousal"
        // style={{ marginTop: "50px", backgroundColor: "bisque" }}
      >
        <h3 style={{ padding: "20px", fontSize: "20px" }}>Shows happening</h3>
        <Slider {...settings}>
          {shows.map((index) => (
            <div key={index} style={{}}>
              <img
                src={index.poster}
                alt={`Movie Poster ${index + 1}`}
                style={{ width: "80%", height: "auto" }}
              />
              <Button
                variant="contained"
                onClick={bookTicket}
                sx={{ marginTop: 1, marginRight: 5, marginLeft: 20 }}
              >
                Book Now
              </Button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );

  //new version
  // return (
  //   <div style={{ marginTop: "35px" }}>
  //     <h3>Now showing</h3>
  //     <Slider {...settings}>
  //       {movies.map((x) => (
  //         <div key={x} style={{}}>
  //           <img
  //             src={x.poster}
  //             alt={`Movie Poster ${x + 1}`}
  //             style={{ width: "80%", height: "auto" }}
  //           />
  //           <Button
  //             variant="contained"
  //             onClick={bookTicket}
  //             sx={{ marginTop: 1, marginRight: 5 }}
  //           >
  //             Book Now
  //           </Button>
  //         </div>
  //       ))}
  //     </Slider>
  //   </div>
  // );
}
