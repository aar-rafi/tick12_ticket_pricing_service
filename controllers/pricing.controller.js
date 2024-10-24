import "dotenv/config.js";
import { pool } from "../database/pool.js";

// Get ticket price based on station IDs
const getTicketPriceByStationIDs = async (req, res) => {
  const { from_station_id, to_station_id } = req.body;

  try {
    // Validate the request payload
    if (!from_station_id || !to_station_id) {
      return res.status(400).send({ error: "Both from_station_id and to_station_id are required" });
    }

    // Query to get distance_index for both stations
    const getDistanceIndexQuery = `
      SELECT station_id, distance_index FROM stations 
      WHERE station_id = $1 OR station_id = $2;
    `;
    const result = await pool.query(getDistanceIndexQuery, [from_station_id, to_station_id]);

    if (result.rows.length !== 2) {
      return res.status(404).send({ error: "One or both stations not found" });
    }

    // Extract distance indices for the stations
    const fromStation = result.rows.find(row => row.station_id === from_station_id);
    const toStation = result.rows.find(row => row.station_id === to_station_id);

    const price = Math.abs(fromStation.distance_index - toStation.distance_index) * 100;

    // Return the calculated price
    return res.status(200).send({
      message: "Ticket price calculated successfully",
      price,
    });
  } catch (e) {
    console.error(e.message);
    return res.status(500).send({ error: "Failed to calculate ticket price. Please try again later." });
  }
};

export { getTicketPriceByStationIDs };