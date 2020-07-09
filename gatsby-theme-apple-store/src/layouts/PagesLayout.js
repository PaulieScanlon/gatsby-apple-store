import React, { Fragment, cloneElement } from 'react'
import { Box, Container, Heading, Text } from 'theme-ui'

import { useShopify } from 'gatsby-theme-apple-store'

const PagesLayout = ({ children }) => {
  const products = useShopify()

  return (
    <Fragment>
      <Box as="header">
        <Text>Header</Text>
      </Box>
      <Box as="main">
        <Container>
          <Box as="section">
            <Heading as="h1" variant="h1">
              Store name
            </Heading>
          </Box>
          <Box as="section">{cloneElement(children, { products })}</Box>
        </Container>
      </Box>
      <Box as="footer">
        <Text>Footer</Text>
      </Box>
    </Fragment>
  )
}

export default PagesLayout
