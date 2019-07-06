const { Howl } = require("howler");

const sine = require("./sine.mp3");
const audiate = require("../index.js");

const init = () => {
  audiate({
    onEnable: () => {
      document.getElementById("root").innerHTML = "playing sound...";

      const sound = new Howl({
        src: [sine]
      });

      sound.play();
    }
  });
};

document.addEventListener("DOMContentLoaded", init);
