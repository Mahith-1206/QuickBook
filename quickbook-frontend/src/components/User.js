import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
  Avatar,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import Button from "@mui/material/Button";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import axios from "axios";
import { useAuth } from "../context/auth.context";

// Assuming userData is the object that contains the user's information
const userData = {
  name: "Mahith Kumar",
  rewardPoints: 120,
  memberType: "Gold",
  pastTickets: [
    {
      id: 1,
      movieName: "Inception",
      theatre: "AMC Empire 25",
      date: "2023-02-20",
      noOfSeats: 2,
    },
    {
      id: 2,
      movieName: "Interstellar",
      theatre: "Regal Secaucus",
      date: "2023-02-22",
      noOfSeats: 4,
    },
    {
      id: 3,
      movieName: "The Dark Knight",
      theatre: "AMC",
      date: "2023-02-25",
      noOfSeats: 1,
    },
    // Add more past tickets here
  ],
};

const User = () => {
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const { user } = useAuth();
  const [error, setError] = useState(null);

  const fetchTickets = async () => {
    const userName = user.username;
    try {
      const response = await axios.get(
        "http://localhost:3000/ticket/tickets/" + userName
      );

      console.log(response.data.bookings);

      setTicketData(response.data.bookings); // Set movies from API response
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets(); // Fetch movies when component mounts
  }, []);

  const cancelTicket = async (ticket) => {
    try {
      console.log("positions, ", ticket.seats);

      console.log("request body::", ticket.VenueID, ticket.seatPositions);
      const response = await axios.put(
        "http://localhost:3000/venue/book-seats",
        {
          booked: false,
          venueId: ticket.VenueID,
          seats: ticket.seatPositions,
        }
      );
      console.log("response success? ", response.data.success);
      if (response.data.success === true) {
        setIsBookingConfirmed(true);
      }
    } catch (error) {
      console.log("Movie data d " + error.message);
      setError(error.message);
    }
  };

  const goHome = () => {
    setIsBookingConfirmed(false);
  };

  return (
    <Box sx={{ maxWidth: 800, margin: "auto", mt: 5 }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              <AccountCircleIcon />
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="h5">{userData.name}</Typography>
            <Typography variant="body1">
              Reward Points: {userData.rewardPoints}
            </Typography>
            <Typography variant="body1">
              Member Type: {userData.memberType}
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h6" gutterBottom>
          Past Tickets
        </Typography>
        <List>
          {ticketData.map((ticket) => (
            <ListItem key={ticket.BookingID} sx={{ display: "block", mb: 2 }}>
              <Card variant="outlined">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <CardContent>
                      <Typography variant="h6">{ticket.EventName}</Typography>
                      <Typography variant="h6">
                        Status: {ticket.Status}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Booking ID: {ticket.BookingID}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Date: {ticket.Time}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Theatre: {ticket.venue_name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Seats: {ticket.seatNumbers}
                      </Typography>
                    </CardContent>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                      marginRight: "20px",
                    }}
                  >
                    <Button onClick={() => cancelTicket(ticket)}>
                      Cancel Ticket
                    </Button>
                  </div>
                </div>
              </Card>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Dialog open={isBookingConfirmed}>
        <DialogTitle style={{ fontWeight: "bold", marginLeft: "50px" }}>
          Booking Cancelled!
        </DialogTitle>
        <DialogContent>
          Your ticket was cancelled successfully!
          <div>
            {
              <Button
                onClick={goHome}
                style={{
                  fontWeight: "bold",
                  marginLeft: "120px",
                  marginTop: "20px",
                }}
              >
                {" "}
                Okay{" "}
              </Button>
            }
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default User;
