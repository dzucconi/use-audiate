export const isTouchDevice = () =>
  "ontouchstart" in window || "onmsgesturechange" in window;
