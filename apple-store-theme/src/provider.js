import React, { Fragment } from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as themeUiComponents from 'theme-ui'
import Prism from '@theme-ui/prism'

const components = {
  pre: ({ children }) => <Fragment>{children}</Fragment>,
  code: Prism,
  ...themeUiComponents,
}

export const Provider = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>
}
