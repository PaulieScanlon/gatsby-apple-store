import React, { Fragment, useState } from 'react'
import { Box, Flex, Card, NavLink, Grid, MenuButton } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'

import { Logo } from './Logo'
import { CartIcon } from './CartIcon'
import { Dropdown } from './Dropdown'

import { useSite } from 'apple-store-theme'

export const Header = () => {
  const {
    site: {
      siteMetadata: { name, associateStores },
    },
  } = useSite()

  const [isFadeVisible, setIsFadeVisible] = useState(true)

  useScrollPosition(
    ({ currPos }) => {
      if (currPos.y >= 0) {
        setIsFadeVisible(true)
      } else {
        setIsFadeVisible(false)
      }
    },
    [isFadeVisible]
  )

  return (
    <Fragment>
      <Box
        sx={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)',
          top: (theme) => (isFadeVisible ? `-${theme.sizes.fade}px` : 0),
          left: 0,
          position: 'fixed',
          width: '100%',
          height: 'fade',
          zIndex: 'fade',
          transition: '.2s linear top',
        }}
      />

      <Box
        as="header"
        sx={{
          variant: 'styles.header',
          zIndex: 'header',
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
    </Fragment>
  )
}
