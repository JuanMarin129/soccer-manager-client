import React, { useContext, useEffect, useState } from 'react'
import service from '../services/config.services';
import { useParams } from 'react-router-dom';
import CommentCard from '../components/CommentCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

function ShowComments() {
    
    const [listComments, setListComments] = useState(null);
    const parametrosDinamicos = useParams();
    const { loggedUserId } = useContext(AuthContext)
   

    useEffect(() => {
        getComments();
    },[])

    const getComments = async () => {
        try {
            const response = await service.get(`comment/for-match/${parametrosDinamicos.matchID}`)
            setListComments(response.data)
            console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }

   
    // Cláusula de Guardia
    if(listComments === null) {
        return <h3>Espere por favor. Conectando con la data...</h3>
    }


    // Comprobamos si el usuario ya puso un comentario en este partido
    let userCommented = listComments.some((eachComment) => {
        return eachComment.creator._id === loggedUserId
    })

    console.log(userCommented);

    return (
    <div>
        <h1>Comentarios del partido</h1>
        {listComments.map((eachComment, index) => {
            return (
                <CommentCard
                key={index}
                eachComment={eachComment} />
            )
        })}
        {userCommented === false ?
        <Link to={`/add-comment/${parametrosDinamicos.matchID}`}><button>Añadir Comentario</button></Link>
        : null }
    </div>
  )
}

export default ShowComments
