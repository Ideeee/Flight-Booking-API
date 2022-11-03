const express = require('express');
const router = express.Router();
const controller = require('../controllers/flightController');

router.post("/flights/create", controller.createFlight);

router.get("/flights", controller.allFlights);

router.get('/flights/:id', controller.oneFlight);
  
router.patch("/flights/:id", controller.updateFlight);
  
router.delete("/flights/:id", controller.deleteFlight);

module.exports = router;

