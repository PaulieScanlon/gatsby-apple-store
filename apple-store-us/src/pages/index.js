import React, { Fragment } from 'react'
import { Heading } from 'theme-ui'

import { useShopify } from 'gatsby-theme-apple-store'

const IndexPage = () => {
  const products = useShopify()
  return (
    <Fragment>
      <Heading as="h1">US Store</Heading>
      <Heading as="h2">Products</Heading>
      <code>
        <pre>{JSON.stringify(products.allShopifyProduct.edges, null, 2)}</pre>
      </code>
    </Fragment>
  )
}

export default IndexPage
