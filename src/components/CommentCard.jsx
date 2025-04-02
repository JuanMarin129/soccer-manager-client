import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import service from '../services/config.services'
import { AuthContext } from '../context/auth.context'

function CommentCard(props) {

  const { userRole } = useContext(AuthContext)

  const navigate = useNavigate()

  const deleteComment = async (e) => {
    try {
      let textWarning = "¿Estás seguro de eliminar este comentario?"
      if(confirm(textWarning) == true) {
        e.preventDefault()
        try {
          await service.delete(`/comment/${props.eachComment._id}`)
          console.log("comentario ELIMINADO")
          navigate("/show-matches")

        } catch (error) {
          console.log(error)
        }
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  
  //console.log(props.eachComment)
  return (
    <div id="commentCardCSS">
      <div id="commentCardBtn">
        {userRole === "entrenador" ?
        <>
          <Link to={`/edit-comment/${props.eachComment._id}`}><button>Editar Comentario</button></Link> 
          <button onClick={deleteComment}>Eliminar Comentario</button>
        </>
        : null }
      </div>
      <fieldset>
        <legend>{props.eachComment.creator.nombre} {props.eachComment.creator.apellidos}</legend>
        <p>{props.eachComment.texto} </p>
      </fieldset>
    </div>
  )
}

export default CommentCard
