import express from "express";
import { getTicketPriceByStationNames } from "../controllers/pricing.controller";
const router = express.Router();

router.post("/stationnames", getTicketPriceByStationNames);

export default router;
