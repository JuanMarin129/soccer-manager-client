// Para proteger páginas que sólo sean accesibles cuando el usuario esté logueado

import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate } from 'react-router-dom'



function OnlyPrivate(props) {

    const { isLoggedIn } = useContext(AuthContext)

    if (isLoggedIn === true) {
    return props.children // si está logueado, muestra la página
    }
    else {
        // En la base del componente no se puede usar el useNavigate. Tenemos que usar el otro componente llamado Navigate
        return <Navigate to="/login" /> // si no está logueado, lo envía a login
    }
}

export default OnlyPrivate
