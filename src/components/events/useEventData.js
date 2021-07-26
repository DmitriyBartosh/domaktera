import { useStaticQuery, graphql } from "gatsby"

export const useEventData = () => {
  const { allContentfulEvents } = useStaticQuery(
    graphql`
      query EventData {
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
            duration
            poster_image {
              gatsbyImageData(quality: 90, jpegProgressive: true, placeholder: DOMINANT_COLOR)
            }
            colorBackground
          }
          totalCount
        }
      }
    `)

  return allContentfulEvents
}