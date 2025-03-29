// Componente Contexto => comparte los estados
import axios from "axios";
import { createContext, useState } from "react";

const AuthContext = createContext();

// Componente Wrapper => envuelve la app y crea los estados

function AuthWrapper(props) {

    const [ isLoggedIn, setIsLoggedIn] = useState(false);
    const [ loggedUserId, setLoggedUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

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

        } catch (error) {
            console.log(error)
            
        }
    }

    const passedContext = {
        isLoggedIn,
        loggedUserId,
        authenticateUser
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
