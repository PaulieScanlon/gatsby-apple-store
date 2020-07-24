import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Flex, Avatar, Divider } from 'theme-ui'
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
        '.reach-menu-button': {
          alignItems: 'center',
          border: 'none',
          p: 0,
          lineHeight: 'heading',
          backgroundColor: 'background',
          ':focus': {
            outlineColor: 'highlight',
          },
        },
        '.reach-menu-list': {
          border: 'none',
          position: 'absolute',
          top: (theme) => `${theme.space[4]}px`,
          right: 0,
          backgroundColor: 'background',
          borderRadius: 0,
          boxShadow: 0,
          width: 170,
          p: 3,
          a: {
            alignItems: 'center',
            display: 'flex',
            borderRadius: (theme) => `${theme.radii[0]}px`,
            padding: (theme) => `${theme.space[1]}px ${theme.space[2]}px`,
            fontFamily: (theme) => `${theme.fonts.body}`,
            fontSize: (theme) => `${theme.fontSizes[0]}px`,
            textDecoration: 'none',
            textTransform: 'capitalize',
            transition: '.2s linear background-color',
            '&[data-reach-menu-item][data-selected]': {
              color: (theme) => `${theme.colors.text}`,
              background: (theme) => `${theme.colors.primaryMid}`,
            },
          },
        },
      }}
    >
      <Menu className="reach-menu">
        <MenuButton className="reach-menu-button">{trigger}</MenuButton>
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
