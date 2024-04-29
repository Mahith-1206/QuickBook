import pool from "../config/mysqlConfig.js";

const getVenuesByEventId = async (eventId) => {
  try {
    const query = "SELECT * FROM EventVenues WHERE EventID = ?";
    const [rows] = await pool.query(query, [eventId]);
    return rows;
  } catch (error) {
    throw new Error(`Error while fetching venues: ${error.message}`);
  }
};

export { getVenuesByEventId };
