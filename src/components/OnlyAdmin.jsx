// Para proteger las páginas que sólo sean accesibles por un Admin (entrenador)

import React, { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { Navigate } from 'react-router-dom'


function OnlyAdmin(props) {
    
    const { isLoggedIn, userRole} = useContext(AuthContext)

    if(isLoggedIn === true && userRole === "entrenador") {
        return props.children // Si está logueado y es admin, muestra la página
    }
    else {
        return <Navigate to="/" />
    }
}

export default OnlyAdmin
