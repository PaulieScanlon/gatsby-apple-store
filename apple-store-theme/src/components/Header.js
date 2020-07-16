import React from 'react'
import { Box, Flex, Card } from 'theme-ui'

import { Logo } from './Logo'

export const Header = () => {
  return (
    <Box
      as="header"
      sx={{
        variant: 'styles.header',
      }}
    >
      <Card>
        <Flex
          sx={{
            alignItems: 'center',
            m: 'auto',
            px: 3,
          }}
        >
          <Logo />
          <Box
            sx={{
              fontFamily: 'heading',
              fontSize: 2,
              ml: 2,
              mt: 1,
            }}
          >
            Apple Store
          </Box>
        </Flex>
      </Card>
    </Box>
  )
}
