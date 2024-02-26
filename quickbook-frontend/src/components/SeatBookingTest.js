import "../styles/bookticket.css";
import React from "react";
import { useState, useRef } from "react";
import Image1 from "../images/Screen/screen.png";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
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
export default function SeatBookingTest(props) {
  const ref = useRef(null);
  console.log(ref);
  const [count, setCount] = useState(0);
  const [Price, setPrice] = useState(0);
  function changecolor(e) {
    if (e.target.className !== "row") {
      if (e.target.style.background !== "green") {
        e.target.style.background = "green";
        setCount(count + 1);
        setPrice(Price + 15);
      } else {
        e.target.style.background = " #01163E";
        setCount(count - 1);
        setPrice(Price - 15);
      }
    }
  }
  const navigate = useNavigate();
  let tl = gsap.timeline({ ease: "power1.in" });
  let clicked = false;

  function buttonanimation(e2) {
    navigate("/payment");
    if (clicked === false && count !== 0) {
      clicked = true;
      e2.target.innerText = "";
      tl.to("#button", { width: "50px", duration: 0.5 });
      tl.to(ref, { y: "0%", duration: 0.5 });
      console.log(e2);
    }
    let data = {
      MovieName: props.name,
      Price: Price,
      "count ": count,
    };
    let fetchoption = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(
      `https://book-my-show-back-end.onrender.com/booking${props.name}`,
      fetchoption
    );
  }

  return (
    <body1 className="body1">
      <ul className="showcase">
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
      </ul>

      <div className="container">
        <div className="movie-screen">
          <img src={Image1} alt="screen" />
        </div>

        <div className="row-container">
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
          </div>
          <div onClick={changecolor} className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat "></div>
            <div className="seat"></div>
          </div>
          <h5 className="subtitle"> Ticket price: 15$</h5>

          <div className="text-wrapper">
            <p className="text">
              Selected Seats <span id="count">{count}</span>
            </p>
            <p className="text">
              Total Price $<span id="total">{Price}</span>
            </p>
            <body2>
              {" "}
              <div onClick={buttonanimation} id="button">
                <span id="text">Book</span>
                <span ref={ref} id="w">
                  ✓
                </span>
              </div>
            </body2>
          </div>
        </div>
      </div>
    </body1>
  );
}
