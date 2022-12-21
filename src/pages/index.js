import Head from 'next/head'
import React from 'react'
import { Header, } from '../components'
function IndexPage() {
 
  return (
    <div className=''>
      <Head>
        <title>Riksha Cafe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="favicon.png"/>
        <link rel="icon" type="image/x-icon" href="android.png"/>
        <link rel="icon" type="image/x-icon" href="apple.png"/>
        <link rel="icon" type="image/x-icon" href="favicon-32x32.png"/>
        <link rel="icon" type="image/x-icon" href="favicon-16x16.png"/>
      </Head>
      <Header/>
    </div>
  )
}
export default IndexPage
