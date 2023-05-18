import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document({ __NEXT_DATA__ }) {
  return (
    <Html lang="en">
      <Head />
      <body className={__NEXT_DATA__?.props?.bodyClassName ?? ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
