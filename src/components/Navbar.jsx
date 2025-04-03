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
      {isLoggedIn === true
      ?
      <>
        <div id={isMenuActive ? "navbar-menu-show" : "navbar-menu-shadow"}>
          <div id="navbar-menu-elements">
            <img width={"105W"} height={"90vW"} src="logo_01.png" />
            <Link to="/calendario"><button onClick={() => toggleClass()}>Calendario</button></Link>
            {userRole === "entrenador" ?   
            <Link to="/match"><button onClick={() => toggleClass()}>Crear Partidos</button></Link> 
            : null}   
            <Link to="/show-matches"><button onClick={() => toggleClass()}>Partidos</button></Link>  
            <Link to="/show-players"><button onClick={() => toggleClass()}>Jugadores</button></Link>
            <Link onClick={handleLogout}><button onClick={() => toggleClass()}>Cerrar Sesión</button></Link>
            <div id="navBarProfile">
              <p>Hola {nameUser}</p>
              <Link to="/user/profile"><button onClick={() => toggleClass()}>Mi Perfil</button></Link> 
            </div>
          </div>
        </div>
        <div id="nav-toggle">
          <button id={isMenuActive ? "btn-burguer-shadow" : "btn-burguer-active"} onClick={() => toggleClass()}> <FiAlignJustify /> 
          </button>
          <button id={isMenuActive ? "btn-close-active" : "btn-close-shadow"} onClick={() => toggleClass()}><MdClose /></button>
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
