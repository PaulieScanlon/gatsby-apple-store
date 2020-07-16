import React from 'react'
import { Provider } from './src/provider'

export const wrapPageElement = ({ element }) => {
  return <Provider>{element}</Provider>
}
