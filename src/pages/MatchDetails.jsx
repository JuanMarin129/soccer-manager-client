import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../services/config.services';
import { AuthContext } from '../context/auth.context';

function MatchDetails() {
  
    const [dataMatch, setDataMatch] = useState(null)
    const { userRole } = useContext(AuthContext)
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
  
    console.log(dataMatch.jugadores)
    return (
    <div> 
        <h1>Ficha del Partido</h1>
        {userRole === "entrenador" ?
        <>
        <Link to={`/edit-match/${parametrosDinamicos.matchID}`}><button>Editar Ficha Partido</button></Link>  
        <button onClick={deleteMatch}>Eliminar Ficha Partido</button>
        </>
        : null }
        <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}> 
            <h2 style={{width:"100%"}}>Datos</h2>
            <div className="showDetailsMatchCSS">
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
            <h3 style={{width:"100%"}}>Lista de jugadores:</h3>
            <div id="showListPlayers">
                {dataMatch.jugadores.map((eachPlayer, index) => {
                    return (
                        <p key={index}>{eachPlayer.nombre} {eachPlayer.apellidos}</p>
                    )
                })}
            </div>
        </div>
 
       
    
    </div>
  )
}

export default MatchDetails


/*
 
        */
