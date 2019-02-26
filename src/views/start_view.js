const PubSub = require('../helpers/pub_sub.js');

const StartView = function() {

};

StartView.prototype.bindEvents = function () {
  const menu = document.querySelector('nav');
  menu.addEventListener('click', (evt) => {

    const planetName = evt.target.id;
//Delete after testing
    console.log("planetName", planetName);
    PubSub.publish('StartView:planet-chosen', planetName);

  });

};

module.exports = StartView;
