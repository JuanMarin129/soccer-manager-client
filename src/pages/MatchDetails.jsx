import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function MatchDetails() {
  
    const [dataMatch, setDataMatch] = useState(null)
    const parametrosDinamicos = useParams()

    useEffect(() => {
        getMatch();
    },[])

    const getMatch = async () => {
        try {

            const response = await service.get(`/match/${parametrosDinamicos._id}`)
            setDataMatch(response.data);
            console.log(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    console.log(parametrosDinamicos)
  
    return (
    <div> <h1>Detalles Partido</h1> 
    
        <p>Holaaaaaaaa</p>
    
    </div>
  )
}

export default MatchDetails
