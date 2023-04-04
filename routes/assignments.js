const express = require("express");
const Assignment = require("../models/Assignment");

const router = express.Router();
router.post("/add", async (req, res) => {
  const newAssignment = new Assignment(req.body);
  try {
    const savedAssignment = await newAssignment.save();
    res.status(200).json(savedAssignment);
  } catch (err) {
    console.log("following error occured while uploading the assignment");
    console.log(err);
    res.status(200).json(err);
  }
});

router.get("/getall", async (req, res) => {
  try {
    const allAssignments = await Assignment.find();
    res.status(200).json(allAssignments);
  } catch (err) {
    console.log("The following error occured while fetching the assignment");
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/filter/:subject", async (req, res) => {
  try {
    const filteredAssignments = await Assignment.find({
      subject: req.params.subject,
    });
    res.status(200).json(filteredAssignments);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/getone/:id", async (req, res) => {
  try {
    console.log("params", req.params);
    const ass = await Assignment.findById(req.params["id"]);
    res.status(200).json(ass);
  } catch (err) {
    console.log("error in getone", err);
    res.status(500).json(err);
  }
});

module.exports = router;
