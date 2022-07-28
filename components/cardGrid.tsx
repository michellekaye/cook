import styles from './cardGrid.module.scss';
import Card from './card';

export default function CardGrid({ showAll }: any) {
	const data = [
		{
			img: "/thumb-lasagna.webp",
			title: "Lasagna",
			url: "https://www.simplyrecipes.com/recipes/lasagna/",
		},
		{
			img: "/thumb-pasticcio.jpeg",
			title: "Pasticcio",
			url: "https://www.foodnetwork.com/recipes/michael-symon/pasticcio-11247525",
		},
		{
			img: "/thumb-banana-bread.jpeg",
			title: "Banana Bread",
			url: "https://natashaskitchen.com/banana-bread-recipe-video/",
		},
		{
			img: "/thumb-salmon-rice.jpeg",
			title: "Salmon Rice Bowl",
			url: "https://getonmyplate.com/salmon-and-rice-bowl/",
		},
		{
			img: "/thumb-palak-paneer.webp",
			title: "Palak Paneer",
			url: "https://www.indianhealthyrecipes.com/palak-paneer-recipe-easy-paneer-recipes-step-by-step-pics/",
		},
		{
			img: "/thumb-masala-chai.webp",
			title: "Masala Chai",
			url: "https://www.feastingathome.com/authentic-masala-chai-recipe/",
		},
		{
			img: "/thumb-garlic-confit.jpeg",
			title: "Garlic Confit",
			url: "https://www.foodandwine.com/recipes/garlic-confit",
		},
		{
			img: "/thumb-salad-roll.jpeg",
			title: "Salad Roll",
			url: "https://www.recipetineats.com/vietnamese-rice-paper-rolls-spring-rolls/",
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

	return (
		<div className={styles.CardGrid}>
			{ orderedList.map((recipe) => {
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
	)
}