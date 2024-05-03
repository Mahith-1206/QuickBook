import pool from "../config/mysqlConfig.js";

const getVenuesByEventId = async (eventId) => {
  try {
    const query = `SELECT Venues.venue_id, Venues.venue_name, EventVenues.TicketPrice, EventVenues.EventTimings FROM EventVenues
    INNER JOIN Venues ON EventVenues.VenueID = Venues.venue_id
    WHERE EventVenues.EventID = ?`;
    const [rows] = await pool.query(query, [eventId]);
    return rows;
  } catch (error) {
    throw new Error(`Error while fetching venues: ${error.message}`);
  }
};

export { getVenuesByEventId };
