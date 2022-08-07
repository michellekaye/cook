import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FaSearch, FaGlobeAmericas, FaInfoCircle } from 'react-icons/fa';
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
						<Link href="/categories"><a className="active"><FaGlobeAmericas /></a></Link>
						<Link href="/about"><a><FaInfoCircle /></a></Link>
					</div>
				</div>
			</Nav>
			<div className="nav-placeholder" />

			<Slider {...settings}>
				<Hero category="Asia" />
				<Hero category="Philippines" />
				<Hero category="Hawaii" />
				<Hero category="India" />
				<Hero category="Italy" />
				<Hero category="Turkey" />
			</Slider>

			<span className="scroll-title-hack" id="Asia" />
			<h2 className="scroll-title">Asian</h2>
			<CardScroll props={props} query='asian' />

			<span className="scroll-title-hack" id="Philippines" />
			<h2 className="scroll-title">Filipino</h2>
			<CardScroll props={props} query='filipino' />

			<span className="scroll-title-hack" id="Hawaii" />
			<h2 className="scroll-title">Hawaiian</h2>
			<CardScroll props={props} query='hawaiian' />

			<span className="scroll-title-hack" id="India" />
			<h2 className="scroll-title">Indian</h2>
			<CardScroll props={props} query='indian' />

			<span className="scroll-title-hack" id="Italy" />
			<h2 className="scroll-title">Italian</h2>
			<CardScroll props={props} query='italian' />

			<span className="scroll-title-hack" id="Turkey" />
			<h2 className="scroll-title">Mediterranean</h2>
			<CardScroll props={props} query='mediterranean' />

			<span className="scroll-title-hack" id="Mexico" />
			<h2 className="scroll-title">Mexican</h2>
			<CardScroll props={props} query='mexican' />

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
