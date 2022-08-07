import type { NextPage } from 'next';
import Link from 'next/link';
import { FaSearch, FaGlobeAmericas, FaInfoCircle, FaTag } from 'react-icons/fa';
import Head from 'next/head'
import CardGrid from '../components/cardGrid'
import Nav from '../components/nav';
import Footer from '../components/footer';

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
					<Link href="/"><a><h1>Michelle Cooks</h1></a></Link>
					<div>
						<Link href="/"><a className="active"><FaSearch/></a></Link>
						<Link href="/cuisine"><a><FaGlobeAmericas /></a></Link>
						<Link href="/categories"><a><FaTag /></a></Link>
						<Link href="/about"><a><FaInfoCircle /></a></Link>
					</div>
				</div>
			</Nav>
			<div className="nav-placeholder" />

			<CardGrid props={props} />

			<Footer />
    </>
  )
}

export default Home
