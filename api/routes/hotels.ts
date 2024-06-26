import express, { NextFunction } from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel";
import { verifyAdmin } from "../utils/verityToken";

const hotelsRouter: express.Router = express.Router();

// CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

// UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);

hotelsRouter.get("/countByCity", countByCity);
hotelsRouter.get("/countByType", countByType);

hotelsRouter.get("/room/:id", getHotelRooms);

// GET
hotelsRouter.get("/:id", getHotel);

// GET ALL
hotelsRouter.get("/", getHotels);

export default hotelsRouter;
