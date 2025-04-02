import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import service from '../services/config.services'

function EditUser() {

     // ESTADOS
    const [dataUser, setDataUser] = useState(null)
    const parametrosDinamicos = useParams()

    useEffect(() => {
        getUser()
    },[])

    const getUser = async () => {
        try {
            const response = await service.get(`/user/profile/${parametrosDinamicos.userID}`)
            setDataUser(response.data)
            console.log(response.data)
    
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        let cloneUser = dataUser
        cloneUser[e.target.name] = e.target.value 
        setDataUser(cloneUser)
        console.log(dataUser)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await service.put(`/user/profile/${parametrosDinamicos.userID}`, dataUser)
            console.log("Ficha Usuario Editada con ÉXITO")
        } catch (error) {
            console.log(error)
        }
    }
    
    // Cláusula de Guardia
    if(dataUser === null) {
        return <h3>Espere por favor... estamos trayendo la data</h3>
    }

    return (
    <div>

    <h1>Editar Ficha Usuario</h1>
    <form className="formularioCSS" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" name="nombre" placeholder={dataUser.nombre}  onChange={handleChange} />
            <label>Apellidos:</label>
            <input type="text" name="apellidos" placeholder={dataUser.apellidos} onChange={handleChange} />
            <label>Fecha de Nacimiento:</label>
            <input type="date" name="fechaNacimiento" onChange={handleChange}  />
            <label>País de Nacionalidad:</label>
            <input type="text" name="PaisNacionalidad" onChange={handleChange} />
            <label>Foto:</label>
            <input type="text" name="foto" onChange={handleChange} />
            <label>Teléfono:</label>
            <input type="text" name="telefono" onChange={handleChange} />
            <label>Equipo:</label>
            <input type="text" name="equipo" onChange={handleChange} />
            <button type="submit">Editar Ficha Usuario</button>
      </form>      

    </div>
  )
}

export default EditUser
