import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Divider, Heading } from 'theme-ui'
import { ProductCard } from '../components/ProductCard'

const FILTER = 'TopPick'

export const TopPicks = ({ edges }) => {
  return (
    <Box as="section">
      <Divider variant="styles.spacer.lg" />
      <Heading
        as="h2"
        variant="styles.h2"
        sx={{
          textAlign: 'center',
        }}
      >
        top picks
      </Heading>
      <Divider variant="styles.spacer.lg" />
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
        }}
      >
        {edges
          .filter((edge) => edge.node.productType === FILTER)
          .map((edge, index) => {
            const {
              node: { title, description, images, variants },
            } = edge

            const {
              childImageSharp: { fluid },
            } = images[0].localFile

            return (
              <ProductCard
                key={index}
                fluid={fluid}
                heading={title}
                description={description}
                currency={variants[0].priceV2.currencyCode}
                price={Number(variants[0].price)}
                cta="add to cart"
              />
            )
          })}
      </Grid>
      <Divider variant="styles.spacer.lg" />
    </Box>
  )
}

TopPicks.propTypes = {
  /** The GraphQL shape returned by useShopify */
  node: PropTypes.arrayOf(PropTypes.any),
}
