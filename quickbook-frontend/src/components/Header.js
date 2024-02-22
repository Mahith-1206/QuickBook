import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu"; // Assuming you use it as the app logo
import { Box, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <AppBar position="static" sx={{ minHeight: "10px" }}>
      <Toolbar sx={{ minHeight: "10px", marginBottomx: 15 }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 1 }}
          onClick={handleLogoClick}
        >
          <h4>QuickBook</h4>
          {/* This icon serves as the app logo */}
        </IconButton>
        {/* This Box component serves as a spacer */}
        <Box flex={1}>
          <TextField
            style={{ color: "white" }}
            fullWidth
            variant="outlined"
            placeholder="Search for movies/events/shows..."
            InputProps={{
              sx: {
                "& .MuiInputBase-input::placeholder": {
                  // Targeting the placeholder style
                  color: "white", // Change to your desired placeholder color
                  opacity: 1, // Optional: adjust the opacity of the placeholder text
                },
                background: "#353232",
                color: "white",
              },

              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button color="inherit" sx={{ ml: 2 }}>
          Login/Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
