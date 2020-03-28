const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SpotSchema = new Schema({
    thumbnail: String,
    empresa: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Spot', SpotSchema)