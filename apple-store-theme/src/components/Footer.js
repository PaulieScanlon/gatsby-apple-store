import React from 'react'
import { Box, Text, Card } from 'theme-ui'

export const Footer = () => {
  return (
    <Box
      as="footer"
      sx={{
        variant: 'styles.footer',
      }}
    >
      <Card variant="secondary">
        <Box>
          <Text>Footer</Text>
        </Box>
      </Card>
    </Box>
  )
}
