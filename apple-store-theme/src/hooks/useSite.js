import { useStaticQuery, graphql } from 'gatsby'

export const useSite = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            description
            type
            associateStores {
              name
              url
            }
          }
        }
      }
    `
  )
}
