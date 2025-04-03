import React, { useEffect, useState } from 'react'
import MatchCard from '../components/MatchCard'
import service from '../services/config.services';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment';
import 'moment-timezone'


function Calendario() {
  
  const [listMatches, setListMatches] = useState(null);

  useEffect(() => {
    getMatches();
  },[])

  const getMatches = async () => {
    try {
      const response = await service.get("/match")
      setListMatches(response.data)
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  if(listMatches === null) {
    return <h3>Espere por favor. Conectando con la data...</h3>
  }

  // Aquí creamos las características del Calendar
  moment.updateLocale('es', {
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    weekdaysShort : ["Dom", "Lun", "Mar", "Mier", "Jue", "Vier", "Sab"],
    week: {
      dow:1
    }
});
  moment.tz.setDefault('Europe/Madrid')
  const localizer = momentLocalizer(moment)
  console.log("Esta es la lista de partidos para calendario")
  console.log(listMatches);



  const events = []

  listMatches.map((eachMatch) => {
    let dataEvent = {
      start: moment(eachMatch.fecha),
      end: moment(eachMatch.fecha),
      title: eachMatch.equipoRival
    }
    events.push(dataEvent)
  })
 
 
  //events.push(partido)

  return (
    <div id="calendarCSS">
      <Calendar
      localizer={localizer}
      events={events}
      views={["month"]}
      culture='es'
      messages={{
        next: "Siguiente",
        previous: "Anterior",
        today: "Hoy",
        month: "Mes",
        week: "Semana"
      }}
      />
    </div>
  )
}

export default Calendario


/* 
      <div>
        {listMatches.map((eachMatch, index) => {
          return (
            <MatchCard 
            key={index}
            eachMatch={eachMatch}
            />
          )
        })}
      </div> */
