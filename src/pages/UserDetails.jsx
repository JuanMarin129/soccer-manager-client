import React, { useEffect, useState } from 'react'
import { data, Link, useParams } from 'react-router-dom';
import service from '../services/config.services';


function UserDetails() {

    const [dataUserProfile, setDataUserProfile] = useState(null)
    const parametrosDinamicos = useParams()


    useEffect(() => {
        getUser();
    },[])
    
    const getUser = async () => {
        try {
            const response = await service.get(`/user/profile/${parametrosDinamicos.userID}`)
            setDataUserProfile(response.data)
            console.log(response.data)
    
        } catch (error) {
            console.log(error)
        }
    }
    
    // Cláusula de Guardia
    if(dataUserProfile === null) {
        return <h3>Espere por favor... estamos trayendo la data</h3>
    }
  
    console.log(dataUserProfile)
    return (
    <div className="profile-CSS">
        <h1>Ficha de Usuario</h1>
        <p>{dataUserProfile.foto}</p>
        <p>Nombre: {dataUserProfile.nombre}</p>
        <p>Apellidos: {dataUserProfile.apellidos}</p>
        <p>Email: {dataUserProfile.email}</p>
        <p>Fecha de Nacimiento: {dataUserProfile.fechaNacimiento}</p>
        <p>País de Nacionalidad: {dataUserProfile.PaisNacionalidad}</p>
        <p>Equipo: {dataUserProfile.equipo}</p>
        <Link to={`/user-edit/${parametrosDinamicos.userID}`} ><button>Editar Ficha Usuario</button></Link>
    </div>
  )
}

export default UserDetails


