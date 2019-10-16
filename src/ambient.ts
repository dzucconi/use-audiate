import { render } from "./lib/render";
import { appendStylesheet, defaultStylesheet } from "./lib/stylesheet";
import { check } from "./lib/check";

const TEMPLATES = {
  closed: "",
  suspended: `<div class="Audiate AudiateSound AudiateSound--suspended">🔇</div>`,
  running: `<div class="Audiate AudiateSound AudiateSound--running">🔊</div>`
};

export const ambient = ({
  stylesheet = defaultStylesheet
}: {
  stylesheet?: string;
} = {}): void => {
  appendStylesheet(stylesheet);

  let initialState: AudioContextState;
  try {
    initialState = check();
  } catch (error) {
    console.error(error);
    // Silently return
    return;
  }

  const indicator = render(TEMPLATES[initialState]);
  document.body.appendChild(indicator);

  // Audio is able to be played
  if (initialState === "running") {
    return;
  }

  let checkInterval: number;

  const unlock = (): void => {
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
