import express from "express";
import { createListing } from "../controllers.js/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post('/create', verifyToken, createListing);

export default router;