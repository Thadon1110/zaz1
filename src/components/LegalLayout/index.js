'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Legal.module.scss';

export default function LegalLayout({ children, title, lastUpdated }) {
	const pathname = usePathname();

	const legalPages = [
		{
			href: '/polityka-prywatnosci',
			icon: '🔒',
			title: 'Polityka prywatności',
			description: 'Jak chronimy i przetwarzamy Twoje dane osobowe',
			current: pathname === '/polityka-prywatnosci',
		},
		{
			href: '/regulamin',
			icon: '📋',
			title: 'Regulamin serwisu',
			description: 'Zasady korzystania z naszych usług',
			current: pathname === '/regulamin',
		},
		{
			href: '/cookies',
			icon: '🍪',
			title: 'Polityka cookies',
			description: 'Informacje o wykorzystywanych plikach cookies',
			current: pathname === '/cookies',
		},
	];

	return (
		<div className={styles.container}>
			{/* Hero Section */}
			<div className={styles.hero}>
				<div className={styles.heroContent}>
					<div className={styles.wrapper}>
						<h1 className={styles.title}>{title}</h1>
						{lastUpdated && <p className={styles.lastUpdated}>{lastUpdated}</p>}
					</div>
				</div>
			</div>

			{/* Content Section */}
			<div className={styles.content}>
				<div className={styles.wrapper}>{children}</div>
			</div>

			{/* Navigation Section */}
			<div className={styles.navigation}>
				<div className={styles.wrapper}>
					<div className={styles.navGrid}>
						{legalPages.map((page) => (
							<Link key={page.href} href={page.href} className={`${styles.navCard} ${page.current ? styles.navCardCurrent : ''}`}>
								<div className={styles.navIcon}>{page.icon}</div>
								<h3>{page.title}</h3>
								<p>{page.description}</p>
								{page.current && (
									<div className={styles.currentIndicator}>
										<span>Aktualnie przeglądasz</span>
									</div>
								)}
							</Link>
						))}
					</div>
				</div>
			</div>

			{/* Back Section */}
			<div className={styles.backSection}>
				<div className={styles.wrapper}>
					<Link href='/' className={styles.backButton}>
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
						</svg>
						Powrót do strony głównej
					</Link>
				</div>
			</div>
		</div>
	);
}
