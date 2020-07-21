import { useStaticQuery, graphql } from 'gatsby'

export const useShopify = () => {
  return useStaticQuery(
    graphql`
      query {
        allShopifyProduct {
          edges {
            node {
              title
              description
              images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                originalSrc
              }
              variants {
                price
                weight
                weightUnit
                priceV2 {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `
  )
}
