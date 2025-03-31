import React, { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import service from '../services/config.services';


function ShowMatches() {

    const [listMatches, setListMatches] = useState(null)

    useEffect(() => {
        getMatches();
      },[])
    
      const getMatches = async () => {
        try {
          const response = await service.get("/match")
          setListMatches(response.data)
          console.log(response.data)
          
        } catch (error) {
          console.log(error)
        }
      }
    
      if(listMatches === null) {
        return <h3>Espere por favor. Conectando con la data...</h3>
      }


    console.log(listMatches)
    return (
    <div>
        <div className="showMatchesCSS">
            <h3>Rival</h3>
            <h3>Fecha</h3>
            <h3>Goles</h3>
            <h3>Resultado</h3>
            {listMatches.map((eachMatch, index) => {
                return (
                    <MatchCard
                    key={index}
                    eachMatch={eachMatch} />
                )
            })}
        </div>


    </div>
  )
}

export default ShowMatches
