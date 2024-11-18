import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from './AppLayout'
import Home from './pages/Home'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import Locations from './pages/Locations'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<AppLayout />}>
    <Route index element={<Home />} />
    <Route path='/crew' element={<Crew />} />
    <Route path='/destination' element={<Locations />} />
    <Route path='/technology' element={<Technology />} />
    </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
