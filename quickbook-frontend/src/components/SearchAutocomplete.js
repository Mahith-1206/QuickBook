import React, { useState, useEffect } from "react";
import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const SearchAutocomplete = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const resultss = [];

  useEffect(() => {
    if (query.trim() !== "") {
      axios
        .get(`http://localhost:3000/movie/search?query=${query}`)
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  // const [name, setName] = useState("");
  // console.log(name);
  return (
    <div>
      <input
        type="text"
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          width: "900px",
          height: "50px",
          borderRadius: "5px",
          fontStyle: "italic",
          fontSize: "17px",
        }}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="  Search for a movie..."
      />
      <ul>
        {results.map((movie, index) => (
          <li key={index}>{movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAutocomplete;
