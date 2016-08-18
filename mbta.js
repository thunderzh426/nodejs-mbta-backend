var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var http = require("http");
var https = require("https");

var apiKey = "wX9NwuHnZU2ToO7GmGR9uw";
var format = "json";
var parameters = "?api_key="+apiKey+"&format="+format;
var getAllRoutesURI = "/developer/api/v2/routes" + parameters;
var getRoutesByStopURI = "/developer/api/v2/routesbystop" + parameters;
var getStopsByRouteURI = "/developer/api/v2/stopsbyroute" + parameters;
var getStopsByLocationURI = "/developer/api/v2/stopsbylocation" + parameters;
var getScheduleByStopURI = "/developer/api/v2/schedulebystop"+ parameters;
var getScheduleByRouteURI = "/developer/api/v2/schedulebyroute"+ parameters;
var getScheduleByRoutesURI = "/developer/api/v2/schedulebyroutes"+ parameters;
var getScheduleByTripURI = "/developer/api/v2/schedulebytrip"+ parameters;
var getPredictionsByStopURI = "/developer/api/v2/predictionsbystop"+ parameters;
var getPredictionsByRoutesURI = "/developer/api/v2/predictionsbyroutes"+ parameters;
var getPredictionsByRouteURI = "/developer/api/v2/predictionsbyroute"+ parameters;
var getVehiclesByRouteURI = "/developer/api/v2/vehiclesbyroute"+ parameters;
var getVehiclesByRoutesURI = "/developer/api/v2/vehiclesbyroutes"+ parameters;
var getPredictionsByTripURI = "/developer/api/v2/predictionsbytrip"+ parameters;
var getVehiclesByTripURI = "/developer/api/v2/vehiclesbytrip"+ parameters;
var getAlertsURI = "/developer/api/v2/alerts"+ parameters;
var getAlertsByRouteURI = "/developer/api/v2/alertsbyroute"+ parameters;
var getAlertsByStopURI = "/developer/api/v2/alertsbystop"+ parameters;
var getAlertByIdURI = "/developer/api/v2/alertbyid"+ parameters;
var getServerTimeURI = "/developer/api/v2/servertime"+ parameters;

var host = "realtime.mbta.com";

function getAllRoutes(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(getAllRoutesURI), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getRoutesByStop(req, res, next) {
  if (req.query.stop == null){
    res.status(500).json({
      status: 'error',
      message: 'Stop id required!'
    })
    return;
  }
  var uri = getRoutesByStopURI + "&stop=" + encodeURIComponent(req.query.stop);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getStopsByRoute(req, res, next) {
  if (req.query.route == null){
    res.status(500).json({
      status: 'error',
      message: 'Route id required!'
    })
    return;
  }
  var uri = getStopsByRouteURI + "&route=" + encodeURIComponent(req.query.route);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getStopsByLocation(req, res, next) {
  if (req.query.lat == null || req.query.lon == null){
    res.status(500).json({
      status: 'error',
      message: 'Latitude and longitude required!'
    })
    return;
  }
  var uri = getStopsByLocationURI + "&lat=" + req.query.lat + "&lon=" + req.query.lon;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getScheduleByStop(req, res, next) {
  if (req.query.stop == null){
    res.status(500).json({
      status: 'error',
      message: 'Stop required!'
    });
    return;
  }
  var uri = getScheduleByStopURI + "&stop=" + encodeURIComponent(req.query.stop);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getScheduleByRoute(req, res, next) {
  if (req.query.route == null){
    res.status(500).json({
      status: 'error',
      message: 'Route required!'
    })
    return;
  }
  var uri = getScheduleByRouteURI + "&route=" + encodeURIComponent(req.query.route);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getScheduleByRoutes(req, res, next) {
  if (req.query.routes == null){
    res.status(500).json({
      status: 'error',
      message: 'Routes required!'
    })
    return;
  }
  var uri = getScheduleByRoutesURI + "&routes=" + encodeURIComponent(req.query.routes);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getScheduleByTrip(req, res, next) {
  if (req.query.trip == null){
    res.status(500).json({
      status: 'error',
      message: 'Trip required!'
    })
    return;
  }
  var uri = getScheduleByTripURI + "&trip=" + encodeURIComponent(req.query.trip);
  if (req.query.datetime != null){
    uri += "&datetime=" + req.query.datetime;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getPredictionsByStop(req, res, next) {
  if (req.query.stop == null){
    res.status(500).json({
      status: 'error',
      message: 'Stop required!'
    });
    return;
  }
  var uri = getPredictionsByStopURI + "&stop=" + encodeURIComponent(req.query.stop);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getPredictionsByRoutes(req, res, next) {
  if (req.query.routes == null){
    res.status(500).json({
      status: 'error',
      message: 'Routes required!'
    })
    return;
  }
  var uri = getPredictionsByRoutesURI + "&routes=" + encodeURIComponent(req.query.routes);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getPredictionsByRoute(req, res, next) {
  if (req.query.route == null){
    res.status(500).json({
      status: 'error',
      message: 'Route required!'
    })
    return;
  }
  var uri = getPredictionsByRouteURI + "&route=" + encodeURIComponent(req.query.route);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getVehiclesByRoute(req, res, next) {
  if (req.query.route == null){
    res.status(500).json({
      status: 'error',
      message: 'Route required!'
    })
    return;
  }
  var uri = getVehiclesByRouteURI + "&route=" + encodeURIComponent(req.query.route);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getVehiclesByRoutes(req, res, next) {
  if (req.query.routes == null){
    res.status(500).json({
      status: 'error',
      message: 'Routes required!'
    })
    return;
  }
  var uri = getVehiclesByRouteURI + "&routes=" + encodeURIComponent(req.query.routes);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getPredictionsByTrip(req, res, next) {
  if (req.query.trip == null){
    res.status(500).json({
      status: 'error',
      message: 'Trip required!'
    })
    return;
  }
  var uri = getPredictionsByTripURI + "&trip=" + encodeURIComponent(req.query.trip);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getVehiclesByTrip(req, res, next) {
  if (req.query.trip == null){
    res.status(500).json({
      status: 'error',
      message: 'Trip required!'
    })
    return;
  }
  var uri = getVehiclesByTripURI + "&trip=" + encodeURIComponent(req.query.trip);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getAlerts(req, res, next) {
  var uri = getAlertsURI;
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getAlertsByRoute(req, res, next) {
  if (req.query.route == null){
    res.status(500).json({
      status: 'error',
      message: 'Route required!'
    })
    return;
  }
  var uri = getAlertsByRouteURI + "&route=" + encodeURIComponent(req.query.route);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getAlertsByStop(req, res, next) {
  if (req.query.stop == null){
    res.status(500).json({
      status: 'error',
      message: 'Stop required!'
    })
    return;
  }
  var uri = getAlertsByStopURI + "&stop=" + encodeURIComponent(req.query.stop);
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getAlertById(req, res, next) {
  if (req.query.id == null){
    res.status(500).json({
      status: 'error',
      message: 'Id required!'
    })
    return;
  }
  var uri = getAlertByIdURI + "&id=" + req.query.id;
  if (req.query.include_access_alerts != null){
    uri += "&include_access_alerts=" + req.query.include_access_alerts;
  }
  if (req.query.include_service_alerts != null){
    uri += "&include_service_alerts=" + req.query.include_service_alerts;
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}

function getServerTime(req, res, next) {
  var uri = getServerTimeURI;
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  http.get(getOptions(uri), function(responseRoutes) {
    var responseBody = "";
    responseRoutes.on("data", function(chunk) {
      responseBody += chunk;
    });
    responseRoutes.on("end", function() {
        res.status(200)
          .json({
            status: 'success',
            data: JSON.parse(responseBody),
            message: 'Retrieved routes'
          });
    });
  });
}


function getOptions(uri){
  return {
    host: host,
    port: 80,
    path: uri,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
  };
}


module.exports = {
  getAllRoutes: getAllRoutes,
  getRoutesByStop: getRoutesByStop,
  getStopsByRoute: getStopsByRoute,
  getStopsByLocation: getStopsByLocation,
  getScheduleByStop: getScheduleByStop,
  getScheduleByRoute: getScheduleByRoute,
  getScheduleByRoutes: getScheduleByRoutes,
  getScheduleByTrip: getScheduleByTrip,
  getPredictionsByStop: getPredictionsByStop,
  getPredictionsByRoutes: getPredictionsByRoutes,
  getPredictionsByRoute: getPredictionsByRoute,
  getVehiclesByRoutes: getVehiclesByRoutes,
  getVehiclesByRoute: getVehiclesByRoute,
  getPredictionsByTrip: getPredictionsByTrip,
  getVehiclesByTrip: getVehiclesByTrip,
  getAlerts: getAlerts,
  getAlertsByRoute: getAlertsByRoute,
  getAlertsByStop: getAlertsByStop,
  getAlertById: getAlertById,
  getServerTime: getServerTime
};
