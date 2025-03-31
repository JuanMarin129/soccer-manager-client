import React, { useState } from 'react'
import service from '../services/config.services'
import { useNavigate } from 'react-router-dom'


function AddMatchCard() {
 
    // Creamos la esctructura inicial de la data del Partido
    const matchDefault = {
        competicion: "",
        fecha: Date.now(),
        hora: "00:00",
        jornada: "",
        estadio: "",
        equipoRival: "",
        jugarComo: "",
        //entrenador: {},
        //jugadores: [],
        golesAnotados: 0,
        golesEncajados: 0,
        resultado: "",
        tarjetasAmarillas: 0,
        tarjetasRojas: 0,
        posesionBalon: 1,
        transicionesAtaqueDefensa: 0,
        transicionesDefensaAtaque: 0,
        cornersAFavor: 0,
        cornesEnContra: 0,
        golesBalonParado: 0,
        enlacePartido: ""
    }

    const [dataMatch, setDataMatch] = useState({...matchDefault})
    const navigate = useNavigate();

    const handleChange = (e) => {
        //console.log(e);
        let cloneMatch = dataMatch;
        if(e.target.name === "competiciones") {
            cloneMatch.competicion = e.target.value
            console.log(cloneMatch.competicion)
        }
        if(e.target.name === "fechaPartido") {
            cloneMatch.fecha = e.target.value
        }
        if(e.target.name === "horaPartido") {
            cloneMatch.hora = e.target.value
        }
        if(e.target.name === "equipoRival") {
            cloneMatch.equipoRival = e.target.value
        }
        if(e.target.name === "jugarComo") {
            cloneMatch.jugarComo = e.target.value
        }
        if(e.target.name === "golesAnotados") {
            cloneMatch.golesAnotados = parseInt(e.target.value)
        }
        if(e.target.name === "golesEncajados") {
            cloneMatch.golesEncajados = parseInt(e.target.value)
        }
        if(e.target.name === "resultado") {
            cloneMatch.resultado = e.target.value
        }
        setDataMatch(cloneMatch)
        console.log(cloneMatch)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Contactar al Back End para crear la ficha del partido. Con requestBody le pasamos el objeto con todos los datos de dataMatch
        try {
            const requestBody = {
                ...dataMatch,
            };

            console.log("Esto es requestBody")
            console.log(requestBody)

            await service.post('/match', requestBody)

            //navigate("/");
            
        } catch (error) {
            console.log(error)
        }
    }

    console.log(dataMatch)

    return (
        <div>
            <h2>Añadir Ficha del Partido</h2>
            <form className="formularioMatchCard" onSubmit={handleSubmit}> 
                <label>Competiciones</label>
                <select id="competiciones" name="competiciones" onChange={handleChange}>
                    <option value="Primera Division">Primera División</option>
                    <option value="Segunda Division">Segunda División</option>
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
                <input type="date" id="FechaPartido" name="fechaPartido" onChange={handleChange} />
                <label>Hora</label>
                <input type="text" id="HoraPartido" name="horaPartido" onChange={handleChange}/>
                <label>Equipo Rival</label>
                <select id="EquipoRival" name="equipoRival"  onChange={handleChange}>
                    <option value="London FC">London FC</option>
                    <option value="Atletico Middleware">Atlético Middleware</option>
                    <option value="Samuel Team">Samuel Team</option>
                    <option value="Santos Kurt">Santus Kurt</option>
                    <option value="Njo Njo Team">Njo Njo Team</option>
                    <option value="Racing Patata">Racing Patata</option>
                    <option value="Atletico Patata">Atlético de Patata</option>
                    <option value="Real Banana CF">Real Banana CF</option>
                    <option value="Caracas FC">Caracas FC</option>
                    <option value="Zulia FC">Zulia FC</option>
                    <option value="Deportivo Tachira">Deportivo Táchira</option>
                    <option value="Estudiantes de Merida ">Estudiantes de Mérida</option>
                    <option value="Club Azul">Club Azul</option>
                    <option value="Tigres de la UANL">Tigres de la UANL</option>
                    <option value="Queretaro FC">Querétaro FC</option>
                </select>
                <label>Jugar como</label>
                <select id="JugarComo" name="jugarComo"  onChange={handleChange}>
                    <option value="Local">Local</option>
                    <option value="Visitante">Visitante</option>
                </select>
                <label>Goles Anotados</label>
                <input type="number" id="GolesAnotados" name="golesAnotados"  onChange={handleChange} />
                <label>Goles Encajados</label>
                <input type="number" id="GolesEncajados" name="golesEncajados"  onChange={handleChange} />
                <label>Resultado</label>
                <select id="Resultado" name="resultado"  onChange={handleChange}>
                    <option value="Victoria">Victoria</option>
                    <option value="Empate">Empate</option>
                    <option value="Derrota">Derrota</option>
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



*/
