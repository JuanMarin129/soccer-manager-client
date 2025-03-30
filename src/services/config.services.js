import axios from "axios";

// Creamos el servicio que gestionará todas las llamadas al Back End
const service = axios.create({
    baseURL: `${import.meta.env.VITE_SERVER_URL}/api`
})

// Con esto nos aseguramos que todas las llamadas vendrán acompañadas con el Token
service.interceptors.request.use((config) => {
    const authToken = localStorage.getItem("authToken")
    if (authToken) {
        config.headers.authorization = `Bearer ${authToken}`
    }
    return config
})

export default service
