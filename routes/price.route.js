import express from "express";
import { getTicketPriceByStationIDs } from "../controllers/pricing.controller.js";
const router = express.Router();

router.post("/stationids", getTicketPriceByStationIDs);

export default router;
