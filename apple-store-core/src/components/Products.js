import React from 'react'
import PropTypes from 'prop-types'

import { Box, Grid, Divider, Heading, Text } from 'theme-ui'
import { ProductCard } from '../components/ProductCard'

export const Products = ({ edges }) => {
  return (
    <Box as="section">
      <Divider variant="styles.spacer.md" />
      <Heading
        as="h2"
        variant="styles.h2"
        sx={{
          textAlign: 'center',
        }}
      >
        products
      </Heading>
      <Divider variant="styles.spacer.md" />
      <Text variant="default" sx={{ fontSize: 2, textAlign: 'center' }}>
        Hello again, here's our full product range
      </Text>
      <Divider variant="styles.spacer.lg" />
      <Grid
        sx={{
          gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
        }}
      >
        {edges.map((edge, index) => {
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
            />
          )
        })}
      </Grid>
      <Divider variant="styles.spacer.lg" />
    </Box>
  )
}

Products.propTypes = {
  /** The GraphQL shape returned by useShopify */
  node: PropTypes.arrayOf(PropTypes.any),
}
