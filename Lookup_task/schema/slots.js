const mongoose = require("mongoose");

const slotsSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    }
})
const slots = mongoose.model('slots', slotsSchema);
module.exports = slots