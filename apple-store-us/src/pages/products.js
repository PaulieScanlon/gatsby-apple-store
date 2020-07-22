import React, { Fragment } from 'react'
import { Box, Container } from 'theme-ui'

import { useShopify } from 'apple-store-core'
import { Products } from 'apple-store-theme'

const ProductsPage = () => {
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

export default ProductsPage
