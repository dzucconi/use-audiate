import { render } from "./lib/render";
import { appendStylesheet, defaultStylesheet } from "./lib/stylesheet";
import { isTouchDevice } from "./lib/is";

const TEMPLATES = {
  closed: "",
  suspended: `<div class="Audiate AudiateSound AudiateSound--suspended">🔇</div>`,
  running: `<div class="Audiate AudiateSound AudiateSound--running">🔊</div>`
};

const check = () => {
  const ctx = new AudioContext();
  const { state } = ctx;
  ctx.close();
  return state;
};

export const ambient = ({
  stylesheet = defaultStylesheet
}: {
  stylesheet?: string;
} = {}) => {
  appendStylesheet(stylesheet);

  const initialState = check();

  const indicator = render(TEMPLATES[initialState]);
  document.body.appendChild(indicator);

  // Audio is able to be played
  if (initialState === "running") {
    return;
  }

  let checkInterval: number;

  const unlock = () => {
    const unlockedState = check();

    if (unlockedState === "running") {
      indicator.innerHTML = TEMPLATES.running;
      document.removeEventListener("click", unlock);
      clearInterval(checkInterval);
    }
  };

  document.addEventListener("click", unlock);

  checkInterval = setInterval(() => {
    const checkedState = check();
    if (checkedState === "running") {
      indicator.innerHTML = TEMPLATES.running;
      clearInterval(checkInterval);
      document.removeEventListener("click", unlock);
    }
  }, 500);
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

  const initialState = check();

  const isTouch = isTouchDevice();

  const __onEnable__ = (): void => {
    const indicator = render(TEMPLATES.running);
    document.body.appendChild(indicator);
    return onEnable();
  };

  // Audio is able to be played
  if (initialState === "running") {
    __onEnable__();

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
