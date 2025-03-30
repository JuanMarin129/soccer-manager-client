// Componente Contexto => comparte los estados
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

// Componente Wrapper => envuelve la app y crea los estados

function AuthWrapper(props) {

    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    const [ loggedUserId, setLoggedUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [isAuthenticatingUser, setIsAuthenticatingUser] = useState(true);

    // Comprobamos si existe el Token cada vez que entre el usuario a la web por primera vez. Si existe, el Back End le dará la info al Front End.
    useEffect(() => {
        authenticateUser()
    },[])


    async function authenticateUser() {
        // Enviar Token al backend, validarlo y recibir info del usuario

        try {
            
            const authToken = localStorage.getItem("authToken")
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/auth/verify`, {
                headers: {
                    authorization: `Bearer ${authToken}`
                }
            })

            console.log(response)
            // Si la llamada llega hasta aquí, significa que el usuario fue correctamente validado
            setIsLoggedIn(true)
            setLoggedUserId(response.data.payload._id)
            setUserRole(response.data.payload.role)
            setIsAuthenticatingUser(false)

        } catch (error) {
            console.log(error)
            setIsLoggedIn(false)
            setLoggedUserId(null)
            setUserRole(null)
            setIsAuthenticatingUser(false)
            
        }
    }

    const passedContext = {
        isLoggedIn,
        loggedUserId,
        userRole,
        authenticateUser
    }

    if (isAuthenticatingUser === true) {
        return <h3>...Validando usuario. Espere, por favor</h3>
    }

    return (
        <AuthContext.Provider value={passedContext}>
            {props.children}
        </AuthContext.Provider>
    )
} 

export {
    AuthWrapper,
    AuthContext
}
