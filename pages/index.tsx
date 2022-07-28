import type { NextPage } from 'next'
import Head from 'next/head'
import CardGrid from '../components/cardGrid'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michelle Cooks</title>
        <meta name="description" content="Recipes for Michelle to try" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
			
			<CardGrid />
    </div>
  )
}

export default Home
