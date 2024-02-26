import React, { useState } from 'react';
import { Autocomplete, TextField, InputAdornment} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";

const SearchAutocomplete = ({ movies }) => {

  // const [name, setName] = useState("");
  // console.log(name);
  return (
    <Autocomplete
    id="movie-search"
      options={movies}
      getOptionLabel={(movie) => movie.title}
      renderInput={(params) => (
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search for movies/events/shows..."
          InputProps={{
            sx: {
              '& .MuiInputBase-input::placeholder': {
                color: 'white',
                opacity: 0.8, // Adjust the opacity as needed
              },
              background: '#1f1f1f', // Change to your desired background color
              color: 'white',
              cursor: 'text', // Set cursor color to white
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
          {...params}
          label="Search Movies"
        />
      )}
    />
  );
};

export default SearchAutocomplete;