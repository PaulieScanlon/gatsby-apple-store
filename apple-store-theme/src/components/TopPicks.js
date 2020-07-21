import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Divider } from 'theme-ui'

import { ProductCard } from 'apple-store-theme'

export const TopPicks = ({ edges }) => {
  return (
    <Box as="section">
      <Divider variant="styles.spacer.lg" />
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
        }}
      >
        {edges.splice(0, 2).map((edge, index) => {
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
