import React, { Fragment, useContext, useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Container,
  Card,
  Grid,
  Heading,
  Text,
  Divider,
  Button,
  Input,
  Close,
  Message,
} from 'theme-ui'

import Img from 'gatsby-image'

import { Context } from '../context'
import { MatterScene } from 'apple-store-theme'

export const CartView = () => {
  const {
    state: { itemsInCart, storeCurrency },
    dispatch,
  } = useContext(Context)

  const [particleTrigger, setParticleTrigger] = useState()

  const [cartTotal, setCartTotal] = useState(0)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    setCartTotal(
      itemsInCart
        .reduce((totals, item) => {
          return totals + Number(item.total)
        }, 0)
        .toFixed(2)
    )
  }, [itemsInCart])

  const handleQuantity = (heading, event) => {
    let value = event.target.value

    let stateValue = itemsInCart.filter((item) => item.heading === heading)

    if (value > stateValue[0].quantity) {
      setParticleTrigger(!particleTrigger)
    }

    dispatch({
      type: 'updateQuantity',
      payload: {
        heading,
        quantity: value,
      },
    })
  }

  const handleRemove = (heading) => {
    dispatch({
      type: 'removeFromCart',
      payload: {
        heading,
      },
    })
  }

  return (
    <Fragment>
      <Box
        sx={{
          pt: 7,
        }}
      />
      <Container
        sx={{
          maxWidth: 'maxWidth',
        }}
      >
        {hasError && (
          <Fragment>
            <Divider variant="styles.spacer.sm" />
            <Message
              variant="primary"
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              Hey, this is just a demo and the checkout isn't real
              <Close onClick={() => setHasError(false)} />
            </Message>
          </Fragment>
        )}
        <Divider variant="styles.spacer.md" />
        <Grid
          sx={{
            gridTemplateColumns: ['auto', 'auto', 'auto', 'auto 320px'],
          }}
        >
          <Box
            sx={{
              position: 'relative',
            }}
          >
            <MatterScene
              particleTrigger={particleTrigger}
              storeCurrency={storeCurrency}
            />
            <Card>
              <Divider variant="styles.spacer.md" />
              <Heading
                as="div"
                variant="styles.h4"
                sx={{
                  textAlign: 'center',
                }}
              >
                checkout
              </Heading>
              <Divider variant="styles.spacer.lg" />
              <Flex
                sx={{
                  flexDirection: 'column',
                  flex: '1 1 auto',
                }}
              >
                <Grid
                  sx={{
                    gridTemplateColumns: 'auto auto',
                  }}
                >
                  <Flex>SubTotal</Flex>
                  <Flex
                    sx={{
                      justifyContent: 'flex-end',
                    }}
                  >{`${storeCurrency}${cartTotal}`}</Flex>
                  <Flex>Discount</Flex>
                  <Flex
                    sx={{
                      justifyContent: 'flex-end',
                    }}
                  >{`${storeCurrency}0`}</Flex>
                  <Flex
                    sx={{
                      alignItems: 'flex-end',
                    }}
                  >
                    Total
                  </Flex>
                  <Flex
                    sx={{
                      alignItems: 'flex-end',
                      fontWeight: 'bold',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Box
                      sx={{
                        mr: '2px',
                      }}
                    >
                      {storeCurrency}
                    </Box>
                    <Box
                      as="span"
                      sx={{
                        fontSize: 4,
                        lineHeight: 'heading',
                      }}
                    >
                      {cartTotal}
                    </Box>
                  </Flex>
                </Grid>
              </Flex>
              <Divider variant="styles.spacer.lg" />
              <Flex
                sx={{
                  flex: '0 0 auto',
                  flexDirection: 'column',
                }}
              >
                <Button
                  sx={{
                    zIndex: 'checkoutCta',
                  }}
                  variant="accent"
                  disabled={itemsInCart.length === 0}
                  onClick={() => setHasError(true)}
                >
                  checkout
                </Button>
              </Flex>
            </Card>
          </Box>
          <Box
            sx={{
              gridRow: [0, 0, 0, 1],
            }}
          >
            <Card>
              <Divider variant="styles.spacer.md" />
              <Heading
                as="div"
                variant="styles.h4"
                sx={{
                  textAlign: 'center',
                }}
              >
                order
              </Heading>
              <Divider variant="styles.spacer.lg" />
              <Grid
                sx={{
                  gridTemplateColumns: 'auto 3fr 60px auto auto 24px',
                }}
              >
                <Text
                  sx={{
                    width: [0, 0, 80],
                  }}
                />
                <Text variant="bold" sx={{ fontSize: 0 }}>
                  Name
                </Text>
                <Text variant="bold" sx={{ fontSize: 0, textAlign: 'center' }}>
                  Qty
                </Text>
                <Text
                  variant="bold"
                  sx={{
                    fontSize: 0,
                    textAlign: 'right',
                    overflow: 'hidden',
                    width: [0, 70],
                  }}
                >
                  Unit Price
                </Text>
                <Text
                  variant="bold"
                  sx={{
                    fontSize: 0,
                    textAlign: 'right',
                    overflow: 'hidden',
                    width: [0, 70],
                  }}
                >
                  Total
                </Text>
                <Text />
              </Grid>
              <Divider sx={{ mt: 2, mb: 3 }} />
              <Grid
                sx={{
                  gridTemplateColumns: 'auto 3fr 60px auto auto 24px',
                  rowGap: 3,
                }}
              >
                {itemsInCart.map((item, index) => {
                  const {
                    heading,
                    fluid,
                    quantity,
                    symbol,
                    price,
                    total,
                  } = item
                  return (
                    <Fragment key={index}>
                      <Box
                        sx={{
                          borderRadius: 0,
                          overflow: 'hidden',
                          width: [0, 0, 80],
                        }}
                      >
                        <Img fluid={fluid} alt={heading} />
                      </Box>
                      <Flex
                        sx={{
                          alignItems: 'center',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {heading}
                      </Flex>

                      <Input
                        min={0}
                        max={99}
                        value={quantity && quantity}
                        type="number"
                        onChange={(event) => handleQuantity(heading, event)}
                      />

                      <Flex
                        sx={{
                          alignItems: 'center',
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          fontWeight: 'bold',
                          width: [0, 70],
                        }}
                      >
                        {`${symbol}${price}`}
                      </Flex>
                      <Flex
                        sx={{
                          alignItems: 'center',
                          overflow: 'hidden',
                          justifyContent: 'flex-end',
                          fontWeight: 'bold',
                          width: [0, 70],
                        }}
                      >
                        {`${symbol}${total}`}
                      </Flex>
                      <Flex
                        sx={{
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                        }}
                      >
                        <Close onClick={() => handleRemove(heading)} />
                      </Flex>
                    </Fragment>
                  )
                })}
              </Grid>
            </Card>
          </Box>
        </Grid>
      </Container>
      <Divider variant="styles.spacer.lg" />
    </Fragment>
  )
}
