module.exports = {
  touchDevice: function() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
  },
};
