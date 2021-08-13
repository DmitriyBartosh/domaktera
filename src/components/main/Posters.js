import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { useEventData } from '../events/useEventData'

function Posters() {
  var dateNow = new Date();
  var indexPost = 0;
  const { nodes } = useEventData();

  const photo = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "photointro"}}, sort: {fields: name}) {
        nodes {
          id
          childrenImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 95
              placeholder: DOMINANT_COLOR
              jpgOptions: {progressive: true}
            )
          }
        }
      }
    }
  `)

  return (
    <div className="posters">
      <div className="posters__block">
        {photo.allFile.nodes.map((posterPhoto, index) => {
          const { id, childrenImageSharp } = posterPhoto;
          const photoSrc = getImage(childrenImageSharp[0]);
          const styleName = ['one', 'two', 'three', 'four', 'five'];

          return (
            <div className={`post ` + styleName[index]} key={id}>
              <GatsbyImage image={photoSrc} alt='Фото Дом Актёра' />
            </div>
          )
        })}

        {nodes.map(posters => {
          const { id, title } = posters.events;
          const { posterImage, genre, date } = posters.events;
          const posterImg = getImage(posterImage.localFile.childImageSharp);

          if ((Date.parse(date) > Date.parse(dateNow)) && indexPost < 1) {
            indexPost++;
            const dateEvent = new Date(date);
            const day = dateEvent.getDate();
            const month = dateEvent.getMonth();
            const monthName = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

            return (
              <Link to="/events/" className={'post activeEvent'} key={id}>
                <div className="nearestEvent">
                  <p>Ближайшее событие</p>
                  <div className="nearestEvent__info">
                    <h2>{title}</h2>
                    <h3>{genre}</h3>
                  </div>
                  <div className="nearestEvent__date">
                    <p className="nearestEventDay">{day}</p>
                    <p className="nearestEventMonth">{monthName[month]}</p>
                  </div>
                </div>
                <GatsbyImage image={posterImg} alt={posterImage.altText} />
              </Link>
            )
          }
          else {
            return null;
          }
        })}
      </div>
    </div>
  )
}

export default Posters
