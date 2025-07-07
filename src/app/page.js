'use client';

import styles from './page.module.scss';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

export default function HomePage() {
	return (
		<div className={styles.container}>
			<Hero />
			<About />
			<Services />
		</div>
	);
}
