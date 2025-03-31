import React from 'react'

function MatchCard(props) {

  let goles= `${props.eachMatch.golesAnotados} - ${props.eachMatch.golesEncajados}`

  console.log(props.eachMatch)
  return (
    <div className="ShowMatchesCSS"> 
        <p>{props.eachMatch.equipoRival}</p>
        <p>{props.eachMatch.fecha}</p>
        <p>{goles}</p>
        <p>{props.eachMatch.resultado}</p>
        <button>Ficha Partido</button>
        <button>Comentarios</button>
    </div>
  )
}

export default MatchCard
