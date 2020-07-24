import React, { Fragment } from 'react'
import { Box, Container } from 'theme-ui'

import { Products, useShopify } from 'apple-store-core'

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
