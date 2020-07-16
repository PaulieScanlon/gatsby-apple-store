import React, { Fragment } from 'react'
import { Container, Heading } from 'theme-ui'

import { useShopify } from 'apple-store-core'
import { Hero } from 'apple-store-theme'

const IndexPage = () => {
  const products = useShopify()

  return (
    <Fragment>
      <Hero>
        <Heading as="h1">UK Store</Heading>
      </Hero>
      <Container>
        <code>
          <pre>{JSON.stringify(products.allShopifyProduct.edges, null, 2)}</pre>
        </code>
      </Container>
    </Fragment>
  )
}

export default IndexPage
