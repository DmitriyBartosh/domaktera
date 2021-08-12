import { useStaticQuery, graphql } from "gatsby"

export const useEventData = () => {
  const { allContentfulEvents } = useStaticQuery(graphql`
  {
    allContentfulEvents(sort: {fields: date, order: ASC}) {
      nodes {
        id
        title
        description {
          raw
        }
        date
        genre
        actors
        age
        colorBackground
        duration
        poster_image {
          description
          gatsbyImageData(jpegProgressive: true, quality: 90, placeholder: DOMINANT_COLOR)
        }
      }
      totalCount
    }
  }
`)

  return allContentfulEvents
}