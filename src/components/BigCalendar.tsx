'use client'
import { Calendar, View, Views, dateFnsLocalizer, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import {useState} from 'react'
import { calendarEvents } from '@/lib/data'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import format from 'date-fns-jalali/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import faIR from 'date-fns/locale/fa-IR'

// const localizer = momentLocalizer(moment)
const locales = {
  'fa-IR': faIR,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})
const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK)
    const handleOnChange = (selectedView: View) =>{
        setView(selectedView)
    }
  return(
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={['work_week', 'day']}
      view={view}
      style={{ height:" 98%" }}
      onView={handleOnChange}
      min={new Date(2023,1,0,8,0)}
      max={new Date(2026,1,0,17,0)}
    />
)
}

export default BigCalendar