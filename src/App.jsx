import { Route, Routes } from 'react-router-dom'
import Container from './ui/Container'
import ProjectDetails from './pages/ProjectDetails'
import { useEffect, useState } from 'react'
import { themeContext } from './themeContext'

function App() {
   const [theme, setTheme] = useState(
      () => window.localStorage.getItem('theme') || 'light'
   )

   useEffect(() => {
      const html = document.documentElement
      if (theme === 'light') html.classList.replace('dark', 'light')
      else html.classList.replace('light', 'dark')
      window.localStorage.setItem('theme', theme)
   }, [theme])

   return (
      <themeContext.Provider value={{ theme, setTheme }}>
         <Routes>
            <Route path='/project/:projectId' element={<ProjectDetails />} />
            <Route path='*' element={<Container />} />
         </Routes>
      </themeContext.Provider>
   )
}

export default App
