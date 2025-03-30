import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth.context';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/api/auth/login`, {
        email: email,
        password: password
      })
      console.log("Usuario logueado", response)

      localStorage.setItem("authToken", response.data.authToken)

      // Validar el Token y saber quién es el usuario dueño del Token.
      authenticateUser();

      navigate("/");
      
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
       <h1>Formulario de Acceso</h1>
        <div>
          <form className="formularioCSS" onSubmit={handleLogin}>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleEmail} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handlePassword} />
            <button className="buttonFormCSS" type="submit">Acceder</button>

            {errorMessage !== null ? <p>{errorMessage}</p> : null }
          </form>
        </div>

    </div>
  )
}

export default Login
