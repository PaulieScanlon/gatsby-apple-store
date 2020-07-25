import { useStaticQuery, graphql } from 'gatsby'

export const useSite = () => {
  return useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            associateStores {
              name
              url
              icon
            }
            cta
          }
        }
      }
    `
  )
}
