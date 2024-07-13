const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: {
        type: String,
        required: true // corrected 'true' instead of 'trusted'
    },
    tech: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Course', CourseSchema);
