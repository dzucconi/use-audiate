const sheet = `
  @keyframes AudiateFade {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  .AudiateClick,
  .AudiateSound {
    user-select: none;
    font-size: 1rem;
    line-height: 1;
  }

  .AudiateClick {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
  }
    .AudiateClick > span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  .AudiateSound {
    position: fixed;
    top: 0.75em;
    left: 1em;
    animation: AudiateFade 3s;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  };
`;

const append = function(content) {
  const style = document.createElement("style");

  style.type = "text/css";
  style.innerHTML = content || sheet;

  return document.getElementsByTagName("head")[0].appendChild(style);
};

append.sheet = sheet;

module.exports = append;
