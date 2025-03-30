import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function Navbar() {

  const { authenticateUser, isLoggedIn, userRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {

    try {
      // Removemos el Token
      localStorage.removeItem("authToken")

      // Removemos los Estados del Contexto
      await authenticateUser() // Esto siempre fallará al no existir el Token

      navigate("/login")
      
    } catch (error) {
      console.log(error)
    }

  }

  console.log(userRole);
  return (
    
    <div id="navbar">
        {isLoggedIn === true 
        ?
          <>
            <button>Calendario</button>
            {userRole === "entrenador" ?   
            <button>Crear Partidos</button>
            : null}   
            <button>Partidos</button>   
            <button>Jugadores</button>
            <Link onClick={handleLogout}><button>Cerrar Sesión</button></Link>
          </>  
        :
          <>   
             <Link to="/signup"><button>Sign In</button></Link>
             <Link to="/login"><button>Log In</button></Link>
          </>     
        }    
               
    </div>

  )
}

export default Navbar
