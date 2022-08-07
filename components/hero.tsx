import styles from './hero.module.scss';

const Hero = (props: any) => {
	const handleClick = (category: string) => {
		document.getElementById(category).scrollIntoView({
			behavior: 'smooth'
		});
	}

	return (
		<div
			className={`${styles.Hero} ${styles[props.category]}`}
		>
			<button className={styles.HeroButton} onClick={() => handleClick(props.category)} />
		</div>
	)
}

export default Hero;