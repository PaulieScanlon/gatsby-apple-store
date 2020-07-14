import { useStaticQuery, graphql } from 'gatsby'

export const useShopify = () => {
  return useStaticQuery(
    graphql`
      query {
        allShopifyProduct {
          edges {
            node {
              title
              handle
              productType
              vendor
              variants {
                title
                weight
                weightUnit
                presentmentPrices {
                  edges {
                    node {
                      price {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )
}
