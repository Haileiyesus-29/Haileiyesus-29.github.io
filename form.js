const contactForm = document.querySelector('form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const titleInput = document.querySelector('#title')
const messageInput = document.querySelector('#message')

const emailErrEl = document.querySelector('#errEmail')
const messageErrEl = document.querySelector('#messageErr')

const successEl = document.querySelector('#success')
const failedEl = document.querySelector('#failed')

let emailErr = false
let messageErr = false

const FORM_URL =
   'https://haileiyesus-server-b579e5370e03.herokuapp.com/api/inbox'

contactForm.addEventListener('submit', async e => {
   e.preventDefault()
   const isValid = validateForm()

   if (!isValid) return

   const formData = {
      name: nameInput.value?.trim(),
      email: emailInput.value?.trim(),
      title: titleInput.value?.trim(),
      message: messageInput.value?.trim(),
   }

   try {
      const res = await fetch(FORM_URL, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      })

      if (!res.ok) {
         throw new Error('Something went wrong')
      }
      contactForm.reset()
      successEl.classList.remove('hidden')
      setTimeout(() => {
         successEl.classList.add('hidden')
      }, 5000)
   } catch (error) {
      console.error(error)
      failedEl.classList.remove('hidden')
      setTimeout(() => {
         failedEl.classList.add('hidden')
      }, 5000)
   }
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

const validateForm = () => {
   let emailErr = false
   let messageErr = false

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

   if (!emailInput.value) {
      emailErrEl.textContent = 'Email address is required'
      emailErrEl.classList.remove('hidden')
      emailErr = true
   } else if (!emailRegex.test(emailInput.value)) {
      emailErrEl.textContent = 'Email address not valid'
      emailErrEl.classList.remove('hidden')
      emailErr = true
   } else {
      emailErrEl.classList.add('hidden')
      emailErr = false
   }

   if (!messageInput.value) {
      messageErrEl.textContent = 'Message must be filled'
      messageErrEl.classList.remove('hidden')
      messageErr = true
   } else {
      messageErrEl.classList.add('hidden')
      messageErr = false
   }

   return !emailErr && !messageErr
}
