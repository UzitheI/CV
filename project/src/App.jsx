import React from 'react'
import Header from './components/Header'
import Options from './components/Options'
import Intro from './components/Intro'
import About from './components/About'
import Education from './components/Education'
export default function App(){
  return(
    <div>
      <Header/>
      <Options/>
      <Intro/>
      <About/>
      <Education/>
    </div>
  )
}