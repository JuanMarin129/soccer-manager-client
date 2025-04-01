import React from 'react'
import { Link } from 'react-router-dom'

function CommentCard(props) {
  
  console.log(props.eachComment)
  return (
    <div id="commentCardCSS">
      <Link to={`/edit-comment/${props.eachComment._id}`}><button>Editar Comentario</button></Link> 
      <button>Eliminar Comentario</button>
      <p>{props.eachComment.texto} </p>
    </div>
  )
}

export default CommentCard
