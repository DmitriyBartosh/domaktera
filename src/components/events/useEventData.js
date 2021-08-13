import { useStaticQuery, graphql } from "gatsby"

export const useEventData = () => {
  const { domaktera } = useStaticQuery(graphql`
  {
    domaktera {
      posts(first: 100) {
        nodes {
          title
          id
          events {
            actors
            age
            colorbackground
            date
            description
            duration
            genre
            posterImage {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`)

  return domaktera
}