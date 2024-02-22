import React, { useState } from "react";
import "../styles/bookseat.css";
import Image1 from "../images/Screen/screen.png";
function SeatBooking() {
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);

  const columns = 20;
  const rows = 9;

  const grid = Array.from({ length: rows }).map((_, rowIndex) => (
    <div key={rowIndex} style={{ display: "flex" }}>
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <div key={columnIndex} className="seat"></div>
      ))}
    </div>
  ));

  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + 150);
      } else {
        e.target.style.background = " #01163E";
        setCount(count - 1);
        setPrice(Price - 150);
      }
    }
  }

  return (
    <div style={{ backgroundColor: "black", marginTop: "35px" }}>
      <div>
        <ul className="showcase">
          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>
          <li>
            <div className="seat occupied"></div>
            <small>Occupied</small>
          </li>
        </ul>
        <div className="movie-screen">
          <img src={Image1} alt="screen" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>{grid}</div>
        </div>
      </div>
    </div>
  );
}

export default SeatBooking;
