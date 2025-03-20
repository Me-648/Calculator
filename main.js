'use strict';

const result = document.getElementById('result');
const buttons = document.querySelectorAll('th');

function round(num) {
  return Math.floor(num * 100) / 100;
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    randomSounds();
    if(value === "=") {
      const evalResult = eval(result.value);
      result.value = round(evalResult);
    } else if(value === "C") {
      result.value = "";
    } else {
      if(value === "×") {
        result.value += "*";
      } else if(value === "÷") {
        result.value += "/";
      } else {
        result.value += value;
      }
    }
  });
});


// 効果音の処理
const sounds = ['sound/sound1.mp3', 'sound/sound2.mp3', 'sound/sound3.mp3', 'sound/sound4.mp3', 'sound/sound5.mp3', 'sound/sound6.mp3', 'sound/sound7.mp3', 'sound/sound8.mp3', 'sound/sound9.mp3', 'sound/sound10.mp3', ];

function randomSounds() {
  const index = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[index]);
  audio.play();
}