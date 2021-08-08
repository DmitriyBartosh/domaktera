import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image'
import PersonPage from '../components/person/personPage'
import { prozonov } from '../text/personInfo'

function Prozorovnikolai() {
  const photo = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "4"}, sourceInstanceName: {eq: "person"}}) {
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
    <PersonPage name={prozonov.name} description={prozonov.description} awards={prozonov.awards} works={prozonov.works} caption={prozonov.caption} photo={photoSrc} />
  )
}

export default Prozorovnikolai
