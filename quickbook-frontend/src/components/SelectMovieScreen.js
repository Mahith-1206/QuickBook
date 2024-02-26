import React, { useState } from "react";
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
function SelectMovieScreen() {
  const videoOptions = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Play the video automatically
      // Other player parameters can go here
    },
  };

  // Handle YouTube player ready event (optional)
  const onPlayerReady = (event) => {
    // For example, you could play the video automatically:
    // event.target.playVideo();
    // Or adjust the volume, etc.
  };

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

  const navigate = useNavigate();

  const [selectedTheater, setSelectedTheater] = useState("");
  const [selectedShowtime, setSelectedShowtime] = useState("");

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

  //   const rows = [
  //     createData("AMC Empire 25", "10:30", 6.0, 24, 4.0),
  //     createData("AMC 33", "12:00", 9.0, 37, 4.3),
  //   ];

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

  const handleBookTicket = () => {
    navigate("/bookSeat");
  };

  return (
    <div style={{ marginTop: "25px" }}>
      <Box display="flex" p={1}>
        <Box flexShrink={0}>
          <img
            src={Image1}
            alt="Movie Poster"
            style={{ width: 300, height: 450 }}
          />
        </Box>
        <Box flexGrow={1} ml={2}>
          <Typography variant="h4" style={{ fontWeight: "bold" }}>
            Dune: Part 2
          </Typography>
          <Typography paragraph style={{ marginTop: "10px" }}>
            Paul stays behind to continue fighting against the Harkonnens,
            infuriated by her lies and unethical harnessing of the religious
            zealots on Arrakis. The Baron demotes Rabban and makes Feyd-Rautha
            ruler of Arrakis. Paul reunites with Gurney Halleck, who had joined
            the smugglers after the Atreides' downfall.
          </Typography>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold", fontSize: "25px" }}>
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
                {theatresWithTime.map((theatreWithTime) => (
                  <TableRow
                    key={theatreWithTime.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                ))}
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
            videoId={videoId}
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
                  {movieData.cast.map((member, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        primary={member.name}
                        secondary={member.role}
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
                  {movieData.crew.map((member, index) => (
                    <ListItem key={index} divider>
                      <ListItemText
                        primary={member.name}
                        secondary={member.role}
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
  );
}

export default SelectMovieScreen;
