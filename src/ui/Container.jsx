/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NavBar from '../components/NavBar'
import About from '../pages/About'
import Services from '../pages/Services'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'
import Hero from '../pages/Hero'
import Logo from '../components/Logo'
import ThemeIcon from './ThemeIcon'

function Container() {
   return (
      <div className='relative mx-auto py-4 max-w-[1400px] h-svh overflow-hidden overflow-y-auto'>
         {/* <NavBar /> */}
         <Logo />
         <ThemeIcon />
         <Hero />
         <About />
         <Skills />
         <Projects />
         <Services />
         <Contact />
      </div>
   )
}

export default Container
