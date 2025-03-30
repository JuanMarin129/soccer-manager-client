import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import Calendario from './pages/Calendario'
import OnlyPrivate from './components/OnlyPrivate'
import AddMatchCard from './pages/AddMatchCard'

function App() {

  return (
    <>
        <Navbar />

         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/match" element={<OnlyPrivate> <AddMatchCard /> </OnlyPrivate>}  />
            <Route path="/calendario" element={<OnlyPrivate> <Calendario /> </OnlyPrivate>} />
         </Routes>
      
    </>
  )
}

export default App
