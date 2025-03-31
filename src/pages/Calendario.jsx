import React, { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import service from '../services/config.services';


function Calendario() {
  
  const [listMatches, setListMatches] = useState(null);

  
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


  console.log(listMatches);
  return (
    <div>
      <h1>Calendario Partidos</h1>

      <div>
        {listMatches.map((eachMatch, index) => {
          return (
            <MatchCard 
            key={index}
            eachMatch={eachMatch}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Calendario
