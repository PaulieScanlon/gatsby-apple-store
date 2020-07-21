import React, { Fragment } from 'react'
import { Container, Heading } from 'theme-ui'

import { useShopify } from 'apple-store-core'
import { Hero, TopPicks } from 'apple-store-theme'

const IndexPage = () => {
  const {
    allShopifyProduct: { edges },
  } = useShopify()

  return (
    <Fragment>
      <Hero>
        <Heading as="h1">US Store</Heading>
      </Hero>
      <Container>
        <TopPicks edges={edges} />
      </Container>
    </Fragment>
  )
}

export default IndexPage
