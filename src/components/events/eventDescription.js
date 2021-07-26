import React from 'react'
import { useSelector } from 'react-redux'
import { useEventData } from './useEventData'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import EventLogo from './eventLogo'

function EventDescription() {
  const idPoster = useSelector((state) => state.posterId.posterId);
  const { nodes } = useEventData();

  return (
  <>
    <EventLogo />
    <div className="eventDescription">
      {nodes.filter((eventList) => {
        if (eventList.id === idPoster) {
          return eventList;
        }
      }).map(eventList => {
        const { colorBackground } = eventList;
        const posterImg = getImage(eventList.poster_image);

        return (
          <>
            <div className="backgroundDesc" style={{'background': `#${colorBackground}`}} />
            <div className="eventHeader">
              <h1 className="title">{eventList.title}</h1>
              <div className="ticketInfo">
                <p>Билеты можно приобрести<br />на кассе Дом Актёра</p>
                <p>Подробности: +7 (900) 444 10-10</p>
              </div>
              <div className="ageInfo">
                <p>{eventList.age}</p>
              </div>
            </div>
            <div className="eventInfo">
              <div className="eventInfo__about">
                <div className="textInfo">
                  {renderRichText(eventList.description)}
                </div>
                <p className="actorsTitle">Актёры:</p>
                <div className="actors">{eventList.actors.map(actor => {
                  return <p>{actor}</p>
                })}</div>
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
