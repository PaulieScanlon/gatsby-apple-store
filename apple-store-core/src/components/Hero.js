import React from 'react'

import { Box, Container, Heading, Text, Divider } from 'theme-ui'

import { ApplePattern } from './ApplePattern'

import { useShopify } from '../hooks/useShopify'

export const Hero = () => {
  const {
    shopifyShop: { name, description },
  } = useShopify()

  return (
    <Box
      sx={{
        position: 'relative',
        alignItems: 'center',
        display: 'flex',
        pt: 8,
        pb: 4,
        px: [2, 3],
        minHeight: 'hero',
        backgroundColor: 'primaryLight',
      }}
    >
      <Container
        sx={{
          zIndex: 1,
        }}
      >
        <Heading as="div" variant="styles.h1">
          Oh hey there!{' '}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </Heading>
        <Heading as="h1" variant="styles.h1">
          {name}
        </Heading>
        <Divider variant="styles.spacer.lg" />
        <Text>{description}</Text>
        <Divider variant="styles.spacer.sm" />
      </Container>
      <ApplePattern />
    </Box>
  )
}
