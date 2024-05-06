import React, { useState } from "react";
import {
  Button,
  Typography,
  Box,
  Paper,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth.context";

function PaymentScreen() {
  const [redeem, setRedeem] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const {
    id,
    theatreName,
    timing,
    totalPrice,
    totalSeats,
    movieName,
    positions,
    seatNumbersString,
    movieId,
  } = location.state;

  const [paymentDetails, setPaymentDetails] = useState({
    movieName: "Dune: Part two",
    showTime: "7:00 PM",
    tickets: 2,
    pricePerTicket: 12.99,
    totalPrice: 25.98,
    theatre: "AMC Empire 25",
  });

  const redeemPoints = () => {
    if (!redeem && paymentDetails.totalPrice > 0) {
      let updatedTotalPrice = Math.max(paymentDetails.totalPrice - 25, 0); // Ensure total price doesn't go below 0

      updatedTotalPrice = +updatedTotalPrice.toFixed(2);
      setPaymentDetails({ ...paymentDetails, totalPrice: updatedTotalPrice });
      setRedeem(true);
    }
  };

  const handlePayment = async () => {
    console.log("Processing payment...");
    console.log("user details..", user.username);
    console.log("movie id::::", movieId);
    console.log("venue id and name", id, theatreName);
    try {
      console.log("positions, ", positions);
      const response = await axios.put(
        "http://localhost:3000/venue/book-seats",
        {
          booked: true,
          venueId: id,
          seats: positions,
        }
      );

      const bookingResponse = await axios.put(
        "http://localhost:3000/venue/booking-seats",
        {
          username: user.username,
          venueId: id,
          seatNumbers: seatNumbersString,
          positions: positions,
          eventId: movieId,
        }
      );

      const emailResponse = await axios.post(
        "http://localhost:3000/emails/bookEvent",
        {
          name: "Mahith",
          email: user.email,
          theatreName: theatreName,
          movieName: movieName,
          seatNumbers: seatNumbersString,
        }
      );

      console.log("response success? ", response.data.success);
      console.log("booking response success? ", response.data.success);
      if (
        response.data.success === true &&
        bookingResponse.data.success === true
      ) {
        setIsBookingConfirmed(true);
      }
    } catch (error) {
      console.log("Movie data d " + error.message);
      setError(error.message);
    }
  };

  const goHome = () => {
    navigate("/home");
  };

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
      display="flex"
      marginTop="30px"
    >
      <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Complete Your Payment
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <strong>Movie:</strong>
          </Grid>
          <Grid item xs={6}>
            {movieName}
          </Grid>

          <Grid item xs={6}>
            <strong>Show Time:</strong>
          </Grid>
          <Grid item xs={6}>
            {timing}
          </Grid>
          <Grid item xs={6}>
            <strong>Theatre:</strong>
          </Grid>
          <Grid item xs={6}>
            {theatreName}
          </Grid>
          <Grid item xs={6}>
            <strong>Tickets:</strong>
          </Grid>
          <Grid item xs={6}>
            {totalSeats}
          </Grid>

          <Grid item xs={6}>
            <strong>Price per Ticket:</strong>
          </Grid>
          <Grid item xs={6}>
            ${paymentDetails.pricePerTicket}
          </Grid>

          <Grid item xs={6}>
            <strong>Reward points avaialable: </strong>
          </Grid>
          <Grid item xs={6}>
            25
          </Grid>

          <Grid item xs={6}>
            <Button variant="contained" color="primary" onClick={redeemPoints}>
              Redeem Points
            </Button>
          </Grid>

          <Grid item xs={12} style={{ marginTop: "15px" }}>
            <Typography variant="h6">
              <strong>Total Price:</strong> ${paymentDetails.totalPrice}
            </Typography>
          </Grid>

          {redeem && (
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h3
                style={{
                  padding: "20px",
                  display: "flex",
                  marginLeft: "150px",
                  justifyContent: "center",
                }}
              >
                {" "}
                Points Redeemed!!
              </h3>
            </div>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePayment}
            >
              Pay Now
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Dialog open={isBookingConfirmed}>
        <DialogTitle style={{ fontWeight: "bold", marginLeft: "50px" }}>
          Booking Confirmed!
        </DialogTitle>
        <DialogContent>
          Your ticket will be sent to your email shortly
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
}

export default PaymentScreen;
