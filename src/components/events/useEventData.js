import { useStaticQuery, graphql } from "gatsby"

export const useEventData = () => {
  const { allWpPost } = useStaticQuery(graphql`
  {
    allWpPost(sort: {fields: events___date, order: ASC}) {
      nodes {
        title
        id
        events {
          description
          date
          genre
          actors
          age
          duration
          colorbackground
          posterImage {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(
                  quality: 90
                  placeholder: DOMINANT_COLOR
                  jpgOptions: {progressive: true}
                )
              }
            }
          }
        }
      }
      totalCount
    }
  }
`)

  return allWpPost
}