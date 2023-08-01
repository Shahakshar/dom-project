// generate random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  document.querySelector('#start').style.backdropFilter = `blur(${100}%)`;
};

let interval;
const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(randomColor, 1000);
  }
};

const endChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', endChangingColor);
