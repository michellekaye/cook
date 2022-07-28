import type { NextPage } from 'next'
import Head from 'next/head'
import CardGrid from '../components/cardGrid'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
				<title>Michelle Cooks</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Recipes for Michelle to try" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
			
			<div className="header">
				<h2>Hello! Welcome to</h2>
				<h1>Michelle Cooks</h1>
			</div>
			<CardGrid />
    </div>
  )
}

export default Home
