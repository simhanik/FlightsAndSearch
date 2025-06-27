const express = require('express')
const CityController = require('../../controllers/city-controller.js')
const FlightController = require('../../controllers/flight-controller.js')
const AirportController = require('../../controllers/airport-controller.js')

const{FlightMiddlewares} = require('../../middlewares/index.js')

const router =express.Router()

router.post('/city',CityController.create)
router.delete('/city/:id',CityController.destroy)
router.get('/city/:id',CityController.get)
router.get('/city',CityController.getAll)
router.patch('/city/:id',CityController.update)

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
)
router.get('/flights',FlightController.getAll)
router.get('/flights/:id',FlightController.get)
router.patch('/flights/:id',FlightController.update)

router.post('/airport',AirportController.create)

module.exports = router