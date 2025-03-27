import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Signup() {

    // ESTADOS
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    // Funciones Handle

    const handleNombre = (e) => setNombre(e.target.value);
    const handleApellidos = (e) => setApellidos(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleSignup = async (e) => {
      e.preventDefault();

      // ... Intentamos contactar con el Back End para registrar al usuario
      try {

        //console.log("Usuario registrado")

        await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/signup`, {
          nombre: nombre,
          apellidos: apellidos,
          email: email,
          password: password
        })

        navigate("/login")
        
      } catch (error) {
        console.log(error)
        if(error.response && error.response.status === 400) {
          console.log(error.response.status)
          console.log(error.response.data.errorMessage)
          setErrorMessage(error.response.data.errorMessage)
        }
      }
    }


  return (
    <div>
        <h1>Registro de Usuario</h1>
        <div>
          <form className="formularioCSS" onSubmit={handleSignup}>
            <label>Nombre</label>
            <input type="text" name="nombre" value={nombre} onChange={handleNombre} />
            <label>Apellidos</label>
            <input type="text" name="apellidos" value={apellidos} onChange={handleApellidos} />
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleEmail} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handlePassword} />
            <button className="buttonFormCSS" type="submit">Registrarse</button>

            {errorMessage !== null ? <p>{errorMessage}</p> : null }
          </form>
        </div>
    </div>
  )
}

export default Signup
