import React, { useEffect, useState } from 'react'
import service from '../services/config.services';
import { useParams } from 'react-router-dom';
import CommentCard from '../components/CommentCard';

function ShowComments() {
    
    const [listComments, setListComments] = useState(null);
    const parametrosDinamicos = useParams();

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
    </div>
  )
}

export default ShowComments
