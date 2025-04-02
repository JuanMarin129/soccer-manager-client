import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
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
  
    return (
    <div>
        <h1>Ficha de Usuario</h1>
        <p>{dataUserProfile.nombre}</p>
        <p>{dataUserProfile.apellidos}</p>

   
    </div>
  )
}

export default UserDetails


