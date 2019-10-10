export const initAudioContext = () => {
  window.AudioContext = window.AudioContext || (<any>window).webkitAudioContext;
  return new AudioContext();
};
