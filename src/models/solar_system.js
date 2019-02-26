const PubSub = require('../helpers/pub_sub.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe('StartView:planet-chosen', (evt) => {
    const planetName = event.detail;
    this.chosenPlanet(planetName);
    // console.log(result);
    // PubSub.publish('SolarSystem:planet-chosen', result);
  });
};

SolarSystem.prototype.chosenPlanet = function (planetName) {
  let resultPlanet
  resultPlanet = this.planets.find( (planet) => {
    return planet.name === planetName;
  });
//DELETE AFTER TEST
  console.log(resultPlanet);
  PubSub.publish('SolarSystem:planet-object',resultPlanet);

};



module.exports = SolarSystem;
