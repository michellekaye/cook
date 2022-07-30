/* tslint:disable */
import lunr from 'lunr';
import { useState } from 'react';
import styles from './cardGrid.module.scss';
import Card from './card';
import searchStyles from './search.module.scss';
import data from './database';

export default function CardGrid({ showAll }: any) {
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
							tags={recipe.tags}
						/>
					)
				})}
			</div>
		</div>
	)
}