import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function UserCard(props) {
  
  const { userRole } = useContext(AuthContext)
  
  return (
    <div id="userCardCSS">
      <p key={props.eachPlayer._id}>{props.eachPlayer.nombre} {props.eachPlayer.apellidos}</p>
      {userRole === "entrenador" ?
      <Link to={`/user-details/${props.eachPlayer._id}`}><button>Ficha de Usuario</button></Link>
      : null }
    </div>
  )
}

export default UserCard
