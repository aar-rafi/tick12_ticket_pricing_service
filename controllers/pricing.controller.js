import "dotenv/config.js";
import { pool } from "../database/pool.js";

// Get ticket price based on station names
const getTicketPriceByStationNames = async (req, res) => {
  const { from_station_name, to_station_name } = req.body;

  try {
    // Validate the request payload
    if (!from_station_name || !to_station_name) {
      return res.status(400).send({ error: "Both from_station_name and to_station_name are required" });
    }

    // Query to get distance_index for both stations based on station names
    const getDistanceIndexQuery = `
      SELECT station_name, distance_index FROM stations 
      WHERE station_name = $1 OR station_name = $2;
    `;
    const result = await pool.query(getDistanceIndexQuery, [from_station_name, to_station_name]);

    if (result.rows.length !== 2) {
      return res.status(404).send({ error: "One or both stations not found" });
    }

    // Extract distance indices for the stations
    const fromStation = result.rows.find(row => row.station_name === from_station_name);
    const toStation = result.rows.find(row => row.station_name === to_station_name);

    // Calculate the price based on the difference in distance indices
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

export { getTicketPriceByStationNames };