const PubSub = {
  publish: function (channel, payload) {
    const event = new CustomEvent(channel, {
      detail: payload
    });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventlistener(channel, callback);
  }
};
module.exports = PubSub;
