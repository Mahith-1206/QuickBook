import { getVenueSeatsByVenueId, bookSeats } from "../models/venueModel.js";

const getVenueSeatsController = async (req, res) => {
  try {
    const venueId = req.params.id;
    const venue = await getVenueSeatsByVenueId(venueId);
    if (venue) {
      res.status(200).json({ success: true, venue });
    } else {
      res.status(404).json({ success: false, error: "Venue not found" });
    }
  } catch (error) {
    console.error("Error getting Venue details:", error);
    res
      .status(500)
      .json({ success: false, error: "Could not fetch Venue details" });
  }
};

const bookSeatsController = async (req, res) => {
  try {
    const { booked, venueId, seats } = req.body;

    if (!venueId) {
      return res.status(400).json({ error: "Invalid request body" });
    }
    console.log(seats);

    await bookSeats(booked, venueId, seats);
    res.status(200).json({ success: true, message: "Ticket booked success" });
  } catch (error) {
    console.error("Error updating seat booking", error);
    res
      .status(500)
      .json({ success: false, error: "Could not update seat booking" });
  }
};

export { getVenueSeatsController, bookSeatsController };
