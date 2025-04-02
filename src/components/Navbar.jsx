import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function Navbar() {

  const { authenticateUser, isLoggedIn, userRole, nameUser } = useContext(AuthContext);
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

  console.log(nameUser)
  return (
    
    <>
      {isLoggedIn === true
      ?
      <div style={{display:"flex", justifyContent:"end"}}>
      <p>Hola {nameUser}</p>
      <Link to="/user/profile"><button>Mi Perfil</button></Link> 
      </div>
      : null
      } 
  
      {isLoggedIn === true 
      ?
      <div id="navbar">
          
          <Link to="/calendario"><button>Calendario</button></Link>
          {userRole === "entrenador" ?   
          <Link to="/match"><button>Crear Partidos</button></Link> 
          : null}   
          <Link to="/show-matches"><button>Partidos</button></Link>  
          <Link to="/show-players"><button>Jugadores</button></Link>
          <Link onClick={handleLogout}><button>Cerrar Sesión</button></Link>
      </div>  
      :
        <div id="navbar">
            <Link to="/signup"><button>Sign In</button></Link>
            <Link to="/login"><button>Log In</button></Link>
        </div>       
      }    
    </>
  

  )
}

export default Navbar
