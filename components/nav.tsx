import React, { useState, useEffect } from 'react';
import styles from './nav.module.scss';

const Nav = (props: any) => {
	const [nav, setNav] = useState(false)

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	});

	const handleScroll = () => {
		window.pageYOffset > 0 ? !nav && setNav(true) : nav && setNav(false);
	}

	return (
		<div>
			<div className={`${styles.Nav} ${nav && styles.NavScroll}`}>
				{props.children}
			</div>
		</div>
	)
}

export default Nav;