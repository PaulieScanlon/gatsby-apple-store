import React from 'react'
import { Box, Flex, Card, NavLink, Grid, MenuButton } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import { useSite } from '../hooks/useSite'

import { Logo } from './Logo'
import { Cart } from './Cart'
import { Dropdown } from './Dropdown'

export const Header = () => {
  const {
    site: {
      siteMetadata: { name, type, associateStores },
    },
  } = useSite()

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
            justifyContent: 'space-between',
          }}
        >
          <NavLink as={GatsbyLink} to="/">
            <Grid
              sx={{
                alignItems: 'center',
                gridTemplateColumns: 'auto auto',
                gridGap: 2,
              }}
            >
              <Logo />
              <Box
                sx={{
                  fontFamily: 'heading',
                  fontSize: 1,
                  mr: 2,
                }}
              >
                {name}
              </Box>
            </Grid>
          </NavLink>

          {type === 'store' && (
            <Grid
              sx={{
                alignItems: 'center',
                gridTemplateColumns: 'auto auto',
                gridGap: 3,
              }}
            >
              <NavLink
                as={GatsbyLink}
                to="/products"
                sx={{
                  display: ['none', 'inline-flex'],
                }}
              >
                products
              </NavLink>
              <NavLink
                as={GatsbyLink}
                to="/cart"
                sx={{
                  display: ['none', 'inline-flex'],
                }}
              >
                <Cart />
              </NavLink>
              <Dropdown
                sx={{
                  display: ['block', 'none'],
                }}
                trigger={<MenuButton as="div" tabIndex={-1} />}
                items={[
                  {
                    name: 'products',
                    to: '/products',
                  },
                  {
                    name: 'cart',
                    to: '/cart',
                  },
                  ...associateStores,
                ]}
              />
            </Grid>
          )}
        </Flex>
      </Card>
    </Box>
  )
}
