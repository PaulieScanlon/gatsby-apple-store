import React from 'react'
import { Box, Text, Card, Container } from 'theme-ui'

const Header = () => {
  return (
    <Box
      as="header"
      sx={{
        variant: 'styles.header',
      }}
    >
      <Container
        sx={{
          px: 3,
        }}
      >
        <Card>
          <Text>Header</Text>
        </Card>
      </Container>
    </Box>
  )
}

export default Header
