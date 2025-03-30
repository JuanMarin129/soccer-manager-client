import React from 'react'

function AddMatchCard() {
  return (
    <div>
        <h2>Añadir Ficha del Partido</h2>
        <form className="formularioMatchCard"> 
            <label>Competiciones</label>
            <select id="competiciones" name="competiciones">
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
            <input type="date" id="FechaPartido" name="FechaPartido" />
            <label>Hora</label>
            <input type="text" id="HoraPartido" name="HoraPartido" />
            <label>Equipo Rival</label>
            <select id="EquipoRival" name="EquipoRival">
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
            <select id="JugarComo" name="JugarComo">
                <option value="Local">Local</option>
                <option value="Visitante">Visitante</option>
            </select>
            <label>Goles Anotados</label>
            <input type="number" id="GolesAnotados" name="GolesAnotados" />
            <label>Goles Encajados</label>
            <input type="number" id="GolesEncajados" name="GolesEncajados" />
            <label>Resultado</label>
            <select id="Resultado" name="Resultado">
                <option value="Victoria">Victoria</option>
                <option value="Empate">Empate</option>
                <option value="Derrota">Derrota</option>
            </select>
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
