import React from 'react'

// import { dummyItems } from './mock'

const initialState = {
  // itemsInCart: dummyItems,
  itemsInCart: [],
}

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

export const Context = React.createContext(initialState)

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
