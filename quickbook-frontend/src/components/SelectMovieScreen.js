import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image1 from "../images/movies/15.jpg";
import { useNavigate } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "axios";

function SelectMovieScreen() {
  const navigate = useNavigate();

  const [movieInfo, setMovieInfo] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedShowtime, setSelectedShowtime] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  //const movieId = "438631";

  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  const onPlayerReady = (event) => {};

  const videoId = "dQw4w9WgXcQ";

  const movieData = {
    cast: [
      { name: "Timothee Chalamet", role: "Paul Atreides" },
      { name: "Austin Butler", role: "Feyd" },
      { name: "Zendaya", role: "Chani" },
      // Add more cast members here
    ],
    crew: [
      { name: "Dennis Villeneueve", role: "Director" },
      { name: "Jon Spalhts", role: "Screenplay" },
      { name: "Cale Boyter", role: "Producer" },
      // Add more crew members here
    ],
  };

  useEffect(() => {
    const fetchMovieInfo = async () => {
      const movieId = "438631";
      try {
        const response = await axios.get(
          "http://localhost:3000/movie/" + movieId
        );
        console.log("Movie data d " + response.data.movie.id);
        setMovieInfo(response.data.movie);
        setLoading(false);
      } catch (error) {
        console.log("Movie data d " + error.message);
        setError(error.message);
      }
    };

    // const fetchShowTimings = async () => {
    //   try {
    //     const response = await fetch("showTimingsAPIEndpoint");
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch show timings");
    //     }
    //     const data = await response.json();
    //     setShowTimings(data);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    // };

    fetchMovieInfo();
    // fetchShowTimings();
  }, []);

  const theaters = [
    { id: 1, name: "Theater A", showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    { id: 2, name: "Theater B", showtimes: ["11:00 AM", "2:00 PM", "5:00 PM"] },
    { id: 3, name: "Theater C", showtimes: ["12:00 PM", "3:00 PM", "6:00 PM"] },
  ];

  const handleTheaterChange = (event) => {
    setSelectedTheater(event.target.value);
    setSelectedShowtime(""); // Reset showtime when theater changes
  };

  const handleShowtimeChange = (event) => {
    setSelectedShowtime(event.target.value);
  };

  const theatreList = ["AMC Empire 25", "AMC 33", "Regal Square Secaucus"];
  const showTimings = ["09:00", "12:00", "15:00", "18:00"];

  const theatresWithTime = [
    createData("AMC Empire 25", ["09:00", "12:00", "15:00", "18:00"]),
    createData("AMC 33", ["09:00", "12:00", "15:00", "18:00"]),
    createData("Regal", ["09:00", "12:00", "15:00", "18:00"]),
  ];

  function createData(name, timings) {
    return { name, timings };
  }

  const theatres = [
    {
      name: "Theatre A",
      timings: ["10:00 AM", "2:00 PM", "6:00 PM"],
    },
    {
      name: "Theatre B",
      timings: ["11:00 AM", "3:00 PM", "7:00 PM"],
    },
    {
      name: "Theatre C",
      timings: ["12:00 PM", "4:00 PM", "8:00 PM"],
    },
  ];

  const handleBookTicket = () => {
    navigate("/bookSeat");
  };

  // Function to book a movie
  const bookMovie = (theatreName, timing) => {
    // Replace this with your booking API call
    console.log(`Booking movie at ${theatreName} for ${timing}`);
  };

  return (
    <div>
      {loading ? (
        <p>Loading....</p>
      ) : (
        <div style={{ marginTop: "25px" }}>
          <Box display="flex" p={1}>
            <Box flexShrink={0}>
              <img
                src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
                alt="Movie Poster"
                style={{ width: 300, height: 450 }}
              />
            </Box>
            <Box flexGrow={1} ml={2}>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                {movieInfo.original_title}
              </Typography>
              <Typography paragraph style={{ marginTop: "10px" }}>
                {movieInfo.overview}
              </Typography>

              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{ fontWeight: "bold", fontSize: "25px" }}
                      >
                        Theatre
                      </TableCell>
                      <TableCell
                        align="centre"
                        style={{ fontWeight: "bold", fontSize: "25px" }}
                      >
                        Show Timings
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {theatres.map((theatre) => (
                      <TableRow key={theatre.name}>
                        <TableCell>{theatre.name}</TableCell>
                        <TableCell>
                          {theatre.timings.map((timing) => (
                            <Button
                              key={timing}
                              onClick={() => bookMovie(theatre.name, timing)}
                            >
                              {timing}
                            </Button>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))}
                    {/* {theatresWithTime.map((theatreWithTime) => (
                      <TableRow
                        key={theatreWithTime.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {theatreWithTime.name}
                        </TableCell>
                        <TableCell>
                          {theatreWithTime.timings.map((timing) => (
                            <Button onClick={handleBookTicket}>{timing}</Button>
                          ))}
                        </TableCell>
                      </TableRow>
                    ))} */}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box display={"flex"}>
            <Box
              p={1}
              style={{
                display: "flex",
              }}
            >
              <YouTube
                videoId={movieInfo.trailerKey}
                opts={videoOptions}
                onReady={onPlayerReady}
              />
            </Box>
            <Box flexGrow={1} ml={3}>
              <Grid container spacing={2} sx={{ padding: "20px" }}>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ padding: "20px" }}>
                    <Typography variant="h6" gutterBottom>
                      Cast
                    </Typography>
                    <List>
                      {movieInfo.cast.map((member, index) => (
                        <ListItem key={index} divider>
                          <ListItemText
                            primary={member.name}
                            secondary={member.character}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Paper elevation={3} sx={{ padding: "20px" }}>
                    <Typography variant="h6" gutterBottom>
                      Crew
                    </Typography>
                    <List>
                      {movieInfo.crew.map((member, index) => (
                        <ListItem key={index} divider>
                          <ListItemText
                            primary={member.name}
                            secondary={member.job}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
}

export default SelectMovieScreen;
