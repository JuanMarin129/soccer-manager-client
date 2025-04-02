import React, { useEffect, useState } from 'react'
import service from '../services/config.services';
import { Link } from 'react-router-dom';

function UserProfile() {
  
    const [dataUser, setDataUser] = useState(null)


    useEffect(() => {
        getUser();
    },[])
  

    const getUser = async () => {
        try {
            const response = await service.get("/user/profile")
            setDataUser(response.data)
            console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }
  

    // Cláusula de Guardia
    if(dataUser === null) {
        return <h3>Espere por favor, estamos trayendo la data...</h3>
    }


    return (

    <div>
        <h1>Holiiiii, Perfil de Usuario</h1>
        <p>{dataUser.foto}</p>
        <p>Nombre: {dataUser.nombre}</p>
        <p>Apellidos: {dataUser.apellidos}</p>
        <p>Email: {dataUser.email}</p>
        <p>Fecha de Nacimiento: {dataUser.fechaNacimiento}</p>
        <p>País de Nacionalidad: {dataUser.PaisNacionalidad}</p>
        <p>Equipo: {dataUser.equipo}</p>
        <Link to="/user/edit-profile"><button>Editar tu perfil</button></Link>  

    </div>
  )
}

export default UserProfile
