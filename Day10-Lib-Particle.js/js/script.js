const switchTheme = document.querySelector('#switch-theme')

switchTheme.addEventListener('click', () => {
  document.body.classList.toggle('switchTheme')
})