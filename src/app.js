const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const StartView = require('./views/start_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const startView = new StartView();
  startView.bindEvents();
});
