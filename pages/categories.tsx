import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { FaSearch, FaGlobeAmericas, FaInfoCircle } from 'react-icons/fa';
import Nav from '../components/nav';

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
					<h1>Michelle Cooks</h1>
					<div>
						<Link href="/about"><a><FaInfoCircle /></a></Link>
						<Link href="/categories"><a className="active"><FaGlobeAmericas /></a></Link>
						<Link href="/"><a><FaSearch/></a></Link>
					</div>
				</div>
			</Nav>

			<div className="nav-placeholder" />
    </>
  )
}

export default Categories;
