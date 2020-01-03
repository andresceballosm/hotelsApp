var mongoose = require('mongoose');

var HotelSchema = mongoose.Schema({
    id: String,
    name: String,
    stars: Number,
    images: Array,
    city: String,
    lat: Number,
    lng: Number,
    price: Number,
});

module.exports = mongoose.model('Hotel', HotelSchema);
