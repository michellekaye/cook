
import styles from './card.module.scss'

interface Props {
	title?: string;
	img?: string;
	imgAlt?: string;
	url: string;
}

export default function Card({ img, imgAlt, title, url }: Props) {
	return (
		<a className={styles.Card} href={url} target="_blank" rel="noreferrer" style={{ backgroundImage: `url(${img})` }}>
			<h2 className={styles.CardTitle} >{title}</h2>
		</a>
  )
}