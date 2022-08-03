/* tslint:disable */
import lunr from 'lunr';
import { useState } from 'react';
import styles from './cardGrid.module.scss';
import Card from './card';
import searchStyles from './search.module.scss';
import data from './database';

export default function CardGrid(props: any) {
	// const { recipes } = props.props.global;
	// const formattedRecipes = recipes.map((recipe: any) => {
	// 	return ({
	// 		title: recipe.attributes.title,
	// 		url: recipe.attributes.url,
	// 		notes: recipe.attributes.notes,
	// 		ingredients: recipe.attributes.ingredients,
	// 		steps: recipe.attributes.directions,
	// 		img: recipe.attributes.image,
	// 		tags: recipe.attributes.tags.data.map((tag: any) => { return tag.attributes.name }),
	// 	})
	// })

	const formattedRecipes = data;

	const [query, setQuery] = useState("");

	const compare = ( a: any, b: any ) => {
		if ( a.title < b.title ){
			return -1;
		}
		if ( a.title > b.title ){
			return 1;
		}
		return 0;
	}

	// const orderedList = data.sort(compare);
		const orderedList = formattedRecipes.sort(compare);

	const idx = lunr(function () {
		this.ref('title');
		this.field('title');
		this.field('url');
		this.field('img');
		this.field('tags');

		orderedList.forEach((doc: any) => {
			this.add(doc)
		}, this)
	})

	const results = idx.search(query);

	const dataResults: { img: string; title: string; url: string; tags: string; ingredients?: string[] | undefined; steps?: string[] | undefined; notes?: string[] | undefined }[] = [];
	
	results?.forEach(function (result) {
		orderedList.map((item: any) => item.title === result.ref && dataResults.push(item));
	});

	const finalData = dataResults.length > 0 ? dataResults : orderedList;

	return (
		<>
			<div className={searchStyles.SearchWrapper}>
				<input className={searchStyles.Search} placeholder="Search recipes..." onChange={e => setQuery(e.target.value)} />
			</div>
			<div className={styles.CardGrid}>
				{ finalData.map((recipe: any) => {
					return (
						<Card
							key={recipe.title}
							img={recipe.img}
							title={recipe.title}
							url={recipe.url}
							tags={recipe.tags}
							ingredients={recipe.ingredients}
							steps={recipe.steps}
							notes={recipe.notes}
						/>
					)
				})}
			</div>
		</>
	)
}