import { render } from "./lib/render";
import { appendStylesheet, defaultStylesheet } from "./lib/stylesheet";
import { isTouchDevice } from "./lib/is";

const TEMPLATES = {
  closed: "",
  suspended: `<div class="Audiate AudiateSound AudiateSound--suspended">🔇</div>`,
  running: `<div class="Audiate AudiateSound AudiateSound--running">🔊</div>`
};

export const ambient = ({
  stylesheet = defaultStylesheet
}: {
  stylesheet?: string;
} = {}) => {
  appendStylesheet(stylesheet);

  const initialAudioContext = new AudioContext();

  const indicator = render(TEMPLATES[initialAudioContext.state]);
  document.body.appendChild(indicator);

  if (initialAudioContext.state === "running") {
    return;
  }

  if (typeof initialAudioContext.close === "function") {
    initialAudioContext.close();
  }

  const unlock = () => {
    const unlockedAudioContext = new AudioContext();

    if (unlockedAudioContext.state === "running") {
      indicator.innerHTML = TEMPLATES.running;
      document.removeEventListener("click", unlock);
    }

    if (typeof unlockedAudioContext.close === "function") {
      unlockedAudioContext.close();
    }
  };

  document.addEventListener("click", unlock);
};

export const block = ({
  stylesheet = defaultStylesheet,
  onEnable,
  message = null,
  clickToEnable = true
}: {
  stylesheet?: string;
  onEnable(): void;
  message: null | string;
  clickToEnable: boolean;
}) => {
  appendStylesheet(stylesheet);

  const initialAudioContext = new AudioContext();

  const isTouch = isTouchDevice();

  const __onEnable__ = (): void => {
    const indicator = render(TEMPLATES.running);
    document.body.appendChild(indicator);
    return onEnable();
  };

  // Already running
  if (initialAudioContext.state === "running") {
    __onEnable__();

    if (typeof initialAudioContext.close === "function") {
      initialAudioContext.close();
    }

    return;
  }

  if (clickToEnable || isTouch) {
    const el = render(
      `<div class="Audiate AudiateClick"><span>${message ||
        `${isTouch ? "Tap" : "Click"} to enable audio`}</span></div>`
    );

    el.addEventListener("click", function() {
      el.parentNode && el.parentNode.removeChild(el);
      __onEnable__();
    });

    document.body.appendChild(el);

    return;
  }

  return onEnable();
};
