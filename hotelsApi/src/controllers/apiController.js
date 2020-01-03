const controller = {};
var Hotel = require('../models/hotel.js');


//GET ALL
controller.list = (req, res) => {
    let query = {};
    if (req.query.name) {
        term = new RegExp(req.query.name, 'i');
        query.name = term;
    }

    if (req.query.city) {
        term = new RegExp(req.query.city, 'i');
        query.city = term;
    }

    if (req.query.stars) {
        var array = JSON.parse("[" + req.query.stars + "]");
        query.stars = array;
    }
    // Find in database
    Hotel.find(query ,function(err, hotels) {
        if (err)
            return res.send(data);
        res.json(hotels);
    });
};

//GET by id
controller.listById = (req, res) => {
    console.log(req.params)
    var query = { _id: req.params._id };
    Hotel.findOne(query, function(err, hotel) {
        if (err)
            return res.send(err);
        if (!hotel)
            return res.send({ message: 'No se encontraron datos.' });
        res.json(hotel);
    });
};

controller.create = (req, res) => {
    const hotel = new Hotel({
        id : req.body.id,
        name : req.body.name,
        stars : req.body.stars,
        price : req.body.price,
        images : req.body.images
    });
    hotel.save()
    .then( data => {
        res.json(data);
    })
    .catch( err => {
        res.json({message: err})
    })
};



module.exports = controller;
