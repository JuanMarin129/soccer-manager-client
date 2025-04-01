import React, { useEffect, useState } from 'react'
import service from '../services/config.services'
import { useNavigate } from 'react-router-dom'

const matchDefault = {
        competicion: "Primera División",
        fecha: Date.now(),
        hora: "",
        jornada: "Jornada 01",
        estadio: "Los Arcos",
        equipoRival: "Racing Patata",
        jugarComo: "Local",
        //entrenador: {},
        jugadores: [],
        golesAnotados: 0,
        golesEncajados: 0,
        resultado: "Victoria",
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        posesionBalon: 1,
        transicionAtaqueDefensa: 0,
        transicionDefensaAtaque: 0,
        cornersAFavor: 0,
        cornersEnContra: 0,
        golesBalonParado: 0,
        enlacePartido: ""
    }

function AddMatchCard() {
 
    // Creamos la esctructura inicial de la data del Partido
    

    const [dataMatch, setDataMatch] = useState(matchDefault)
    const [listPlayer, setListPlayer] = useState(null)
    const listDay = [];
    const listStadium = ["Martínez Valero", "Díez Iborra", "Antonio Puchades", "Manolo Maciá", "La Magdalena", "Nuevo Pepico Amat", "Mestalla", "La Rosaleda", "Metropolitano", "Riazor", "Las Gaunas", "Monumental de Maturín", "Pachencho", "Polideportivo Pueblo Nuevo", "Olímpico de la UCV", "Brígido Iriarte", "Sánchez Pizjuan", "San Mamés", "Montilivi", "El Regit", "La Murta", "Los Arcos", "San Gregorio", "Gerardo Salvador", "Vicent Morera"]
    const navigate = useNavigate();

    useEffect(() => {
        getPlayers();
    },[])

    const getPlayers = async () => {
        try {
            const response = await service.get("/user/players")
            setListPlayer(response.data)
            console.log(response.data)
            
        } catch (error) {
            console.log(error)
        }
    }


    const handleChange = (e) => {
        //console.log(e); 
        
        let cloneMatch = {...dataMatch}
        if(e.target.name === "jugadores") {
            
            //cloneMatch[e.target.name] = new Array(uniquePlayers)
            let selectedPlayers = Array.from(e.target.selectedOptions).map((option) => option.value)
            let uniquePlayers = new Set(selectedPlayers)
            cloneMatch[e.target.name] = Array.from(uniquePlayers)
        } else {
            cloneMatch[e.target.name] = e.target.value
        }
        setDataMatch(cloneMatch)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Contactar al Back End para crear la ficha del partido. Con requestBody le pasamos el objeto con todos los datos de dataMatch
        try {


            console.log("Esto es dataMatch")
            console.log(dataMatch)

            await service.post('/match', dataMatch)
              /*  competicion: dataMatch.competicion,
                fecha: dataMatch.fecha,
                hora: dataMatch.hora,
                equipoRival: dataMatch.equipoRival,
                jugarComo: dataMatch.jugarComo,
                golesAnotados: dataMatch.golesAnotados,
                golesEncajados: dataMatch.golesEncajados,
                resultado: dataMatch.resultado */
            

            navigate("/show-matches");
            
        } catch (error) {
            console.log(error)
        }
    }

    // Cláusula de Guardia
    if (listPlayer === null) {
        return <h3>Espere por favor... estamos trayendo la data</h3>
    }
    
    const createDays = () => {
        for(let i=1; i<=30; i++) {
            let day = i.toString().padStart(2,'0')
            let stringDay = "Jornada " + day;
            listDay.push(stringDay)
        }
    }
    createDays();

    return (
        <div>
            <h2>Añadir Ficha del Partido</h2>
            <form className="formularioMatchCard" onSubmit={handleSubmit}> 
                <label>Competiciones</label>
                <select id="competiciones" name="competicion" onChange={handleChange}>
                    <option value="">-- Seleccione Competición --</option>
                    <option value="Primera División">Primera División</option>
                    <option value="Segunda División">Segunda División</option>
                    <option value="Primera RFEF">Primera RFEF</option>
                    <option value="Segunda RFEF">Segunda RFEF</option>
                    <option value="Tercera RFEF">Tercera RFEF</option>
                    <option value="División de Honor">División de Honor</option>
                    <option value="Liga Nacional">Liga Nacional</option>
                    <option value="Liga Autonomica Cadete">Liga Autonómica Cadete</option>
                    <option value="Liga Autonomica Infantil">Liga Autonómica Infantil</option>
                    <option value="Liga Preferente">Liga Preferente</option>
                </select>
                <label>Fecha</label>
                <input type="date" id="FechaPartido" name="fecha" onChange={handleChange} />
                <label>Hora</label>
                <input type="text" id="HoraPartido" name="hora" onChange={handleChange}/>
                <label>Jornada</label>
                <select id="jornada" name="jornada" onChange={handleChange}>
                    <option value="">-- Seleccione Jornada --</option>
                    {listDay.map((eachDay) => {
                        return <option value={eachDay}>{eachDay}</option>
                    })}
                </select>
                {/*<input type="text" id="jornada" name="jornada" onChange={handleChange}/>*/}
                <label>Estadio</label>
                <select id="estadio" name="estadio" onChange={handleChange}>
                    <option value="">-- Seleccione Estadio --</option>
                    {listStadium.map((eachStadium) => {
                        return <option value={eachStadium}>{eachStadium}</option>
                    })}    
                </select> 
                {/*<input type="text" id="jornada" name="estadio" onChange={handleChange}/>*/}
                <label>Equipo Rival</label>
                <select id="EquipoRival" name="equipoRival"  onChange={handleChange}>
                    <option value="">-- Seleccione Equipo Rival --</option>
                    <option value="London FC">London FC</option>
                    <option value="Atlético Middleware">Atlético Middleware</option>
                    <option value="Samuel Team">Samuel Team</option>
                    <option value="Santos Kurt">Santus Kurt</option>
                    <option value="Njo Njo Team">Njo Njo Team</option>
                    <option value="Racing Patata">Racing Patata</option>
                    <option value="Atlético Patata">Atlético de Patata</option>
                    <option value="Real Banana CF">Real Banana CF</option>
                    <option value="Caracas FC">Caracas FC</option>
                    <option value="Zulia FC">Zulia FC</option>
                    <option value="Deportivo Táchira">Deportivo Táchira</option>
                    <option value="Estudiantes de Mérida ">Estudiantes de Mérida</option>
                    <option value="Club Azul">Club Azul</option>
                    <option value="Tigres de la UANL">Tigres de la UANL</option>
                    <option value="Querétaro FC">Querétaro FC</option>
                </select>
                <label>Jugar como</label>
                <select id="JugarComo" name="jugarComo"  onChange={handleChange}>
                    <option value="">-- Elija si jugó fuera o en casa --</option>
                    <option value="Local">Local</option>
                    <option value="Visitante">Visitante</option>
                </select>
                <label>Goles Anotados</label>
                <input type="number" id="GolesAnotados" name="golesAnotados"  onChange={handleChange} />
                <label>Goles Encajados</label>
                <input type="number" id="GolesEncajados" name="golesEncajados"  onChange={handleChange} />
                <label>Resultado</label>
                <select id="Resultado" name="resultado"  onChange={handleChange}>
                    <option value="">-- Seleccione Resultado --</option>
                    <option value="Victoria">Victoria</option>
                    <option value="Empate">Empate</option>
                    <option value="Derrota">Derrota</option>
                </select>
                <label>Jugadores</label>
                <select id="jugadores" name="jugadores" multiple onChange={handleChange}>
                    {listPlayer.map((eachPlayer) => {
                        return (
                            <option key={eachPlayer._id} value={eachPlayer._id}>{eachPlayer.nombre} {eachPlayer.apellidos}</option>
                        )
                    })}
                </select>
                
                <button type="submit">Crear Ficha Partido</button>
            </form>
        </div>
  )
}

export default AddMatchCard



/*

    <label>Equipo Rival</label>
    <select id="" name="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value="">r</option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
    </select>

 <label>Pepito</label>
                <input type="checkbox" />
                <label>Juanito</label>
                <input type="checkbox" /> 

*/
