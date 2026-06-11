const mongoose = require('../db')

const BiodataSchema = new mongoose.Schema(
    {
        name : String,
        hobby : String,
        age : Number,
        game : String
    }
)

module.exports = mongoose.model(
    'Biodata',
    BiodataSchema
)