import React, { useEffect, useState } from 'react'
import service from '../services/config.services';
import { Link } from 'react-router-dom';
import moment from 'moment';

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

    // Realizamos las gestiones para mostrar los formatos correctos
     let mostrarFecha = moment(dataUser.fechaNacimiento).format("L") // Sería este formato 03/04/2025

    return (

    <div className="profile-CSS">
        <h1>Perfil de Usuario</h1>
        <img src={dataUser.foto} />
        <p>Nombre: {dataUser.nombre}</p>
        <p>Apellidos: {dataUser.apellidos}</p>
        <p>Email: {dataUser.email}</p>
        <p>Fecha de Nacimiento: {mostrarFecha}</p>
        <p>País de Nacionalidad: {dataUser.PaisNacionalidad}</p>
        <p>Equipo: {dataUser.equipo}</p>
        <Link to="/user/edit-profile"><button className="btnEditComment">Editar tu perfil</button></Link>  

    </div>
  )
}

export default UserProfile
