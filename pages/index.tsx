import type { NextPage } from 'next'
import Head from 'next/head'
import CardGrid from '../components/cardGrid'
import Nav from '../components/nav';

const Home: NextPage = (props) => {
  return (
    <>
      <Head>
				<title>Michelle Cooks</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Recipes for Michelle to try" />
        <link rel="icon" href="/favicon.ico" />
			</Head>
			
			<Nav>
				<div className="header">
					<h1>Michelle Cooks</h1>
				</div>
			</Nav>
			<div className="nav-placeholder" />
			<CardGrid props={props} />
    </>
  )
}

export default Home
