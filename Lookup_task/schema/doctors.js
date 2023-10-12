const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema({
    id: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    address:{
        type:String,
        required:true
    }
})
const Doctor = mongoose.model('doctors', doctorSchema);
module.exports = Doctor