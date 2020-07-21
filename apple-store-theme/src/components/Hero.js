import React from 'react'
import { Box, Container } from 'theme-ui'

export const Hero = ({ children }) => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 4,
        minHeight: 'hero',
        backgroundColor: 'primaryLight',
      }}
    >
      <Container>{children}</Container>
    </Box>
  )
}
