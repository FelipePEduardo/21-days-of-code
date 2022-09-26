const copyButton = document.querySelector('.copy-button')
const emojiArea = document.querySelector('.emoji-area')
let picker = new EmojiButton({
  position: 'right-start'
})

picker.on('emoji', function (emoji) {
  emojiArea.innerHTML += emoji;
})

emojiArea.addEventListener('click', function () {
  picker.pickerVisible ? picker.hidePicker() : picker.showPicker(emojiArea);
})

function copy() {
  if(!emojiArea.innerHTML) {
    alert('Escolha o emoji.')
    return
  } else {
    navigator.clipboard.writeText(emojiArea.innerHTML).then(() => {
      alert('copiado')
  
      emojiArea.innerHTML = ""
    })
  }
}

copyButton.addEventListener('click',copy )