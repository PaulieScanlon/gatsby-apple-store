import { useStaticQuery, graphql } from 'gatsby'

export const useSite = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            siteUrl
            siteImage
            keywords
            lang
            cta
            associateStores {
              name
              url
              icon
            }
          }
        }
      }
    `
  )
}
