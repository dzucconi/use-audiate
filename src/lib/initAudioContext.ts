export const initAudioContext = (): AudioContext => {
  window.AudioContext =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    window.AudioContext || (window as any).webkitAudioContext;
  return new AudioContext();
};
