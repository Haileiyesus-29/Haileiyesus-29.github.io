const toggle = document.querySelector('#toggle')

// Check for saved 'darkMode' in localStorage
localTheme = localStorage.getItem('theme')
   ? localStorage.getItem('theme')
   : 'light'
if (localTheme === 'dark') {
   document.documentElement.classList.replace('light', 'dark')
   toggle.checked = true
} else {
   document.documentElement.classList.replace('dark', 'light')
   toggle.checked = false
}

// Switch theme
toggle.addEventListener('change', e => {
   if (e.target.checked) {
      document.documentElement.classList.replace('light', 'dark')
      localStorage.setItem('theme', 'dark')
   } else {
      document.documentElement.classList.replace('dark', 'light')
      localStorage.setItem('theme', 'light')
   }
})
