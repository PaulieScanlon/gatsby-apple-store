import React, { Fragment } from 'react'
import { Box } from 'theme-ui'

import Header from '../components/Header'
import Footer from '../components/Footer'

const PagesLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Box as="main">{children}</Box>
      <Footer />
    </Fragment>
  )
}

export default PagesLayout
