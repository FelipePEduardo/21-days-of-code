function showMenu() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = "./assets/menu-buguer-open.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = "./assets/menu-buguer-close.svg";
  }
}