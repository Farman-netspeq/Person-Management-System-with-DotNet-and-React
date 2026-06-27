import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Person from './components/person/Person.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/person'element={<Person/>}/>
      <Route path='*'element={<NotFound/>}/>
    </Routes>
    </>
  )
}

export default App
