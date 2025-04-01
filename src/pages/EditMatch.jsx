import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import service from '../services/config.services';

function EditMatch() {
  
  const [dataMatch, setDataMatch] = useState(null)
  const parametrosDinamicos = useParams()

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

  const handleChange = (e) => {
    let cloneMatch = dataMatch
    cloneMatch[e.target.name] = e.target.value
    setDataMatch(cloneMatch)
    console.log(dataMatch)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await service.put(`/match/${parametrosDinamicos.matchID}`, dataMatch)
      //console.log("Entramos en el HandleSubmit")
      console.log("Ficha editada con éxito")
      
    } catch (error) {
      console.log(error)
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
      
      <h1>Editar Ficha Partido</h1>
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
          <input type="text" id="jornada" name="jornada" onChange={handleChange}/>
          <label>Estadio</label>
          <input type="text" id="jornada" name="estadio" onChange={handleChange}/>
          <label>Equipo Rival</label>
          <select id="EquipoRival" name="equipoRival"  onChange={handleChange}>
              <option value="">-- Seleccione Equipo Rival --</option>
              <option value="London FC">London FC</option>
              <option value="Atlético Middleware">Atlético Middleware</option>
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
          <button type="submit">Editar Ficha Partido</button>
      </form>
    </div>
  )
}

export default EditMatch



/*   <label>Jugadores</label>
          <select id="jugadores" name="jugadores" multiple onChange={handleChange}>
              {dataMatch.jugadores.map((eachPlayer) => {
                  return (
                      <option value={eachPlayer._id}>{eachPlayer.nombre} {eachPlayer.apellidos}</option>
                  )
              })}
          </select>

          */
