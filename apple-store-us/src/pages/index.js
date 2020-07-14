import React from 'react'
import { Container, Heading } from 'theme-ui'

import { useShopify } from 'gatsby-theme-apple-store'

const IndexPage = () => {
  const products = useShopify()
  return (
    <Container>
      <Box
        sx={{
          pt: 7,
        }}
      >
        <Heading as="h1">US Store</Heading>
        <Heading as="h2">Products</Heading>
      </Box>
      <code>
        <pre>{JSON.stringify(products.allShopifyProduct.edges, null, 2)}</pre>
      </code>
    </Container>
  )
}

export default IndexPage
