
const express = require("express");
const router = express.Router();
const slots  = require("../schema/slots")
router.get('/slots', async (req, res) => {
    
    const slotsList = await slots.find();
    console.log("slots", slots)
    res.send(slotsList)
})
module.exports = router