import React from 'react'
import PropTypes from 'prop-types'
import { Box, Container, Heading, Text } from 'theme-ui'

export const Hero = ({ name, description }) => {
  return (
    <Box
      sx={{
        pt: 7,
        pb: 4,
        minHeight: 'hero',
        backgroundColor: 'primaryLight',
      }}
    >
      <Container>
        <Heading as="h1" variant="styles.h1">
          {name}
        </Heading>
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
