import Head from 'next/head'
import { Thing } from "@shared/components"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My miner</title>
      </Head>

      <Thing />
      <p>teste</p>


    </div>
  )
}
