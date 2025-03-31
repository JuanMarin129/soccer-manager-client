import React from 'react'
import { Link } from 'react-router-dom'

function MatchCard(props) {

  let goles= `${props.eachMatch.golesAnotados} - ${props.eachMatch.golesEncajados}`

  console.log(props.eachMatch)
  return (
    <div className="ShowMatchesCSS"> 
        <p>{props.eachMatch.equipoRival}</p>
        <p>{props.eachMatch.fecha}</p>
        <p>{goles}</p>
        <p>{props.eachMatch.resultado}</p>
        <Link to={`/match/${props.eachMatch._id}`} ><button>Ficha Partido</button></Link> 
        <button>Comentarios</button>
    </div>
  )
}

export default MatchCard
