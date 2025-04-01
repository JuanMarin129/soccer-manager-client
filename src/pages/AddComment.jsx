import React, { useContext, useState } from 'react'
import service from '../services/config.services';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function AddComment() {
    
    const [textComment, setTextComment] = useState(null)
    const [visibility, setVisibility] = useState("Privado")
    const { loggedUserId, userRole } = useContext(AuthContext)
    const parametrosDinamicos = useParams();

   
    
    const handleText = (e) => setTextComment(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Contactar al Back End para añadir el comentario
        try {
            await service.post('/comment', {
                texto: textComment,
                partido: parametrosDinamicos.matchID,
                creator: loggedUserId,
                visibilidad: visibility
            })
            console.log("Creado el comentario con éxito")
            
        } catch (error) {
            console.log(error)
        }
    }

    //console.log(loggedUserId)

    return (
    <div>
        <h1>Añadir Comentario</h1>

        <form onSubmit={handleSubmit}>
            <legend>Comentario:</legend>
            <textarea rows="10" cols="40" onChange={handleText}></textarea>
            <fieldset>
                <legend>Elige si quieres que tu comentario sea público o privado</legend>
                <input type="radio" name="visibilidad" value="Público" onChange={(e) => setVisibility("Público")}/>
                <label>Público</label>
                <input type="radio" name="visibilidad" value="Privado" onChange={(e) => setVisibility("Privado")} />
                <label>Privado</label>
            </fieldset>
            <button type="submit"> Añadir Comentario</button>
        </form>

    </div>
  )
}

export default AddComment
