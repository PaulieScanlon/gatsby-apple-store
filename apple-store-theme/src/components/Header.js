import React, { Fragment } from 'react'
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
            <Fragment>
              <Grid
                sx={{
                  display: ['none', 'grid'],
                  gridTemplateColumns: 'auto auto auto',
                  gridGap: 1,
                }}
              >
                <NavLink as={GatsbyLink} to="/products">
                  products
                </NavLink>
                <Dropdown
                  trigger={
                    <Box
                      as={NavLink}
                      sx={{
                        cursor: 'pointer',
                      }}
                    >
                      Stores{' '}
                      <Box as="span" aria-hidden sx={{ ml: 1 }}>
                        ▾
                      </Box>
                    </Box>
                  }
                  items={[...associateStores]}
                />
                <NavLink as={GatsbyLink} to="/cart">
                  <Cart />
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
          )}
        </Flex>
      </Card>
    </Box>
  )
}
