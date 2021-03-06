import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { useEventData } from './useEventData'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import EventLogo from '../Logo'

function EventDescription() {
  const idPoster = useSelector((state) => state.posterId.posterId);
  const { nodes } = useEventData();
  const { width } = useWindowDimensions();

  useEffect(() => {

  }, [width])

  return (
    <>
      {width > 1025 ? <EventLogo /> : null}
      <div className="eventDescription">
        {nodes.filter((eventList) => {
          if (eventList.id === idPoster) {
            return eventList;
          }
          else {
            return null;
          }
        }).map(eventList => {
          const { title } = eventList;
          const { date, colorbackground, actors, genre, age, description, posterImage } = eventList.events;
          const posterImg = getImage(posterImage.localFile.childImageSharp);

          const dateEvent = new Date(date);
          const day = dateEvent.getDate();
          const month = dateEvent.getMonth();
          const hour = dateEvent.getHours();
          const minutes = dateEvent.getMinutes();
          const weekDay = dateEvent.getDay();
          const time = (hour < 10 ? '0' + hour : '' + hour) + ':' + (minutes < 10 ? '0' + minutes : '' + minutes);
          const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
          const weekName = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

          return (
            <>
              <div className="backgroundDesc" style={{ 'background': colorbackground }} />
              <div className="eventHeader">
                {width < 1025 ? <EventLogo /> : null}
                <div className="eventTitle">
                  <h1>{title}</h1>
                  <p>// {genre}</p>
                </div>
                <div className="ticketInfo">
                  <p>Билеты можно приобрести<br />на кассе <a href="https://yandex.ru/maps/-/CCUiJGTI1D" target="_blank" rel="noreferrer">«Дом Актёра»</a></p>
                  <p>Подробности: <a href="tel:+73912277338">+7 (391) 227-73-38</a></p>
                </div>
                <div className="ageInfo">
                  <p>{age}</p>
                </div>
                <div className="eventInfoMobile">
                  <div className="eventInfoMobile__date">
                    <div className="day">
                      <p>{day < 10 ? '0' + day : '' + day}</p>
                    </div>
                    <div className="monthWeek">
                      <p className="month">{monthName[month]}</p>
                      <div className="time">
                        <p>{weekName[weekDay]}</p>
                        <p>{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eventInfo">
                <div className="eventInfo__about">
                  <div className="textInfo" dangerouslySetInnerHTML={{ __html: description }} />
                  <p className="actorsTitle">Актёры:</p>
                  <div className="actors"><p>{actors}</p></div>
                  <div className="ticketInfoMobile">
                    <p>Билеты можно приобрести<br />на кассе Дом Актёра</p>
                    <p>Подробности: +7 (900) 444 10-10</p>
                  </div>
                </div>
                <div className="eventInfo__poster">
                  <div className="photo">
                    <GatsbyImage image={posterImg} alt="Постер" />
                  </div>
                </div>
              </div>
            </>
          )
        })
        }
      </div>
    </>
  )
}

export default EventDescription
