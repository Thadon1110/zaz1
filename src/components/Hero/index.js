'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.scss';
import Link from 'next/link';

export default function Hero() {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const parallaxOffset = scrollY * 0.5;
	const heroImageUrl = '/header.jpg';

	return (
		<header
			id='home'
			className={styles.hero}
			style={{
				backgroundImage: `
					linear-gradient(135deg, rgba(29, 78, 216, 0.85) 0%, rgba(147, 51, 234, 0.75) 50%, rgba(59, 130, 246, 0.8) 100%),
					url(${heroImageUrl})
				`,
				transform: `translateY(${parallaxOffset}px)`,
			}}
		>
			<div className={styles.heroContent}>
				<div className={styles.titleWrapper}>
					<h1 className={styles.heroTitle}>
						<span className={styles.titleLine}>Zakład</span>
						<span className={styles.titleLine}>Aktywności</span>
						<span className={styles.titleLine}>Zawodowej</span>
					</h1>
				</div>

				<p className={styles.heroSubtitle}>Innowacyjne rozwiązania w Nysie</p>

				<p className={styles.heroDescription}>Tworzymy przyszłość poprzez nowoczesne technologie i dedykowane podejście do każdego projektu</p>

				<Link href='/#about' className={styles.heroBtn}>
					Poznaj nas
					<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
						<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M12 5l7 7-7 7' />
					</svg>
				</Link>
			</div>

			<div className={styles.scrollIndicator}>
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
				</svg>
			</div>
		</header>
	);
}
