import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Divider, Heading, Text } from 'theme-ui'

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
      <Divider variant="styles.spacer.md" />
      <Text variant="default" sx={{ fontSize: 2, textAlign: 'center' }}>
        All of our products are amazing, but someone on our product team thinks
        these ones are the best
      </Text>
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
              node: { title, description, totalInventory, images, variants },
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
                totalInventory={totalInventory}
                currency={variants[0].priceV2.currencyCode}
                price={Number(variants[0].price)}
                weight={Number(variants[0].weight)}
                weightUnit={variants[0].weightUnit}
                cta="add to cart"
                topPick={true}
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
