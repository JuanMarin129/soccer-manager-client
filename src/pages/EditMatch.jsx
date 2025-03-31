import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import service from '../services/config.services';

function EditMatch() {
  
  const [dataMatch, setDataMatch] = useState(null)
    const parametrosDinamicos = useParams()

    useEffect(() => {
        getMatch();
    },[])

    const getMatch = async () => {
        try {

            const response = await service.get(`/match/${parametrosDinamicos.matchID}`)
            setDataMatch(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    console.log(parametrosDinamicos)
    console.log(dataMatch)

    // Cláusula de Guardia
    if(dataMatch === null) {
        return <h3>Espere por favor... estamos trayendo la data</h3>
    }
  
  return (
    <div>
      
      <h1>Editar Partido</h1>
    
    
    </div>
  )
}

export default EditMatch
