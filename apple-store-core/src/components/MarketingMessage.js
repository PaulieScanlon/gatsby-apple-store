import React, { Fragment } from 'react'
import { Box, Container, Heading, Text, Button, Link, Divider } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

export const MarketingMessage = () => {
  return (
    <Fragment>
      <Divider variant="styles.spacer.lg" />
      <Box
        sx={{
          backgroundColor: 'primaryMid',
        }}
      >
        <Container>
          <Box
            sx={{
              px: 3,
              py: 5,
            }}
          >
            <Heading as="h3" variant="styles.h3">
              Marketing Message
            </Heading>
            <Divider variant="styles.spacer.md" />
            <Text variant="default" sx={{ fontSize: 2 }}>
              You can use this space for a persuasive marketing message, plus a
              call to action!
            </Text>
            <Divider variant="styles.spacer.sm" />
            <Link as={GatsbyLink} variant="button" to="/products">
              <Button variant="accent">Link to products</Button>
            </Link>
          </Box>
        </Container>
      </Box>
      <Divider variant="styles.spacer.lg" />
    </Fragment>
  )
}
