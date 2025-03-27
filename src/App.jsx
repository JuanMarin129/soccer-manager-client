import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar />

         <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sigunp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
         </Routes>
      
    </>
  )
}

export default App
