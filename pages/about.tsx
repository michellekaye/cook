import type { NextPage } from 'next';
import Link from 'next/link';
import { FaSearch, FaGlobeAmericas, FaInfoCircle } from 'react-icons/fa';
import Head from 'next/head'
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
						<Link href="/"><a><FaSearch/></a></Link>
						<Link href="/categories"><a><FaGlobeAmericas /></a></Link>
						<Link href="/about"><a className="active"><FaInfoCircle /></a></Link>
					</div>
				</div>
			</Nav>
			<div className="nav-placeholder" />

			<div className="article">
				<div className="article-body">
					<img src="/about.jpeg" alt="Michelle and her mom, Editha"/>
					<h2>About this project</h2>
					<p>I'm a girl who loves food but can't cook! This is my attempt at learning how to manage in the kitchen. None of these recipes are mine unless otherwise stated (which will probably be never). Recipes are either found from the internet or from my own mama who is the best cook I know.</p>
					<p>Now the technical stuff. This site is build using NextJS, hosted on AWS S3, with CD using Github actions. I'm in the process of adding a Strapi backend, hosted on EC2 with RDS and S3. Have any questions? Visit <Link href="http://michelle-kaye.com" passHref={true}><a target="_blank">michelle-kaye.com</a></Link> and shoot me a message.</p>
				</div>
			</div>

			<Footer />
    </>
  )
}

export default Home
