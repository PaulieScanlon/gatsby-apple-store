import React, { Fragment } from 'react'
import { Container } from 'theme-ui'

import { Hero } from '../components/Hero'
import { TopPicks } from '../components/TopPicks'
import { MarketingMessage } from '../components/MarketingMessage'

import { useShopify } from '../hooks'

export const IndexView = () => {
  const {
    allShopifyProduct: { edges },
  } = useShopify()

  return (
    <Fragment>
      <Hero />
      <Container>
        <TopPicks edges={edges} />
      </Container>
      <MarketingMessage />
    </Fragment>
  )
}
