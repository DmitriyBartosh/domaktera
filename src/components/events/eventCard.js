import React from 'react'

function EventBlock(props) {

  return (
    <div className="eventCard" style={{ top: `${props.top}px`, left: `${props.left}px` }} data-nav={props.data} id={props.id}>
      <div className="date">
        
        <p className="day">{props.day}</p>
        <p className="month">{props.month}</p>
        <div className="time">
          <p>{props.week}, {props.time}</p>
        </div>
      </div>
      <div className="info">
        <h2 className="title">{props.title}</h2>
        <p>{props.genre}</p>
        <p>{props.duration}</p>
      </div>
    </div>
  )
}

export default EventBlock
