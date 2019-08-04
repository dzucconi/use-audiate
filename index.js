const is = require("./lib/is");
const render = require("./lib/render");
const stylesheet = require("./lib/stylesheet");

const DEFAULTS = {
  clickToEnable: true,
  message: null,
  onEnable: () => { throw new Error('option `onEnable` is missing')}
};

module.exports = function(_options = {}) {
  const options = { ...DEFAULTS, ..._options };

  stylesheet(options.stylesheet);

  const isTouch = is.touchDevice();

  const onEnable = () => {
    const indicator = render(`<div class="Audiate AudiateSound">🔊</div>`);
    document.body.appendChild(indicator);
    return options.onEnable();
  };

  if (options.clickToEnable || isTouch) {
    const message = options.message || `${isTouch ? "Tap" : "Click"} to enable audio`;
    const el = render(
      `<div class="Audiate AudiateClick"><span>${message}</span></div>`
    );

    el.addEventListener("click", function() {
      el.parentNode.removeChild(el);
      onEnable();
    });

    document.body.appendChild(el);

    return;
  }

  return onEnable();
};
