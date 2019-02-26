const PubSub = require('../helpers/pub_sub.js');

const StartView = function() {

};

StartView.prototype.bindEvents = function () {
  const menu = document.querySelector('nav');
  menu.addEventListener('click', (evt) => {

    const planetDetails = evt.target.id;
//Delete after testing
    console.log("planetDetails", planetDetails);

  });

};

module.exports = StartView;
