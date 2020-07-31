import React, { useContext, useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Flex,
  Box,
  Card,
  Badge,
  Heading,
  Text,
  Divider,
  Button,
} from 'theme-ui'

import Img from 'gatsby-image'

import { getCurrency } from '../../utils/'
import { Context } from '../context'
import { useSite, MatterWorld } from 'apple-store-theme'

export const ProductCard = ({
  fluid,
  image,
  heading,
  description,
  totalInventory,
  price,
  weight,
  weightUnit,
  currency,
  topPick,
}) => {
  const {
    state: { itemsInCart },
    dispatch,
  } = useContext(Context)

  const imageRef = useRef(null)
  const [imageProps, setImageProps] = useState(null)
  const [matterTrigger, setMatterTrigger] = useState()

  const {
    site: {
      siteMetadata: { cta },
    },
  } = useSite()

  const handleAddToCart = () => {
    setMatterTrigger(!matterTrigger)
    if (itemsInCart.filter((item) => item.heading === heading).length > 0) {
      dispatch({
        type: 'addDuplicateToCart',
        payload: {
          heading,
        },
      })
    } else {
      dispatch({
        type: 'addToCart',
        payload: {
          fluid,
          heading,
          description,
          price,
          currency,
          symbol: getCurrency(price, currency),
          quantity: 1,
          total: price,
        },
      })
    }
  }

  const handleResize = () => {
    setImageProps(imageRef.current.getBoundingClientRect())
  }

  useEffect(() => {
    setImageProps(imageRef.current.getBoundingClientRect())
    window.addEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Box as="article">
      <Card
        sx={{
          position: 'relative',
          overflow: 'hidden',
          '.gatsby-image-wrapper': {
            borderRadius: 0,
            overflow: 'hidden',
          },
        }}
      >
        {topPick && (
          <Box
            sx={{
              width: 200,
              backgroundColor: 'accent',
              position: 'absolute',
              top: 30,
              left: -55,
              textAlign: 'center',
              color: 'text',
              transform: 'rotate(-45deg)',
              zIndex: 'topPicks',
              boxShadow: 1,
            }}
          >
            <Text variant="bold" sx={{ py: 2 }}>
              top pick
            </Text>
          </Box>
        )}
        <MatterWorld sizeProps={imageProps} matterTrigger={matterTrigger} />
        <Box ref={imageRef}>
          <Img fluid={fluid} alt={heading} sx={{ zIndex: 1 }} />
        </Box>

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
          {totalInventory === 0 ? (
            <Badge variant="secondary">out of stock</Badge>
          ) : (
            <Badge variant="primary">only {totalInventory} left in stock</Badge>
          )}
          <Divider variant="styles.spacer.sm" />
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
          <Grid
            sx={{
              gridTemplateColumns: 'auto 1fr',
              gridGap: 1,
            }}
          >
            <Text variant="subText">{weight}</Text>
            <Text variant="subText">{weightUnit}</Text>
          </Grid>
          <Divider variant="styles.spacer.md" />
          <Text variant="subText" sx={{ minHeight: '90px' }}>
            {description}
          </Text>
          <Divider variant="styles.spacer.lg" />
          <Flex
            sx={{
              justifyContent: 'flex-end',
            }}
          >
            <Button
              disabled={totalInventory === 0 ? true : false}
              onClick={() => handleAddToCart()}
            >
              {cta}
            </Button>
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
  /** Is this a Top Pick */
  topPick: PropTypes.bool,
}
