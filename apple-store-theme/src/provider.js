import React, { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as themeUiComponents from 'theme-ui'
import Prism from '@theme-ui/prism'

import { Hero } from './components/Hero'
import { ProductCard } from './components/ProductCard'

const components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
  Hero,
  ProductCard,
}

export const Provider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
