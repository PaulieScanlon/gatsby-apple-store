import React, { createContext, useReducer } from 'react'

// import { dummyItems } from './mock'

import { useShopify } from '../hooks/useShopify'

const reducer = (state, action) => {
  const { type, payload } = action
  let { heading, quantity } = payload

  switch (type) {
    case 'addToCart':
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, payload],
      }

    case 'addDuplicateToCart':
      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.map((item) => {
            if (item.heading === heading) {
              let incrementedQuantity = (item.quantity += 1)
              return {
                ...item,
                quantity: incrementedQuantity,
                total: (item.price * incrementedQuantity).toFixed(2),
              }
            }
            return item
          }),
        ],
      }

    case 'removeFromCart':
      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.filter((item) => item.heading !== heading),
        ],
      }

    case 'updateQuantity':
      return {
        ...state,
        itemsInCart: [
          ...state.itemsInCart.map((item) => {
            if (item.heading === heading) {
              let updatedQuantity = quantity
              return {
                ...item,
                quantity: updatedQuantity,
                total: (item.price * updatedQuantity).toFixed(2),
              }
            }
            return item
          }),
        ],
      }

    default:
      return
  }
}

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const {
    shopifyShop: { moneyFormat },
  } = useShopify()

  const [state, dispatch] = useReducer(reducer, {
    itemsInCart: [],
    // itemsInCart: [...dummyItems],
    storeCurrency: moneyFormat.split('')[0],
  })

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
