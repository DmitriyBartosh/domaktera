import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image'
import PersonPage from '../components/person/personPage'
import { pashnin } from '../text/personInfo'

function Pashninandrei() {
  const photo = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "1"}, sourceInstanceName: {eq: "person"}}) {
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
    <PersonPage name={pashnin.name} description={pashnin.description} awards={pashnin.awards} works={pashnin.works} caption={pashnin.caption} photo={photoSrc} />
  )
}

export default Pashninandrei
