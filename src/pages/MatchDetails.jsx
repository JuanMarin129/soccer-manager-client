import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../services/config.services';

function MatchDetails() {
  
    const [dataMatch, setDataMatch] = useState(null)
    const parametrosDinamicos = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        getMatch();
    },[])

    const getMatch = async () => {
        try {

            const response = await service.get(`/match/${parametrosDinamicos.matchID}`)
            setDataMatch(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error)
        }
    }

    const deleteMatch = async (e) => {
        let textWarning = "¿Estás seguro de eliminar la ficha del partido?"
        if(confirm(textWarning) == true ) {
            e.preventDefault()
            try {
                await service.delete(`/match/${parametrosDinamicos.matchID}`)
                console.log("Ficha ELIMINADA")
                navigate("/show-matches");
            } catch (error) {
                console.log(error)
            }
        }
    }

    console.log(parametrosDinamicos)
    console.log(dataMatch)

    // Cláusula de Guardia
    if(dataMatch === null) {
        return <h3>Espere por favor... estamos trayendo la data</h3>
    }
  
    return (
    <div> 
        <h1>Ficha del Partido</h1>
        <Link to={`/edit-match/${parametrosDinamicos.matchID}`}><button>Editar Ficha Partido</button></Link>  
        <button onClick={deleteMatch}>Eliminar Ficha Partido</button>
        <h3>Datos</h3>
        <div className="showMatchesCSS">
            <p>Competición: {dataMatch.competicion}</p>
            <p>Fecha: {dataMatch.fecha}</p>
            <p>Jornada: {dataMatch.jornada}</p>
            <p>Estadio: {dataMatch.estadio}</p>
            <p>Equipo rival: {dataMatch.equipoRival}</p>
            <p>Jugar como: {dataMatch.jugarComo}</p>
            <p>Resultado: {dataMatch.resultado}</p>
            <p>Goles Anotados: {dataMatch.golesAnotados}</p>
            <p>Goles Encajados: {dataMatch.golesEncajados}</p>
        </div>
 
       
    
    </div>
  )
}

export default MatchDetails


/*
 
        */
