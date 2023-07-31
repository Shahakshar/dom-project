const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((eachBtn) => {
  eachBtn.addEventListener('click', (event) => {
    let target = event.target;
    switch (target.id) {
      case 'grey':
        body.style.backgroundColor = target.id;
        break;
      case 'white':
        body.style.backgroundColor = target.id;
        body.style.color = 'black';
        break;
      case 'blue':
        body.style.backgroundColor = target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = target.id;
        break;
      case 'purple':
        body.style.backgroundColor = target.id;
        break;
    }
  });
});
