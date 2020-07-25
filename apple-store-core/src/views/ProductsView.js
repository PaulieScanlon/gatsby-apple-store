import React, { Fragment } from 'react'
import { Box, Container } from 'theme-ui'

import { Products } from '../components/Products'
import { useShopify } from '../hooks'

export const ProductsView = () => {
  const {
    allShopifyProduct: { edges },
  } = useShopify()

  return (
    <Fragment>
      <Box
        sx={{
          pt: 7,
        }}
      />
      <Container>
        <Products edges={edges} />
      </Container>
    </Fragment>
  )
}
