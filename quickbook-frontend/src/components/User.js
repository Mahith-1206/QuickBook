import React from "react";
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
} from "@mui/material";
import Button from "@mui/material/Button";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";

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
          {userData.pastTickets.map((ticket) => (
            <ListItem key={ticket.id} sx={{ display: "block", mb: 2 }}>
              <Card variant="outlined">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <CardContent>
                      <Typography variant="h6">{ticket.movieName}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Date: {ticket.date}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Theatre: {ticket.theatre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Seats: {ticket.noOfSeats}
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
                    <Button>View Ticket</Button>
                  </div>
                </div>
              </Card>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default User;
