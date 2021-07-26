import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'
// import { IoLogoInstagram, IoLogoVk } from "react-icons/io5";

function Posters() {

  var dateNow = new Date();
  var indexPosters = 0;

  const postersData = useStaticQuery(graphql`
  {
    allContentfulEvents(sort: {fields: date, order: ASC}) {
      nodes {
        id
        title
        date
        poster_image {
          description
          gatsbyImageData(
            quality: 90
            width: 1000
            placeholder: BLURRED
          )
        }
      }
    }
  }
`)


  return (
    <div className="posters">
      <div className="posters__block">
      {postersData.allContentfulEvents.nodes.map(posters => {
        const { id, date, poster_image } = posters;
        const imgSrc = getImage(poster_image);

        const classImgGrid = ['one', 'two', 'three', 'four', 'five', 'six'];

        if ((Date.parse(date) > Date.parse(dateNow)) && indexPosters < 6) {
          indexPosters++;

          return (
            <div className={`post ` + classImgGrid[indexPosters - 1]} key={id}>
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
