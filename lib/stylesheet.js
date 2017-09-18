var sheet = '' +
  '@keyframes AudiateFade {' +
  '  0% {' +
  '    opacity: 1;' +
  '  }' +
  '  100% {' +
  '    opacity: 0;' +
  '  }' +
  '}' +
  '' +
  '.AudiateTouch {' +
  '  position: fixed;' +
  '  top: 0;' +
  '  right: 0;' +
  '  bottom: 0;' +
  '  left: 0;' +
  '  background-color: black;' +
  '}' +
  '  .AudiateTouch > span {' +
  '    display: block;' +
  '    position: absolute;' +
  '    top: 50%;' +
  '    left: 50%;' +
  '    transform: translate(-50%, -50%);' +
  '    cursor: pointer;' +
  '  }' +
  '' +
  '.AudiateSound {' +
  '  position: fixed;' +
  '  top: 1em;' +
  '  left: 1em;' +
  '  font-size: 50px;' +
  '  animation: AudiateFade 3s;' +
  '  animation-delay: 1s;' +
  '  animation-iteration-count: 1;' +
  '  animation-fill-mode: forwards;' +
  '}';

var append = function(content) {
  var style = document.createElement('style');

  style.type = 'text/css';
  style.innerHTML = content || sheet;

  return document.getElementsByTagName('head')[0].appendChild(style);
};

append.sheet = sheet;

module.exports = append;
