const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        index: true
    },
    disease: {
        type: Boolean,
        required: true
    }
});
const patientModel = mongoose.model('patients', patientSchema);
module.exports = patientModel;
