export const isTouchDevice = (): boolean =>
  "ontouchstart" in window || "onmsgesturechange" in window;

export const isAudioContextSupported = (): boolean => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return !!(window.AudioContext || (window as any).webkitAudioContext);
};
