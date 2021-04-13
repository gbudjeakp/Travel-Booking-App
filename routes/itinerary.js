/** @format */

const express = require("express");
const router = express.Router();
const Itinerary = require("../models/Itinerary");

const ObjectId = require("mongodb").ObjectID;

router.get("/itinerary/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Itinerary.find({ user: ObjectId(id) });
    if (data) {
      res.status(200).json({ status: "Success", data: data });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    throw error;
  }
});

module.exports = router;
