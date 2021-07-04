import Head from 'next/head'

import { Header } from './../components/Header'
import { Input } from './../components/Input'

export default function Home() {
  return (
    <div>
      <Head>
        <title>My miner</title>
      </Head>
      <>
        <Header />
      </>
    </div>
  )
}
