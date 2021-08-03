import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
import { useEventData } from '../events/useEventData'
// import { IoLogoInstagram, IoLogoVk } from "react-icons/io5";

function Posters() {

  var dateNow = new Date();
  var indexPosters = 0;
  const { nodes } = useEventData();

  return (
    <div className="posters">
      <div className="posters__block">
      {nodes.map(posters => {
        const { id, date, poster_image } = posters;
        const imgSrc = getImage(poster_image);

        if ((Date.parse(date) > Date.parse(dateNow)) && indexPosters < 1) {
          indexPosters++;

          return (
            <div className={'post three'} key={id}>
              <GatsbyImage image={imgSrc} alt={poster_image.description}/>
            </div>
          )
        }
        else{
          return null;
        }
      })}
      </div>
    </div>
  )
}

export default Posters
