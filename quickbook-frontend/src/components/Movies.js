import React, { useState } from "react";
import Image1 from "../images/movies/1.avif";
import Image2 from "../images/movies/2.avif";
import Image3 from "../images/movies/3.avif";
import Image4 from "../images/movies/4.avif";
import Image5 from "../images/movies/5.avif";
import Image6 from "../images/movies/6.avif";
import Image7 from "../images/movies/7.avif";
import Image8 from "../images/movies/8.avif";
import Image9 from "../images/movies/9.avif";
import Image10 from "../images/movies/10.avif";
import Image11 from "../images/movies/11.jpg";
import Image12 from "../images/movies/12.jpg";
import Image13 from "../images/movies/13.jpg";
import Image14 from "../images/movies/14.jpg";
import Image15 from "../images/movies/15.jpg";
import Image16 from "../images/movies/16.jpg";
import Image17 from "../images/movies/17.jpg";
import Image18 from "../images/movies/18.jpg";
import Image19 from "../images/movies/19.jpg";
import Image20 from "../images/movies/20.jpg";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";

import "./Movies.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const movies = [
  {
    id: 20,
    title: "Ram Sethu",
    poster: Image1,
    language: "Hindi",
    genre: "Action",
  },
  {
    id: 19,
    title: "Black Panther",
    poster: Image2,
    language: "English",
    genre: "Action",
  },
  {
    id: 18,
    title: "Bhediya",
    poster: Image3,
    language: "Hindi",
    genre: "Action",
  },
  {
    id: 17,
    title: "Drishyam 2",
    poster: Image4,
    language: "Hindi",
    genre: "Thriller",
  },
  {
    id: 16,
    title: "Uunchai",
    poster: Image5,
    language: "Hindi",
    genre: "Drama",
  },
  {
    id: 15,
    title: "Sani",
    poster: Image6,
    language: "Hindi",
    genre: "Drama",
  },
  {
    id: 14,
    title: "Kantara",
    poster: Image7,
    language: "Telugu",
    genre: "Drama",
  },
  {
    id: 13,
    title: "She Said",
    poster: Image8,
    language: "English",
    genre: "Romance",
  },
  {
    id: 12,
    title: "Smile",
    poster: Image9,
    language: "English",
    genre: "Horror",
  },
  {
    id: 11,
    title: "The Menu",
    poster: Image10,
    language: "English",
    genre: "Horror",
  },
  {
    id: 10,
    title: "Spiderman",
    poster: Image11,
    language: "English",
    genre: "Action",
  },
  {
    id: 9,
    title: "Argyll",
    poster: Image12,
    language: "English",
    genre: "Action",
  },
  {
    id: 8,
    title: "Demon Slayer",
    poster: Image13,
    language: "English",
    genre: "Action",
  },
  {
    id: 7,
    title: "Dune",
    poster: Image14,
    language: "English",
    genre: "Action",
  },
  {
    id: 6,
    title: "Dune: Part 2",
    poster: Image15,
    language: "English",
    genre: "Action",
  },
  {
    id: 5,
    title: "Interstellar",
    poster: Image16,
    language: "English",
    genre: "Action",
  },
  {
    id: 4,
    title: "Madame Web",
    poster: Image17,
    language: "English",
    genre: "Comedy",
  },
  {
    id: 3,
    title: "Oppenheimer",
    poster: Image18,
    language: "English",
    genre: "Drama",
  },
  {
    id: 2,
    title: "poor Things",
    poster: Image19,
    language: "English",
    genre: "Comedy",
  },
  {
    id: 1,
    title: "Wonka",
    poster: Image20,
    language: "English",
    genre: "Comedy",
  },
  // Add more movie objects here
];

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filters, setFilters] = useState({ language: "", genre: "" });
  const [language, setLanguage] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));

    const filtered = movies.filter((movie) => {
      return movie.language.includes(language) && movie.genre.includes(genre);
    });
    setFilteredMovies(filtered);
  };

  const handleClear = () => {
    setFilteredMovies(movies);
  };

  const bookTicket = () => {
    // console.log("/movie/" + index);
    navigate("/movie");
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="movie-booking-app">
      <div className="filters">
        <h2 style={{ paddingBottom: "20px", paddingLeft: "20px" }}>Filters</h2>
        <div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" sx={{ marginLeft: 2 }}>
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="language"
              onChange={handleLanguageChange}
              sx={{ marginLeft: 2 }}
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Hindi">Hindi</MenuItem>
              <MenuItem value="Telugu">Telugu</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              style={{ marginTop: "20px" }}
              sx={{ marginLeft: 2 }}
            >
              Genre
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Genre"
              style={{ marginTop: "20px" }}
              onChange={handleGenreChange}
              sx={{ marginLeft: 2 }}
            >
              <MenuItem value="Action">Action</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Romance">Romance</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleFilterChange}
            sx={{ marginTop: 2, marginRight: 5, marginLeft: 2 }}
          >
            Filter
          </Button>
          <Button variant="outline" onClick={handleClear} sx={{ marginTop: 2 }}>
            Clear
          </Button>
        </div>
      </div>
      <div className="movie-posters">
        {filteredMovies
          .sort((a, b) => a.id - b.id)
          .map((movie) => (
            <div key={movie.id} className="movie-poster">
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: 300, height: 450 }}
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
      </div>
    </div>
  );
};

export default Movies;
