var is = require('./lib/is');
var render = require('./lib/render');
var stylesheet = require('./lib/stylesheet');

module.exports = function(fn) {
  stylesheet();

  if (is.touchDevice()) {
    var el = render('<div class="Audiate AudiateTouch"><span>🔊</span></div>');

    el.addEventListener('click', function() {
      el.parentNode.removeChild(el);
      fn();
    });

    document.body.appendChild(el);

    return;
  }

  fn();

  var indicator = render('<div class="Audiate AudiateSound">🔊</div>');
  document.body.appendChild(indicator);
};
