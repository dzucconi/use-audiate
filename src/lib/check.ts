import { initAudioContext } from "./initAudioContext";

export const check = (): AudioContextState => {
  const ctx = initAudioContext();
  const { state } = ctx;
  ctx.close();
  return state;
};
