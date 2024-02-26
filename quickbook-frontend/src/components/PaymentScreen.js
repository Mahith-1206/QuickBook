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
import { useNavigate } from "react-router-dom";

function PaymentScreen() {
  const [redeem, setRedeem] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const navigate = useNavigate();

  const [paymentDetails, setPaymentDetails] = useState({
    movieName: "Dune: Part two",
    showTime: "7:00 PM",
    tickets: 2,
    pricePerTicket: 12.99,
    totalPrice: 25.98,
    theatre: "AMC Empire 25",
  });

  // Mock data for demonstration
  //   const paymentDetails = {
  //     movieName: "Interstellar",
  //     showTime: "7:00 PM",
  //     tickets: 2,
  //     pricePerTicket: 12.99,
  //     totalPrice: 25.98,
  //     theatre: "AMC Empire 25",
  //   };

  const redeemPoints = () => {
    if (!redeem && paymentDetails.totalPrice > 0) {
      let updatedTotalPrice = Math.max(paymentDetails.totalPrice - 25, 0); // Ensure total price doesn't go below 0

      updatedTotalPrice = +updatedTotalPrice.toFixed(2);
      setPaymentDetails({ ...paymentDetails, totalPrice: updatedTotalPrice });
      setRedeem(true);
    }
  };

  const handlePayment = () => {
    console.log("Processing payment...");
    setIsBookingConfirmed(true);
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
            {paymentDetails.movieName}
          </Grid>

          <Grid item xs={6}>
            <strong>Show Time:</strong>
          </Grid>
          <Grid item xs={6}>
            {paymentDetails.showTime}
          </Grid>
          <Grid item xs={6}>
            <strong>Theatre:</strong>
          </Grid>
          <Grid item xs={6}>
            {paymentDetails.theatre}
          </Grid>
          <Grid item xs={6}>
            <strong>Tickets:</strong>
          </Grid>
          <Grid item xs={6}>
            {paymentDetails.tickets}
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
