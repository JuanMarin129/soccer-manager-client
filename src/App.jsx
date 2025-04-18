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
import OnlyAdmin from './components/OnlyAdmin'
import AddMatchCard from './pages/AddMatchCard'
import ShowMatches from './pages/ShowMatches'
import EditMatch from './pages/EditMatch'
import MatchDetails from './pages/MatchDetails'
import ShowComments from './pages/ShowComments'
import AddComment from './pages/AddComment'
import EditComment from './pages/EditComment'
import ShowPlayers from './pages/ShowPlayers'
import UserDetails from './pages/UserDetails'
import EditUser from './pages/EditUser'
import UserProfile from './pages/UserProfile'
import EditProfile from './pages/EditProfile'

function App() {

  return (
    <>
        <Navbar />

         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/match" element={<OnlyAdmin> <AddMatchCard /> </OnlyAdmin>}  />
            <Route path="/calendario" element={<OnlyPrivate> <Calendario /> </OnlyPrivate>} />
            <Route path="/show-matches" element={<OnlyPrivate> <ShowMatches /> </OnlyPrivate>} />
            <Route path="/match-details/:matchID" element={<OnlyPrivate> <MatchDetails /> </OnlyPrivate>} />
            <Route path="/edit-match/:matchID" element={<OnlyAdmin> <EditMatch /> </OnlyAdmin>} />
            <Route path="/show-comments/:matchID" element={<OnlyPrivate> <ShowComments /> </OnlyPrivate>} />
            <Route path="/add-comment/:matchID" element={<OnlyPrivate> <AddComment /> </OnlyPrivate>} />
            <Route path="/edit-comment/:commentID" element={<OnlyPrivate> <EditComment />  </OnlyPrivate>} />
            <Route path="/show-players" element={<OnlyPrivate> <ShowPlayers /> </OnlyPrivate>} />
            <Route path="/user-details/:userID" element={<OnlyAdmin> <UserDetails />  </OnlyAdmin>} />
            <Route path="/user-edit/:userID" element={<OnlyPrivate> <EditUser /> </OnlyPrivate>} />
            <Route path="/user/profile" element={<OnlyPrivate> <UserProfile /> </OnlyPrivate>} />
            <Route path="/user/edit-profile" element={<OnlyPrivate> <EditProfile /> </OnlyPrivate>} />
         </Routes>
      
    </>
  )
}

export default App
