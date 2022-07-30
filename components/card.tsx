
import styles from './card.module.scss'
import { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';

interface Props {
	title?: string;
	img?: string;
	imgAlt?: string;
	url: string;
	tags: string;
}

export default function Card({ img, title, url, tags }: Props) {
	const [home, setHome] = useState(false);

	useEffect(() => {
    if (tags.includes('mom')) setHome(true);
	}, [tags]);

	if (url) return (
		<a className={styles.Card} href={url} target="_blank" rel="noreferrer" style={{ backgroundImage: `url(${img})` }}>
			<h2 className={styles.CardTitle} >{title}</h2>
		</a>
	);
	
	return (
		<div className={styles.Card} style={{ backgroundImage: `url(${img})` }}>
			{home && <div className={styles.CardIcon}><AiFillHome /></div>}
			<h2 className={styles.CardTitle} >{title}</h2>
		</div>
	)
}