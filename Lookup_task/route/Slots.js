
const express = require("express");
const router = express.Router();
const slots  = require("../schema/slots")
eouter.get('/slots', async (req, res) => {
  try {
    const slotsList = await slots.find();
    console.log("slotsList", slotsList);
    res.send(slotsList);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
module.exports = router
