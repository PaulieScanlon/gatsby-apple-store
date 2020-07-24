import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { Flex } from 'theme-ui'
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
          width: 200,
          p: 3,
          a: {
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
            const { name, to, url } = item
            return url ? (
              <MenuLink key={index} href={url} className="reach-menu-link">
                {`visit ${name} store`}
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

// import React, { useState } from 'react'
// import PropTypes from 'prop-types'
// import { Flex, Box } from 'theme-ui'

// export const Dropdown = ({ sx, trigger, children }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const handleMenuOpen = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   const handleMenuClose = () => {
//     setIsMenuOpen(false)
//   }

//   const handleOnBlur = (event) => {
//     console.log(event)
//     // if (
//     //   !event.target.hasAttributes([
//     //     'data-dropdown-trigger',
//     //     'data-dropdown-menu',
//     //   ])
//     // ) {
//     //   setIsMenuOpen(false)
//     // }
//   }

//   const handleKeyDown = (event) => {
//     if (event.keyCode === 13) {
//       handleMenuOpen()
//     }
//   }

//   return (
//     <Flex sx={{ position: 'relative', alignItems: 'center', ...sx }}>
//       <Flex
//         data-dropdown-trigger
//         role="button"
//         title="Dropdown Menu"
//         ariaLabel="Toggle menu"
//         tabIndex={0}
//         sx={{
//           alignItems: 'center',
//           ':focus': {
//             outlineColor: 'highlight',
//           },
//         }}
//         onBlur={handleOnBlur}
//         onKeyDown={(event) => handleKeyDown(event)}
//         onClick={handleMenuOpen}
//       >
//         {trigger}
//       </Flex>
//       {isMenuOpen && (
//         <Box
//           data-dropdown-menu
//           sx={{
//             position: 'absolute',
//             top: '100%',
//             right: -2,
//             width: 200,
//             backgroundColor: 'background',
//             borderRadius: 0,
//             boxShadow: 0,
//             p: 3,
//           }}
//           onBlur={handleOnBlur}
//         >
//           {children}
//         </Box>
//       )}
//     </Flex>
//   )
// }

// Dropdown.propTypes = {
//   /** Theme UI sx prop */
//   sx: PropTypes.any,
//   /** Trigger element */
//   trigger: PropTypes.any,
// }
