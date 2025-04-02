import React, { useEffect, useState } from 'react'
import service from '../services/config.services';
import UserCard from '../components/UserCard';

function ShowPlayers() {

  const [listPlayers, setListPlayers] = useState(null);

  useEffect(() => {
    getPlayers();
  },[])

  const getPlayers = async () => {
    try {
        const response = await service.get("/user/players")
        setListPlayers(response.data)
        console.log(response.data)
        
    } catch (error) {
        console.log(error)
    }
}

  if(listPlayers === null) {
    return <h3>Espera por favor... estamos trayendo la data</h3>
  }

  return (
    <div>
        <h1>Jugadores</h1>
        {listPlayers.map((eachPlayer, index) => {
          return (
            <UserCard
            key={index}
            eachPlayer={eachPlayer} />
          )
        })}

    </div>
  )
}

export default ShowPlayers
