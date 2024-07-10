const contactForm = document.querySelector('#contact_form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const titleInput = document.querySelector('#title')
const messageInput = document.querySelector('#message')

const emailErrEl = document.querySelector('#errEmail')
const messageErrEl = document.querySelector('#messageErr')

const emailErr = false
const messageErr = false

contactForm.addEventListener('submit', e => {
   e.preventDefault()
   const nameValue = nameInput.value
   const emailvalue = emailInput.value
   const titleValue = titleInput.value
   const messageValue = messageInput.value
})

emailInput.addEventListener('focus', e => {
   emailInput.addEventListener('input', emailHandler)
})
emailInput.addEventListener('blur', e => {
   emailInput.removeEventListener('input', emailHandler)
})
messageInput.addEventListener('focus', e => {
   messageInput.addEventListener('input', messageHanlder)
})
messageInput.addEventListener('blur', e => {
   messageInput.removeEventListener('input', messageHanlder)
})

function emailHandler(e) {
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

   if (!e.target.value) {
      emailErrEl.textContent = 'Email address is required'
      emailErrEl.classList.remove('hidden')
      emailErr = true
   } else if (!emailRegex.test(e.target.value)) {
      emailErrEl.textContent = 'Email address not valid'
      emailErrEl.classList.remove('hidden')
      emailErr = true
   } else {
      emailErrEl.classList.add('hidden')
      emailErr = false
   }
}

function messageHanlder(e) {
   if (!e.target.value) {
      messageErrEl.textContent = 'Message must be filled'
      messageErrEl.classList.remove('hidden')
      messageErr = true
   } else {
      messageErrEl.classList.add('hidden')
      messageErr = false
   }
}
