import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { FaSearch, FaGlobeAmericas, FaInfoCircle } from 'react-icons/fa';
import Nav from '../components/nav';
import CardScroll from '../components/cardScroll';
import Footer from '../components/footer';

const Categories: NextPage = (props) => {
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
						<Link href="/categories"><a className="active"><FaGlobeAmericas /></a></Link>
						<Link href="/about"><a><FaInfoCircle /></a></Link>
					</div>
				</div>
			</Nav>
			<div className="nav-placeholder" />

			<h2 className="scroll-title">Asian</h2>
			<CardScroll props={props} query='asian' />

			<h2 className="scroll-title">Filipino</h2>
			<CardScroll props={props} query='filipino' />

			<h2 className="scroll-title">Hawaiian</h2>
			<CardScroll props={props} query='hawaiian' />

			<h2 className="scroll-title">Indian</h2>
			<CardScroll props={props} query='indian' />

			<h2 className="scroll-title">Italian</h2>
			<CardScroll props={props} query='italian' />

			<h2 className="scroll-title">Mediterranean</h2>
			<CardScroll props={props} query='mediterranean' />

			<h2 className="scroll-title">Mexican</h2>
			<CardScroll props={props} query='mexican' />

			<h2 className="scroll-title">Veggies</h2>
			<CardScroll props={props} query='vegetables' />

			<h2 className="scroll-title">Snacks</h2>
			<CardScroll props={props} query='snack' />

			<h2 className="scroll-title">Dessert</h2>
			<CardScroll props={props} query='dessert' />

			<Footer />
    </>
  )
}

export default Categories;
