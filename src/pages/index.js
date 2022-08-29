import Head from 'next/head'
import React from 'react'
import { Header, News } from '../components'
function IndexPage() {
  return (
    <div className=''>
      <Head>
        <title>Riksha Cafe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <News/>
    </div>
  )
}
export default IndexPage
