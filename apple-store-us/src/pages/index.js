import React, { Fragment } from 'react'
import { Container } from 'theme-ui'

import { useShopify } from 'apple-store-core'
import { Hero, TopPicks } from 'apple-store-theme'

const IndexPage = () => {
  const {
    allShopifyProduct: { edges },
  } = useShopify()

  return (
    <Fragment>
      <Hero name="US Name" description="US Description" />
      <Container>
        <TopPicks edges={edges} />
      </Container>
    </Fragment>
  )
}

export default IndexPage
