/* tslint:disable */
import lunr from 'lunr';
import { useState } from 'react';
import styles from './cardGrid.module.scss';
import Card from './card';
import searchStyles from './search.module.scss';

export default function CardGrid({ showAll }: any) {
	const [query, setQuery] = useState("");

	const data = [
		{
			img: "/thumb-lasagna.webp",
			title: "Lasagna",
			url: "https://www.simplyrecipes.com/recipes/lasagna/",
			tags: 'italian, pasta, cheese, baking',
		},
		{
			img: "/thumb-pasticcio.jpeg",
			title: "Pasticcio",
			url: "https://www.foodnetwork.com/recipes/michael-symon/pasticcio-11247525",
			tags: 'italian, pasta, greek, cheese, baking',
		},
		{
			img: "/thumb-banana-bread.jpeg",
			title: "Banana Bread",
			url: "https://natashaskitchen.com/banana-bread-recipe-video/",
			tags: 'baking, pastry',
		},
		{
			img: "/thumb-salmon-rice.jpeg",
			title: "Salmon Rice Bowl",
			url: "https://getonmyplate.com/salmon-and-rice-bowl/",
			tags: 'asian, japanese, fish',
		},
		{
			img: "/thumb-palak-paneer.webp",
			title: "Palak Paneer",
			url: "https://www.indianhealthyrecipes.com/palak-paneer-recipe-easy-paneer-recipes-step-by-step-pics/",
			tags: 'cheese, indian',
		},
		{
			img: "/thumb-masala-chai.webp",
			title: "Masala Chai",
			url: "https://www.feastingathome.com/authentic-masala-chai-recipe/",
			tags: 'indian, drink',
		},
		{
			img: "/thumb-garlic-confit.jpeg",
			title: "Garlic Confit",
			url: "https://www.foodandwine.com/recipes/garlic-confit",
			tags: 'appy, bread',
		},
		{
			img: "/thumb-salad-roll.jpeg",
			title: "Salad Roll",
			url: "https://www.recipetineats.com/vietnamese-rice-paper-rolls-spring-rolls/",
			tags: 'asian, vietnamese, appy',
		},
		{
			img: "/thumb-roast-pork.jpeg",
			title: "Crispy Roast Pork & Slaw",
			url: "https://www.marionskitchen.com/crispy-roast-pork-with-asian-slaw/",
			tags: 'asian, filipino',
		},
		{
			img: "/thumb-pork-noodles.jpeg",
			title: "Fragrant Pork Noodles",
			url: "https://www.marionskitchen.com/15-minute-fragrant-pork-noodles/",
			tags: 'asian, pasta',
		},
	];

	const compare = ( a: any, b: any ) => {
		if ( a.title < b.title ){
			return -1;
		}
		if ( a.title > b.title ){
			return 1;
		}
		return 0;
	}

	const orderedList = data.sort(compare);

	const idx = lunr(function () {
		this.ref('title');
		this.field('title');
		this.field('url');
		this.field('img');
		this.field('tags');

		orderedList.forEach((doc) => {
			this.add(doc)
		}, this)
	})

	const results = idx.search(query);

	const dataResults: { img: string; title: string; url: string; tags: string; }[] = [];
	
	results?.forEach(function (result) {
		orderedList.map((item) => item.title === result.ref && dataResults.push(item));
	});

	const finalData = dataResults.length > 0 ? dataResults : orderedList;

	return (
		<div>
			<input className={searchStyles.Search} placeholder="Search recipes..." onChange={e => setQuery(e.target.value)} />
			<div className={styles.CardGrid}>
				{ finalData.map((recipe) => {
					return (
						<Card
							key={recipe.title}
							img={recipe.img}
							title={recipe.title}
							url={recipe.url}
						/>
					)
				})}
			</div>
		</div>
	)
}