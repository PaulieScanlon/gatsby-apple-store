import React, { Fragment } from 'react'
import { Heading } from 'theme-ui'

const IndexPage = ({ products }) => {
  return (
    <Fragment>
      <Heading as="h2">Products</Heading>
      <code>
        <pre>{JSON.stringify(products.allShopifyProduct.edges, null, 2)}</pre>
      </code>
    </Fragment>
  )
}

export default IndexPage
