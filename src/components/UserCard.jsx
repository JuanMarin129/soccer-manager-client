import React from 'react'
import { Link } from 'react-router-dom'

function UserCard(props) {
  return (
    <div id="userCardCSS">
      <p key={props.eachPlayer._id}>{props.eachPlayer.nombre} {props.eachPlayer.apellidos}</p>
      <Link to={`/user-details/${props.eachPlayer._id}`}><button>Ficha de Usuario</button></Link>
    </div>
  )
}

export default UserCard
