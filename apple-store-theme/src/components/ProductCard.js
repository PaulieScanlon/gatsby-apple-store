import React from 'react'
import PropTypes from 'prop-types'

import {
  Flex,
  Box,
  Card,
  Image,
  Heading,
  Text,
  Divider,
  Button,
} from 'theme-ui'

import Img from 'gatsby-image'

import { getCurrency } from '../../utils/getCurrency'

export const ProductCard = ({
  fluid,
  image,
  heading,
  description,
  price,
  currency,
  cta,
}) => {
  return (
    <Box as="article">
      <Card
        sx={{
          '.gatsby-image-wrapper': {
            borderRadius: 0,
            overflow: 'hidden',
          },
        }}
      >
        {image && (
          <Image
            src={image}
            alt={heading}
            sx={{
              borderRadius: 0,
              overflow: 'hidden',
            }}
          />
        )}
        {fluid && <Img fluid={fluid} alt={heading} />}

        <Box
          sx={{
            pt: 2,
          }}
        >
          <Divider variant="styles.spacer.sm" />
          <Heading as="div" variant="styles.h3">
            {heading}
          </Heading>
          <Divider variant="styles.spacer.sm" />
          <Flex
            sx={{
              alignItems: 'flex-end',
            }}
          >
            <Heading
              as="div"
              variant="styles.h4"
              sx={{ color: 'primary', fontWeight: 'light', mb: 2, mr: 1 }}
            >
              {getCurrency(price, currency)}
            </Heading>
            <Heading
              as="div"
              variant="styles.h1"
              sx={{ color: 'primary', fontWeight: 'light' }}
            >
              {price}
            </Heading>
          </Flex>
          <Divider variant="styles.spacer.md" />
          <Text sx={{ color: 'gray', lineHeight: 'text', minHeight: '90px' }}>
            {description}
          </Text>
          <Divider variant="styles.spacer.lg" />
          <Flex
            sx={{
              justifyContent: 'flex-end',
            }}
          >
            <Button>{cta}</Button>
          </Flex>
        </Box>
      </Card>
    </Box>
  )
}

ProductCard.propTypes = {
  /** The childImageSharp fluid.src */
  fluid: PropTypes.shape({
    src: PropTypes.string.isRequired,
  }),
  /** Escape hatch to demo image url */
  image: PropTypes.string,
  /** The Product heading */
  heading: PropTypes.string.isRequired,
  /** The Product description */
  description: PropTypes.string.isRequired,
  /** The Product price */
  price: PropTypes.number.isRequired,
  /** The Product currency */
  currency: PropTypes.string.isRequired,
  /** The button Call To Action */
  cta: PropTypes.string.isRequired,
}
