const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.post('/hotels', apiController.create);
router.get('/hotels', apiController.list);
router.get('/hotels/:_id', apiController.listById);

module.exports = router;
