const pressKey = document.querySelector('.pressKey');

document.addEventListener('keydown', (e) => {
  pressKey.innerHTML = e.key.toUpperCase()
  if(e.key == ' ') {
    pressKey.innerHTML = 'SPACE BAR'
  }
});