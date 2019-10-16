import { render } from "./lib/render";
import { appendStylesheet, defaultStylesheet } from "./lib/stylesheet";
import { isTouchDevice } from "./lib/is";
import { check } from "./lib/check";

const TEMPLATES = {
  closed: "",
  suspended: `<div class="Audiate AudiateSound AudiateSound--suspended">🔇</div>`,
  running: `<div class="Audiate AudiateSound AudiateSound--running">🔊</div>`
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
}): void => {
  appendStylesheet(stylesheet);

  let initialState: AudioContextState;
  try {
    initialState = check();
  } catch (error) {
    console.error(error);
    // Silently return
    return;
  }

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
