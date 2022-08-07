import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaSearch, FaGlobeAmericas, FaInfoCircle, FaThLarge } from 'react-icons/fa';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero from '../components/hero';
import Nav from '../components/nav';
import CardScroll from '../components/cardScroll';
import Footer from '../components/footer';

const Categories: NextPage = (props) => {
	 const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

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
						<Link href="/cuisine"><a><FaGlobeAmericas /></a></Link>
						<Link href="/categories"><a className="active"><FaThLarge /></a></Link>
						<Link href="/about"><a><FaInfoCircle /></a></Link>
					</div>
				</div>
			</Nav>
			<div className="nav-placeholder" />

			<Slider {...settings}>
				<Hero category="Drinks" />
				<Hero category="Vegetables" />
				<Hero category="Snacks" />
				<Hero category="Dessert" />
			</Slider>

			<span className="scroll-title-hack" id="Drinks" />
			<h2 className="scroll-title">Drinks</h2>
			<CardScroll props={props} query='drink' />

			<span className="scroll-title-hack" id="Vegetables" />
			<h2 className="scroll-title">Veggies</h2>
			<CardScroll props={props} query='vegetables' />

			<span className="scroll-title-hack" id="Snacks" />
			<h2 className="scroll-title">Snacks</h2>
			<CardScroll props={props} query='snack' />

			<span className="scroll-title-hack" id="Dessert" />
			<h2 className="scroll-title">Dessert</h2>
			<CardScroll props={props} query='dessert' />

			<Footer />
    </>
  )
}

export default Categories;
