const mongoose = require("mongoose");
const slotsSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});
const slots = mongoose.model('todos', slotsSchema);
module.exports = slots