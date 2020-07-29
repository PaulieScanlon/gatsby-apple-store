import React, { Fragment } from 'react'
import { Box } from 'theme-ui'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { useSite } from '../hooks/useSite'
import { Seo } from 'apple-store-theme'

const PagesLayout = ({ children }) => {
  const {
    site: {
      siteMetadata: { name, description, siteUrl, siteImage, keywords, lang },
    },
  } = useSite()

  return (
    <Fragment>
      <Seo
        type="website"
        title={name}
        description={description}
        siteUrl={siteUrl}
        image={siteImage}
        keywords={keywords}
        lang={lang}
      />
      <Header />
      <Box
        as="main"
        sx={{
          minHeight: 'calc(100vh - 220px)',
        }}
      >
        {children}
      </Box>
      <Footer />
    </Fragment>
  )
}

export default PagesLayout
