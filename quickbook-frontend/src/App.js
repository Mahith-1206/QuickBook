import { blue } from "@mui/material/colors";
import "./App.css";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navigation from "./components/Navigation";
import MovieCarousal from "./components/MovieCarousal";
import SelectMovieScreen from "./components/SelectMovieScreen";
import SeatBooking from "./components/SeatBooking";
import { Routes, Route } from "react-router-dom";
import SeatBookingTest from "./components/SeatBookingTest";
import PaymentScreen from "./components/PaymentScreen";
import Movies from "./components/Movies";
import User from "./components/User";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111111",
    },
    secondary: {
      main: "#19857b",
    },
  },
});

function App() {
  return (
    // <ThemeProvider theme={theme}>

    <Routes>
      <Route
        path="/"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header /> <Navigation /> <MovieCarousal />
            </ThemeProvider>
          </>
        }
      />
      <Route
        path="/movie"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header /> <Navigation /> <SelectMovieScreen />
            </ThemeProvider>
          </>
        }
      />
      <Route
        path="/bookseat"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header /> <Navigation />
              <SeatBookingTest />
            </ThemeProvider>
          </>
        }
      />
      <Route
        path="/payment"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header /> <PaymentScreen />
            </ThemeProvider>
          </>
        }
      />
      <Route
        path="/home"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header />
              <Navigation /> <MovieCarousal />
            </ThemeProvider>
          </>
        }
      />
      <Route
        path="/movies"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header />
              <Navigation /> <Movies />
            </ThemeProvider>
          </>
        }
      />
      <Route
        path="/user"
        element={
          <>
            <ThemeProvider theme={theme}>
              <Header />
              <User />
            </ThemeProvider>
          </>
        }
      />
    </Routes>
  );
}

export default App;
