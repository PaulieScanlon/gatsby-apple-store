import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

export const Seo = ({
  type,
  title,
  description,
  siteUrl,
  image,
  keywords,
  lang,
}) => {
  return (
    <Helmet
      title={title}
      link={[
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: `${siteUrl}/images/favicon-16x16.png`,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: `${siteUrl}/images/favicon-32x32.png`,
        },
      ]}
    >
      <html lang={lang} />
      <meta name="description" content={description} />
      <meta name="image" content={`${siteUrl}/${image}`} />
      <meta name="image:alt" content={description} />
      <meta
        name="gatsby-theme"
        content="@pauliescanlon/gatsby-theme-terminal"
      />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/${image}`} />
      <meta property="og:image:alt" content={description}></meta>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/${image}`} />
      <meta name="twitter:image:alt" content={description}></meta>
    </Helmet>
  )
}

Seo.propTypes = {
  /** The type of meta - useful for Facebook */
  type: PropTypes.oneOf(['website', 'article']),
  /** The site title */
  title: PropTypes.string.isRequired,
  /** The site description */
  description: PropTypes.string.isRequired,
  /** The site URL */
  siteUrl: PropTypes.string.isRequired,
  /** Image url to use for opengraph image */
  image: PropTypes.string,
  /** Keywords to use in meta keywords */
  keywords: PropTypes.arrayOf(PropTypes.string),
  /** Lang to use as meta lang */
  lang: PropTypes.string,
}

Seo.defaultProps = {
  lang: 'eng',
}
