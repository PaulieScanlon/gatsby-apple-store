import React, { Fragment } from 'react'

import { Seo, useSite } from 'apple-store-theme'

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

      {children}
    </Fragment>
  )
}

export default PagesLayout
