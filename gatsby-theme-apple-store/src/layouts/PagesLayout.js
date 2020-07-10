import React, { Fragment } from 'react'
import { Box, Container, Text } from 'theme-ui'

const PagesLayout = ({ children }) => {
  return (
    // <Fragment>{children}</Fragment>
    <Fragment>
      <Box as="header">
        <Text>Header</Text>
      </Box>
      <Box as="main">
        <Container>{children}</Container>
      </Box>
      <Box as="footer">
        <Text>Footer</Text>
      </Box>
    </Fragment>
  )
}

export default PagesLayout
