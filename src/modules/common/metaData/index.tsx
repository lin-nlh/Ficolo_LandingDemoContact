import React from 'react'
import { metaData } from '../data/metaData'

const MetaHead = () => {
  return (
    <head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{metaData.title}</title>
      <meta name="title" content={metaData.title} />
      <meta
        name="description"
        content={metaData.description}
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaData.openGraph.url} />
      <meta property="og:title" content={metaData.title} />
      <meta
        property="og:description"
        content={metaData.description}
      />
      <meta
        property="og:image"
        content={metaData.openGraph.imageUrl}
      />

      {/* <!-- X (Twitter) --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={metaData.openGraph.url}
      />
      <meta property="twitter:title" content={metaData.title} />
      <meta
        property="twitter:description"
        content={metaData.description}
      />
      <meta
        property="twitter:image"
        content={metaData.openGraph.imageUrl}
      />
    </head>
  )
}

export default MetaHead