import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Navbar() {

  const { authenticateUser, isLoggedIn, userRole, nameUser } = useContext(AuthContext);
  const [isMenuActive, setIsMenuActive] = useState(false);
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

  const toggleClass = () => {
    setIsMenuActive(!isMenuActive)
  }

  console.log(nameUser)
  return (
    
    <div id="navbar">

      <img width={"105W"} height={"90vW"} src="logo_01.png" />
      {isLoggedIn === true
      ?
      <>
        <div id={isMenuActive ? "navbar-menu-show" : "navbar-menu-shadow"}>
          <Link to="/calendario"><button>Calendario</button></Link>
          {userRole === "entrenador" ?   
          <Link to="/match"><button>Crear Partidos</button></Link> 
          : null}   
          <Link to="/show-matches"><button>Partidos</button></Link>  
          <Link to="/show-players"><button>Jugadores</button></Link>
          <Link onClick={handleLogout}><button>Cerrar Sesión</button></Link>
          <div id="navBarProfile">
            <p>Hola {nameUser}</p>
            <Link to="/user/profile"><button>Mi Perfil</button></Link> 
          </div>
        </div>
        <div id="nav-toggle">
          <button onClick={toggleClass}><FiAlignJustify /></button>
          <button><MdClose /></button>
        </div>
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
