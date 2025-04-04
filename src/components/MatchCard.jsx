import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

function MatchCard(props) {

  // Realizamos las gestiones para mostrar los formatos correctos
  let goles= `${props.eachMatch.golesAnotados} - ${props.eachMatch.golesEncajados}`
  let mostrarFecha = moment(props.eachMatch.fecha).format("L") // Sería este formato 03/04/2025

  console.log(props.eachMatch)

  //let nuevaFecha = moment(props.eachMatch.fecha, "MM/DD/YY")
 
  //console.log(mostrarFecha)
  return (
    <div className="showMatchCard"> 
        <p><span style={{fontWeight:"bold"}}>Equipo Rival:</span> {props.eachMatch.equipoRival}</p>
        <p><span style={{fontWeight:"bold"}}>Fecha:</span> {mostrarFecha}</p>
        <p><span style={{fontWeight:"bold"}}>Goles:</span> {goles}</p>
        <p><span style={{fontWeight:"bold"}}>Resultado:</span> {props.eachMatch.resultado}</p>
        <Link to={`/match-details/${props.eachMatch._id}`} ><button className="btnEditAndComment">Ficha Partido</button></Link> 
        <Link to={`/show-comments/${props.eachMatch._id}`}><button className="btnEditAndComment"S>Comentarios</button></Link> 
    </div>
  )
}

export default MatchCard
