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
import ShowMatches from './pages/ShowMatches'
import EditMatch from './pages/EditMatch'
import MatchDetails from './pages/MatchDetails'

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
            <Route path="/show-matches" element={<OnlyPrivate> <ShowMatches /> </OnlyPrivate>} />
            <Route path="/match-details/:matchID" element={<OnlyPrivate> <MatchDetails /> </OnlyPrivate>} />
            <Route path="/edit-match/:matchID" element={<OnlyPrivate> <EditMatch /> </OnlyPrivate>} />
         </Routes>
      
    </>
  )
}

export default App
