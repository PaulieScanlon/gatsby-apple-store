import React from 'react'

import { ContextProvider } from './context'

export const Provider = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>
}
