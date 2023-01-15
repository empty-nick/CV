function modal(action = true, src) {
  const modalDiv = document.querySelector('.modal')

  if (action) {
    modalDiv.innerHTML = `<div class='modal-div' onclick="modal(false)"><img src='${src}'></div>`
  } else{
    modalDiv.innerHTML = ''
  }
}
