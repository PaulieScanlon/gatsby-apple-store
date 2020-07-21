import React, { Fragment } from 'react'
import { Container } from 'theme-ui'

import { useShopify } from 'apple-store-core'
import { Hero, TopPicks } from 'apple-store-theme'

const IndexPage = () => {
  const {
    shopifyShop: { name, description },
    allShopifyProduct: { edges },
  } = useShopify()

  return (
    <Fragment>
      <Hero name={name} description={description} />
      <Container>
        <TopPicks edges={edges} />
      </Container>
    </Fragment>
  )
}

export default IndexPage
