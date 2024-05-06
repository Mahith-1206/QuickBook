import pool from "../config/mysqlConfig.js";

const getBookingsByUserId = async (userId) => {
  try {
    const query = `SELECT Venues.venue_name, Events.EventName, UserBookings.*
      FROM quickbook.UserBookings
      JOIN Venues ON UserBookings.VenueID = Venues.venue_id
      JOIN Events ON UserBookings.EventID = Events.EventID
      WHERE UserBookings.username = ?`;
    const [rows] = await pool.query(query, [userId]);
    return rows;
  } catch (error) {
    throw new Error(`Error while fetching venues: ${error.message}`);
  }
};

export { getBookingsByUserId };
