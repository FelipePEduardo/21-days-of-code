const switchButton = document.querySelector("#switchButton")
const darkMode = document.querySelector(".dark-mode")
const lightMode = document.querySelector(".light-mode")

switchButton.addEventListener("click", () => {
  document.body.classList.toggle("light")
  darkMode.classList.toggle("hide")
  lightMode.classList.toggle("hide")
})