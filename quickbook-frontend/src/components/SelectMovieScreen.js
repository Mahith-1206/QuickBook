import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Image1 from "../images/movies/1.avif";
import { useNavigate } from "react-router-dom";

function SelectMovieScreen() {
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
      <Box display="flex" p={2}>
        <Box flexShrink={0}>
          <img
            src={Image1}
            alt="Movie Poster"
            style={{ width: 300, height: 450 }}
          />
        </Box>
        <Box flexGrow={1} ml={2}>
          <Typography variant="h5">Ram Setu</Typography>
          <Typography paragraph>Description of the movie...</Typography>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Theatre</TableCell>
                  <TableCell align="centre">Show Timings</TableCell>
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
                        <Button>{timing}</Button>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleBookTicket}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default SelectMovieScreen;
