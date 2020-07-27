module.exports = (themeOptions) => {
  const { shopName, accessToken } = themeOptions

  return {
    siteMetadata: {
      name: ``,
      cta: ``,
      associateStores: [
        {
          name: ``,
          url: ``,
        },
      ],
    },
    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-shopify`,
        options: {
          shopName: `${shopName}`,
          accessToken: `${accessToken}`,
          apiVersion: `2020-07`,
          verbose: true,
          paginationSize: 250,
          includeCollections: [`shop`, `content`],
          shopifyQueries: {
            products: `query GetProducts($first: Int!, $after: String) {
              products(first: $first, after: $after) {
                edges {
                  cursor
                  node {
                    availableForSale
                    createdAt
                    description
                    descriptionHtml
                    handle
                    id
                    images(first: 250) {
                      edges {
                        node {
                          id
                          altText
                          originalSrc
                        }
                      }
                    }
                    metafields(first: 250) {
                      edges {
                        node {
                          description
                          id
                          key
                          namespace
                          value
                          valueType
                        }
                      }
                    }
                    onlineStoreUrl
                    options {
                      id
                      name
                      values
                    }
                    priceRange {
                      minVariantPrice {
                        amount
                        currencyCode
                      }
                      maxVariantPrice {
                        amount
                        currencyCode
                      }
                    }
                    productType
                    publishedAt
                    tags
                    title
                    totalInventory
                    updatedAt
                    variants(first: 250) {
                      edges {
                        node {
                          availableForSale
                          compareAtPrice
                          compareAtPriceV2 {
                            amount
                            currencyCode
                          }
                          id
                          image {
                            altText
                            id
                            originalSrc
                          }
                          metafields(first: 250) {
                            edges {
                              node {
                                description
                                id
                                key
                                namespace
                                value
                                valueType
                              }
                            }
                          }
                          price
                          priceV2 {
                            amount
                            currencyCode
                          }
                          requiresShipping
                          selectedOptions {
                            name
                            value
                          }
                          sku
                          title
                          weight
                          weightUnit
                          presentmentPrices(first: 250) {
                            edges {
                              node {
                                price {
                                  amount
                                  currencyCode
                                }
                                compareAtPrice {
                                  amount
                                  currencyCode
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                    vendor
                  }
                }
              }
            }`,
          },
        },
      },
      {
        resolve: `gatsby-plugin-layout`,
        options: {
          component: require.resolve(`./src/layouts/PagesLayout.js`),
        },
      },
    ],
  }
}
