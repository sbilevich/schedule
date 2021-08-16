import React from 'react';
import moment from 'moment';
import './Calendar.css';

function Calendar() {
    let days = [];
    let time = [];
    for(let i=1; i<8; i++) {
        days.push(moment().weekday(i))
    }
    for(let i=8; i<24; i++) {
        time.push(`${i}.00`)
    }

    // const tdheight = 100/time.length;

    const timePeriod = time.map(period => {
        return (
            <div className="td">{period.toString()}</div>
        )
    })

    const intervals = time.map(() => {
        
        return (
            <div className="td"></div>
        )
    })
    const weekDays = days.map(day => {
        return (
            <div className='daytime'>
                <div className="timesmall">
                    <div className="th"></div>
                    {timePeriod} 
                </div>
                <div className="events">
                    <div className="day th">{moment(day).format('ddd, D MMM')}</div>
                    {intervals}
                </div>
            </div>

        )
    })
    return (
        <div className='week'>
            <div className="timebig">
                <div className="th"></div>
                {timePeriod} 
            </div>
            {weekDays}
        </div>
    )
}

export default Calendar;