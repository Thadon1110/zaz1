'use client';

import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';
import styles from './Footer.module.scss';

const Footer = memo(() => {
	const currentYear = new Date().getFullYear();

	const workshops = [
		{ name: 'Stolarnia', slug: 'stolarnia' },
		{ name: 'Artystyczna', slug: 'artystyczna' },
		{ name: 'Szwalnia', slug: 'szwalnia' },
		{ name: 'Informatyczna', slug: 'informatyczna' },
		{ name: 'Sprzątająca', slug: 'sprzatajaca' },
		{ name: 'Masażysta', slug: 'masazysta' },
	];

	const services = [
		{ name: 'Laser', slug: 'laser' },
		{ name: 'Nadruki na tkaninach', slug: 'nadruki' },
		{ name: 'Prace techniczne', slug: 'prace-techniczne' },
	];

	const socialLinks = [
		{
			name: 'Facebook',
			href: '#',
			icon: (
				<svg viewBox='0 0 24 24' fill='currentColor'>
					<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
				</svg>
			),
		},
		{
			name: 'Instagram',
			href: '#',
			icon: (
				<svg viewBox='0 0 24 24' fill='currentColor'>
					<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
				</svg>
			),
		},
		{
			name: 'LinkedIn',
			href: '#',
			icon: (
				<svg viewBox='0 0 24 24' fill='currentColor'>
					<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
				</svg>
			),
		},
	];

	const workingHours = [
		{ day: 'Poniedziałek - Piątek', hours: '7:00 - 15:00' },
		{ day: 'Sobota', hours: '8:00 - 12:00' },
		{ day: 'Niedziela', hours: 'Zamknięte' },
	];

	const contactItems = [
		{
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
					/>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
				</svg>
			),
			content: (
				<span>
					ul. Przykładowa 123
					<br />
					48-300 Nysa
				</span>
			),
		},
		{
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
					/>
				</svg>
			),
			content: <span>+48 123 456 789</span>,
		},
		{
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
					/>
				</svg>
			),
			content: <span>kontakt@zaz-nysa.pl</span>,
		},
	];

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.column}>
						<div className={styles.logo}>
							<Image src='/logo.webp' alt='ZAZ Nysa' width={50} height={50} className={styles.logoImage} priority={false} />
						</div>
						<p className={styles.description}>
							Zakład Aktywności Zawodowej w Nysie - tworzymy przyszłość poprzez nowoczesne technologie i dedykowane podejście do każdego projektu.
						</p>
						<div className={styles.contact}>
							{contactItems.map((item, index) => (
								<div key={index} className={styles.contactItem}>
									{item.icon}
									{item.content}
								</div>
							))}
						</div>
						<div className={styles.companyInfo}>
							<div className={styles.companyItem}>NIP: 7551933286</div>
							<div className={styles.companyItem}>KRS: 0000666864</div>
						</div>
					</div>

					<div className={styles.column}>
						<h4 className={styles.columnTitle}>Pracownie</h4>
						<ul className={styles.linksList}>
							{workshops.map((workshop, index) => (
								<li key={index}>
									<Link href={`/pracownie/${workshop.slug}`} className={styles.link}>
										{workshop.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.column}>
						<h4 className={styles.columnTitle}>Usługi</h4>
						<ul className={styles.linksList}>
							{services.map((service, index) => (
								<li key={index}>
									<Link href={`/uslugi/${service.slug}`} className={styles.link}>
										{service.name}
									</Link>
								</li>
							))}
						</ul>
						<div className={styles.extraLinks}>
							<Link href='/galeria' className={styles.link}>
								Galeria
							</Link>
							<Link href='/aktualnosci' className={styles.link}>
								Aktualności
							</Link>
							<Link href='/kontakt' className={styles.link}>
								Kontakt
							</Link>
						</div>
					</div>

					<div className={styles.column}>
						<h4 className={styles.columnTitle}>Godziny pracy</h4>
						<div className={styles.hours}>
							{workingHours.map((item, index) => (
								<div key={index} className={styles.hourItem}>
									<span>{item.day}</span>
									<span>{item.hours}</span>
								</div>
							))}
						</div>
						<div className={styles.social}>
							{socialLinks.map((link, index) => (
								<a key={index} href={link.href} className={styles.socialLink} aria-label={link.name} target='_blank' rel='noopener noreferrer'>
									{link.icon}
								</a>
							))}
						</div>
						<div className={styles.designedBy}>
							Page made by:{' '}
							<a href='https://damianduda.dev' target='_blank' rel='noopener noreferrer'>
								Damian Duda
							</a>
						</div>
					</div>
				</div>

				<div className={styles.bottom}>
					<div className={styles.bottomContent}>
						<p className={styles.copyright}>© {currentYear} Zakład Aktywności Zawodowej w Nysie. Wszystkie prawa zastrzeżone.</p>
						<div className={styles.bottomLinks}>
							<Link href='/polityka-prywatnosci' className={styles.bottomLink}>
								Polityka prywatności
							</Link>
							<Link href='/regulamin' className={styles.bottomLink}>
								Regulamin
							</Link>
							<Link href='/cookies' className={styles.bottomLink}>
								Cookies
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
});

Footer.displayName = 'Footer';

export default Footer;
