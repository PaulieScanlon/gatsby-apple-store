import React, { Fragment } from 'react'
import { Box, Flex, Card, NavLink, Grid, MenuButton } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

import { useSite } from '../hooks/useSite'

import { Logo } from './Logo'
import { CartIcon } from './CartIcon'
import { Dropdown } from './Dropdown'

export const Header = () => {
  const {
    site: {
      siteMetadata: { name, associateStores },
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
          <NavLink as={GatsbyLink} to="/" sx={{ pl: 0 }}>
            <Grid
              sx={{
                alignItems: 'center',
                gridTemplateColumns: 'auto auto',
                gridGap: 2,
              }}
            >
              <Logo />
              {name}
            </Grid>
          </NavLink>

          <Fragment>
            <Grid
              sx={{
                display: ['none', 'grid'],
                gridTemplateColumns: 'auto auto auto',
                gridGap: 3,
              }}
            >
              <NavLink as={GatsbyLink} to="/products">
                products
              </NavLink>
              <Dropdown
                trigger={
                  <Fragment>
                    stores{' '}
                    <Box as="span" aria-hidden sx={{ ml: 2 }}>
                      ▾
                    </Box>
                  </Fragment>
                }
                items={[...associateStores]}
              />
              <NavLink as={GatsbyLink} to="/cart">
                <CartIcon />
              </NavLink>
            </Grid>
            <Flex
              sx={{
                display: ['flex', 'none'],
              }}
            >
              <Dropdown
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
            </Flex>
          </Fragment>
        </Flex>
      </Card>
    </Box>
  )
}
