import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Heading, Text, Divider } from 'theme-ui'

export const Hero = ({ name, description }) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        pt: 7,
        pb: 4,
        minHeight: 'hero',
        backgroundColor: 'primaryLight',
      }}
    >
      <Container>
        <Heading as="div" variant="styles.h1">
          Oh hey there!{' '}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </Heading>
        <Heading as="h1" variant="styles.h1">
          {name}
        </Heading>
        <Divider variant="styles.spacer.lg" />
        <Text>{description}</Text>
      </Container>
    </Box>
  )
}

Hero.propTypes = {
  /** The name of the store */
  name: PropTypes.string.isRequired,
  /** The description of the store */
  description: PropTypes.string.isRequired,
}
