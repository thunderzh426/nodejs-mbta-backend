var express = require('express');
var router = express.Router();

var db = require('../queries');
var mbta = require('../mbta');
var ts = require('../backend/userQueries');

router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
router.options('/api/*', db.handleOptionsRequest);

//MBTA APIs
router.get('/api/mbta/routes', mbta.getAllRoutes);                              //http://localhost:3000/api/mbta/routes
router.get('/api/mbta/routesbystop', mbta.getRoutesByStop);                     //http://localhost:3000/api/mbta/routesbystop?stop=Back%20Bay
router.get('/api/mbta/stopsbyroute', mbta.getStopsByRoute);                     //http://localhost:3000/api/mbta/stopsbyroute?route=Red
router.get('/api/mbta/stopsbylocation', mbta.getStopsByLocation);               //http://localhost:3000/api/mbta/stopsbylocation?lat=42.352913&lon=-71.064648
router.get('/api/mbta/schedulebystop', mbta.getScheduleByStop);                 //http://localhost:3000/api/mbta/schedulebystop?stop=Back%20Bay
router.get('/api/mbta/schedulebyroute', mbta.getScheduleByRoute);               //http://localhost:3000/api/mbta/schedulebyroute?route=Orange
router.get('/api/mbta/schedulebyroutes', mbta.getScheduleByRoutes);             //http://localhost:3000/api/mbta/schedulebyroutes?routes=Orange,Red
router.get('/api/mbta/schedulebytrip', mbta.getScheduleByTrip);                 //http://localhost:3000/api/mbta/schedulebytrip?trip=CR-Providence-CR-Weekday-807
router.get('/api/mbta/predictionsbystop', mbta.getPredictionsByStop);           //http://localhost:3000/api/mbta/predictionsbystop?stop=Back%20Bay
router.get('/api/mbta/predictionsbyroutes', mbta.getPredictionsByRoutes);       //http://localhost:3000/api/mbta/predictionsbyroutes?routes=Red,Orange
router.get('/api/mbta/predictionsbyroute', mbta.getPredictionsByRoute);         //http://localhost:3000/api/mbta/predictionsbyroutes?route=Red
router.get('/api/mbta/vehiclesbyroutes', mbta.getVehiclesByRoutes);             //http://localhost:3000/api/mbta/vehiclesbyroutes?routes=Red,Orange
router.get('/api/mbta/vehiclesbyroute', mbta.getVehiclesByRoute);               //http://localhost:3000/api/mbta/vehiclesbyroute?route=Red
router.get('/api/mbta/predictionsbytrip', mbta.getPredictionsByTrip);           //http://localhost:3000/api/mbta/predictionsbytrip?trip=CR-Providence-CR-Weekday-807
router.get('/api/mbta/vehiclesbytrip', mbta.getVehiclesByTrip);                 //http://localhost:3000/api/mbta/vehiclesbytrip?trip=CR-Providence-CR-Weekday-807
router.get('/api/mbta/alerts', mbta.getAlerts);                                 //http://localhost:3000/api/mbta/alerts
router.get('/api/mbta/alertsbyroute', mbta.getAlertsByRoute);                   //http://localhost:3000/api/mbta/alertsbyroute?route=Red
router.get('/api/mbta/alertsbystop', mbta.getAlertsByStop);                     //http://localhost:3000/api/mbta/alertsbystop?stop=Back%20Bay
router.get('/api/mbta/alertsbyid', mbta.getAlertById);                          //http://localhost:3000/api/mbta/alertsbyid?id=116064
router.get('/api/mbta/servertime', mbta.getServerTime);                         //http://localhost:3000/api/mbta/servertime

//TimeSheet APIs
router.post('/api/timesheet/users', ts.saveUser);
router.get('/api/timesheet/users', ts.getUsers);
router.get('/api/timesheet/user', ts.getUser);

module.exports = router;
