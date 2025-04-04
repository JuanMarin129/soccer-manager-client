import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { FiAlignJustify } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from "../assets/logo_01.png"

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
            <img width={"105W"} height={"90vW"} src={logo} />
            <Link to="/calendario"><button className="btnNavBar" onClick={() => toggleClass()}>Calendario</button></Link>
            {userRole === "entrenador" ?   
            <Link to="/match"><button className="btnNavBar" onClick={() => toggleClass()}>Crear Partidos</button></Link> 
            : null}   
            <Link to="/show-matches"><button className="btnNavBar" onClick={() => toggleClass()}>Partidos</button></Link>  
            <Link to="/show-players"><button className="btnNavBar" onClick={() => toggleClass()}>Jugadores</button></Link>
            <Link onClick={handleLogout}><button className="btnRed" onClick={() => toggleClass()}>Cerrar Sesión</button></Link>
            <div id="navBarProfile">
              <p>Hola {nameUser}</p>
              <Link to="/user/profile"><button className="btnNavBar" onClick={() => toggleClass()}>Mi Perfil</button></Link> 
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
          <div id="navbar-logout"> 
            <img width={"105W"} height={"90vW"} src={logo} />
            <Link to="/signup"><button className="btnNavBar">Sign In</button></Link>
            <Link to="/login"><button className="btnNavBar">Log In</button></Link>
          </div>
      </>
      }    
    </div>
  

  )
}

export default Navbar
