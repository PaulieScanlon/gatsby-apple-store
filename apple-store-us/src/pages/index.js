import React, { Fragment } from 'react'
import { Container } from 'theme-ui'

import { Hero, TopPicks, useShopify } from 'apple-store-core'

const IndexPage = () => {
  const {
    allShopifyProduct: { edges },
  } = useShopify()

  return (
    <Fragment>
      <Hero />
      <Container>
        <TopPicks edges={edges} />
      </Container>
    </Fragment>
  )
}

export default IndexPage
