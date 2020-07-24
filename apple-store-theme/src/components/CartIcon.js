import React, { useContext } from 'react'
import { Flex, Box } from 'theme-ui'

import { Context } from '../context'

export const CartIcon = () => {
  const {
    state: { itemsInCart },
  } = useContext(Context)

  return (
    <Flex sx={{ alignItems: 'center', position: 'relative' }}>
      {itemsInCart.length > 0 ? (
        <Box
          sx={{
            position: 'absolute',
            width: 22,
            height: 22,
            right: '-10px',
            top: '-10px',
            backgroundColor: 'accent',
            borderRadius: '50%',
          }}
        >
          <Flex
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              as="span"
              sx={{
                color: 'text',
                fontSize: '10px',
                lineHeight: 0,
                textAlign: 'center',
                mt: '2px',
              }}
            >
              {itemsInCart.length}
            </Box>
          </Flex>
        </Box>
      ) : null}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    </Flex>
  )
}
