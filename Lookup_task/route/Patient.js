const express = require("express");
const router = express.Router();
const patient = require("../schema/patient");
router.get("/patient", async (req, res) => {
  const patientList = await patient.aggregate([
    {
      $lookup: {
        from: "doctors",
        localField: "id",
        foreignField: "id",
        as: "doc_pat",
      },
    },
    {
      $unwind: "$doc_pat",
    },
    {
      $lookup: {
        from: "slots",
        localField: "id",
        foreignField: "id",
        as: "doc_pat_slots",
      },
    },
    {
      $match: {
        address: "Yellow Garden 2",
      },
    },
  ]);
  res.send(patientList);
});

module.exports = router;
