const button = document.querySelector('.button');
const password = document.querySelector('.password');
const copyPassword = document.querySelector('.copy-password');

const randomPassword = len => {
  let newPassword = ''
  do{
    newPassword = Math.random().toString(26).substring(2)
  } while (newPassword.length >= len) 
  newPassword = newPassword.substring(0, len)
  return newPassword
}

const handleCopyPassword = () => {
  navigator.clipboard.writeText(password.innerHTML).then(() => {
    alert('copiado')
  })
}

button.addEventListener('click', function() {
  password.classList.remove('hide')
  copyPassword.classList.remove('hide')
  password.innerHTML = randomPassword()
})

copyPassword.addEventListener('click', handleCopyPassword)