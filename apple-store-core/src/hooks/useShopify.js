import { useStaticQuery, graphql } from 'gatsby'

export const useShopify = () => {
  return useStaticQuery(
    graphql`
      query {
        shopifyShop {
          name
          description
          moneyFormat
        }
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
