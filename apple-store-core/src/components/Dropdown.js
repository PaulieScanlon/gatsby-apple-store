import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Avatar, Divider, NavLink } from 'theme-ui'
import { Menu, MenuButton, MenuList, MenuLink } from '@reach/menu-button'
import '@reach/menu-button/styles.css'

export const Dropdown = ({ sx, trigger, items }) => {
  return (
    <Flex
      sx={{
        ...sx,
        div: {
          '&[data-reach-menu][data-reach-menu-popover]': {
            position: 'relative',
          },
        },
        '.reach-menu-list': {
          border: 'none',
          borderRadius: 0,
          boxShadow: 0,
          position: 'absolute',
          top: (theme) => `${theme.space[4]}px`,
          right: 0,
          width: 180,
          p: 3,
          fontFamily: 'inherit',
          fontWeight: 'inherit',
          fontSize: 'inherit',
          a: {
            alignItems: 'center',
            display: 'flex',
            borderRadius: (theme) => `${theme.radii[0]}px`,
            padding: (theme) => `${theme.space[1]}px ${theme.space[2]}px`,
            transition: '.2s linear background-color',
            textTransform: 'capitalize',
            '&[data-reach-menu-item][data-selected]': {
              color: (theme) => `${theme.colors.text}`,
              background: (theme) => `${theme.colors.primaryMid}`,
            },
          },
        },
      }}
    >
      <Menu className="reach-menu">
        <MenuButton as={NavLink} tabIndex={0}>
          {trigger}
        </MenuButton>
        <MenuList portal={false} className="reach-menu-list">
          {items.map((item, index) => {
            const { name, url, to, icon } = item
            return (
              <Fragment key={index}>
                {url ? (
                  <MenuLink href={url} className="reach-menu-link">
                    {icon && (
                      <Avatar
                        src={icon}
                        sx={{ width: 24, height: 24, mr: 3 }}
                      />
                    )}
                    {name}
                  </MenuLink>
                ) : (
                  <MenuLink
                    key={index}
                    as={GatsbyLink}
                    to={to}
                    className="reach-menu-link"
                  >
                    {name}
                  </MenuLink>
                )}
                {index === items.length - 2 ? <Divider sx={{ my: 2 }} /> : null}
              </Fragment>
            )
          })}
        </MenuList>
      </Menu>
    </Flex>
  )
}

Dropdown.propTypes = {
  /** Theme UI sx prop */
  sx: PropTypes.any,
  /** Trigger element */
  trigger: PropTypes.any,
  /** Items to render in menu-list */
  items: PropTypes.any,
}
