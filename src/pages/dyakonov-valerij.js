import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image'
import PersonPage from '../components/person/personPage'
import { dyakonov } from '../text/personInfo'

function Dyakonovvalerij() {
  const photo = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "3"}, sourceInstanceName: {eq: "person"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData(
            quality: 90
            jpgOptions: {progressive: true}
            placeholder: DOMINANT_COLOR
            width: 800
          )
        }
      }
    }
  }
  `)

  const photoSrc = getImage(photo.allFile.nodes[0].childImageSharp);

  return (
    <PersonPage name={dyakonov.name} description={dyakonov.description} awards={dyakonov.awards} works={dyakonov.works} caption={dyakonov.caption} photo={photoSrc} />
  )
}

export default Dyakonovvalerij
