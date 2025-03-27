import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
          <div style={{display: "flex", justifyContent: "space-around"}}>
              <button>Sign In</button>
              <button>Log In</button>
          </div>

          <h1>HOMEPAGE</h1>

      </div>
      
    </>
  )
}

export default App
