import React from 'react'
import { Box, Grid, Card, Text, Link, Divider } from 'theme-ui'

import { useSite } from 'apple-store-theme'

export const Footer = () => {
  const {
    site: {
      siteMetadata: { name },
    },
  } = useSite()

  return (
    <Box
      as="footer"
      sx={{
        variant: 'styles.footer',
      }}
    >
      <Card variant="secondary">
        <Grid
          sx={{
            alignItems: 'flex-start',
            fontSize: 0,
            gridTemplateColumns: ['auto', 'auto auto'],
          }}
        >
          <Box>
            <Text variant="bold" sx={{ fontSize: 1 }}>
              {name}
            </Text>
            <Divider variant="styles.spacer.sm" />
            <Text variant="default" sx={{ fontSize: 'inherit' }}>
              A Shopify store to demo Gatsby Cloud{' '}
              <span role="img" aria-label="cloud emoji">
                ☁️
              </span>
            </Text>
            <Divider variant="styles.spacer.sm" />
            <Text variant="bold" sx={{ fontSize: 1 }}>
              Style Guide
            </Text>
            <Link
              variant="footer"
              sx={{ fontSize: 'inherit' }}
              href="https://gatsby-apple-store-style-guide.netlify.app/"
              target="_blank"
            >
              gatsby-apple-store-style-guide.netlify.app
            </Link>
          </Box>
          <Box>
            <Text variant="bold" sx={{ fontSize: 1 }}>
              Twitter
            </Text>
            <Link
              variant="footer"
              sx={{ fontSize: 'inherit' }}
              href="https://twitter.com/PaulieScanlon"
              target="_blank"
            >
              @PaulieScanlon
            </Link>
            <Divider variant="styles.spacer.sm" />
            <Text variant="bold" sx={{ fontSize: 1 }}>
              GitHub
            </Text>
            <Link
              variant="footer"
              sx={{ fontSize: 'inherit' }}
              href="https://github.com/PaulieScanlon"
              target="_blank"
            >
              github.com/PaulieScanlon
            </Link>
            <Divider variant="styles.spacer.sm" />
            <Text variant="bold" sx={{ fontSize: 1 }}>
              Blog
            </Text>
            <Link
              variant="footer"
              sx={{ fontSize: 'inherit' }}
              href="https://paulie.dev"
              target="_blank"
            >
              paulie.dev
            </Link>
            <Divider variant="styles.spacer.sm" />
          </Box>
        </Grid>
      </Card>
    </Box>
  )
}
