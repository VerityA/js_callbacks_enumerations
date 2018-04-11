const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map( (journey) => {
    return journey.startLocation;
  });
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map( (journey) => {
    return journey.endLocation;
  });
  return endLocations;
};

Traveller.prototype.getModesOfTransport = function () {
  const transportModes = this.journeys.map( (journey) => {
    return journey.transport;
  });
  return transportModes;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeys = this.journeys.filter( (journey) => {
    return journey.transport === transport;
  });
  return journeys;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter( (journey) => {
    return journey.distance > minDistance;
  });
  return journeys;
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.journeys.map( (journey) => {
    return journey.distance;
  });

  const total = distances.reduce( (runningTotal, distance) => {
    return runningTotal + distance;
  });
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transports = this.getModesOfTransport();
  const uniqueTansports = transports.filter(function (journey, index) {
      return transports.indexOf(journey) == index;
  });
  return uniqueTansports;
};


module.exports = Traveller;
