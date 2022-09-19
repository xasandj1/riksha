import Head from 'next/head'
import React from 'react'
import { Header, } from '../components'
function IndexPage() {
 
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
    </div>
  )
}
export default IndexPage
