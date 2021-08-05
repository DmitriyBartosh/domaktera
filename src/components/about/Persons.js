import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

function Persons() {
  const personName = ['Пашнин Андрей', 'Гвоздиков Юрий', 'Дьяконов Валерий', 'Прозоров Николай'];

  const photo = useStaticQuery(graphql`
    {
      allFile(filter: {sourceInstanceName: {eq: "person"}}, sort: {fields: name}) {
        nodes {
          childrenImageSharp {
            gatsbyImageData(
              width: 600
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
    <div className="persons">
      {photo.allFile.nodes.map((posterPhoto, index) => {
        const { childrenImageSharp } = posterPhoto;
        const photoSrc = getImage(childrenImageSharp[0]);


        return (
          <div className="persons__photo" key={index}>
            <div className="photoContainer">
              <GatsbyImage image={photoSrc} alt='Фото Дом Актёра' />
            </div>
            <div className="photoLine" />
            <p className="photoName">{personName[index]}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Persons
