/* const cardsProjects = document.querySelector('.cards-projects');

function getApiGithub() {
  fetch(`https://api.github.com/users/FelipePEduardo/repos`)
    .then( async res => {

      if(!res.ok) {
        throw new Error(res.status)
      }

      let data = await res.json()

      data.map(item => {
        let div = document.createElement('div');
        div.classList.add('card');  
      

        div.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <div class="buttons">
          <a href="FelipePEduardo.github.io/${item.name}" target="_blank">
            <button>View Live</button>
          </a>
          <a href="${item.html_url}" target="_blank">
            <button>Github Repo</button>
          </a>
        </div>
        `

        cardsProjects.appendChild(div)
      })

    }).catch(e => console.log(e))
}

getApiGithub() */

const lightTheme = document.querySelector('.light-theme')
const darkTheme = document.querySelector('.dark-theme')

const openSvg = document.querySelector('.open-svg')
const closeSvg = document.querySelector('.close-svg')
const openMenu = document.querySelector('.open-menu')

const menuItensMobile = document.querySelectorAll('.open-menu a')
const menuItensDesktop = document.querySelectorAll('.menu-desktop a')

/* SCROLL PAGE */
function scrollToSectionDesktop(e) {
  e.preventDefault()
  const target = e.target
  const id = target.getAttribute('href')
  const section = document.querySelector(id).offsetTop

  window.scroll({
    top: section - 300,
    behavior: 'smooth'
  })
}

function scrollToSectionMobile(e) {
  e.preventDefault()
  const target = e.target
  const id = target.getAttribute('href')
  const section = document.querySelector(id).offsetTop

  window.scroll({
    top: section - 200,
    behavior: 'smooth'
  })
}

menuItensDesktop.forEach(item => {
  item.addEventListener('click', scrollToSectionDesktop)
})

menuItensMobile.forEach(item => {
  item.addEventListener('click', scrollToSectionMobile)
})

/* CHANGE THEME */
function changeTheme() {
  lightTheme.classList.toggle('hide')
  darkTheme.classList.toggle('hide')
  document.body.classList.toggle('light')
}

lightTheme.addEventListener('click', changeTheme)
darkTheme.addEventListener('click', changeTheme)

/* MENU MOBILE */
function handleOpenMenu() {
  openSvg.classList.toggle('hide')
  closeSvg.classList.toggle('hide')
  openMenu.classList.add('hide')
}

function handleCloseMenu() {
  openSvg.classList.toggle('hide')
  closeSvg.classList.toggle('hide')
  openMenu.classList.remove('hide')
}

openSvg.addEventListener('click', handleCloseMenu)
closeSvg.addEventListener('click', handleOpenMenu)
