import React from 'react'
import { Box, Text, Card } from 'theme-ui'

const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        variant: 'styles.footer',
      }}
    >
      <Card variant="secondary">
        <Text>Footer</Text>
      </Card>
    </Box>
  )
}

export default Footer
