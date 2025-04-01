import React, { useContext, useEffect, useState } from 'react'
import service from '../services/config.services'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

function EditComment() {
  
  const [textComment, setTextComment] = useState(null)
  const [visibility, setVisibility] = useState("Privado")
  const [matchID, setMatchID] = useState(null)
  const { loggedUserId, userRole } = useContext(AuthContext)
  const parametrosDinamicos = useParams()

  useEffect(() => {
    getComment();
  },[])

  const getComment = async () => {
    try {
      const response = await service.get(`/comment/${parametrosDinamicos.commentID}`)
      console.log(response.data)

      // Inicializamos los valores que se pueden editar
      setTextComment(response.data.texto)
      setVisibility(response.data.visibilidad)
      setMatchID(response.data.partido)
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleText = (e) => setTextComment(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Contactar al Back End para editar el comentario
    try {
        await service.put(`/comment/${parametrosDinamicos.commentID}`, {
            texto: textComment,
            partido: matchID,
            creator: loggedUserId,
            visibilidad: visibility
        })
        console.log("EDITADO el comentario con ÉXITO")
        
    } catch (error) {
        console.log(error)
    }
}

  // Cláusula de Guardia
  if(textComment === null) {
    return <h3>Espere por favor... estamos trayendo la data</h3>
  }

  return (
    <div>
        <h1>Editar Comentario</h1>
        <form onSubmit={handleSubmit}>
          <legend>Comentario:</legend>
          <textarea rows="10" cols="40" value={textComment} onChange={handleText}></textarea>
          <fieldset>
              <legend>Elige si quieres que tu comentario sea público o privado</legend>
              <input type="radio" name="visibilidad" value="Público" onChange={(e) => setVisibility("Público")}/>
              <label>Público</label>
              <input type="radio" name="visibilidad" value="Privado" onChange={(e) => setVisibility("Privado")} />
              <label>Privado</label>
          </fieldset>
          <button type="submit"> Editar Comentario</button>
        </form>



    </div>
  )
}

export default EditComment
