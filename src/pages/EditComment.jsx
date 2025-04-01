import React, { useContext, useEffect, useState } from 'react'
import service from '../services/config.services'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function EditComment() {
  
  const [textComment, setTextComment] = useState(null)
  const [visibility, setVisibility] = useState("Privado")
  const { loggedUserId, userRole } = useContext(AuthContext)
  const parametrosDinamicos = useParams()

  useEffect(() => {
    getComment();
  },[])

  const getComment = async () => {
    try {
      const response = await service.get(`/comment/${parametrosDinamicos.commentID}`)
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
        <h1>Editar Comentario</h1>




    </div>
  )
}

export default EditComment
