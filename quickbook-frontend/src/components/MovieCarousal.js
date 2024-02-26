import React from "react";
import Slider from "react-slick";
import { Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../images/movies/1.avif";
import Image2 from "../images/movies/2.avif";
import Image3 from "../images/movies/3.avif";
import Image4 from "../images/movies/4.avif";
import Image5 from "../images/movies/5.avif";
import Image6 from "../images/movies/6.avif";
import Image7 from "../images/movies/7.avif";
import Image8 from "../images/movies/8.avif";
import Image9 from "../images/movies/9.avif";
import { useNavigate } from "react-router-dom";

export default function MovieCarousal() {
  const navigate = useNavigate();

  const settings = {
    dots: true, // Show dot indicators
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 5, // Number of slides to scroll at once
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

  const bookTicket = () => {
    navigate("/movie");
  };

  const movies = [
    { id: 1, title: 'Ram Sethu', poster: Image1},
    { id: 2, title: 'Black Panther', poster: Image2 },
    { id: 3, title: 'Bh', poster: Image3},
    { id: 4, title: 'Drishyam', poster: Image4 },
    { id: 5, title: 'Dhrishyam 2', poster: Image5},
    { id: 6, title: 'UUnchai', poster: Image6 },
    { id: 7, title: 'Inception', poster: Image7},
    { id: 8, title: 'Interstellar', poster: Image8 },
    { id: 9, title: 'Inception', poster: Image9},
    // Add more movie objects here
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
      <h3>Now showing</h3>
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
              onClick={bookTicket}
              sx={{ marginTop: 1, marginRight: 5 }}
            >
              Book Now
            </Button>
          </div>
        ))}
      </Slider>
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
