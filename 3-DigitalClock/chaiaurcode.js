const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  let text = document.createTextNode(`${date.toLocaleTimeString()}`);
  clock.replaceChildren(text);
}, 1000);
