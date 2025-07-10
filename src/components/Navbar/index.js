'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const WORKSHOPS = [
	{ name: 'Stolarnia', slug: 'stolarnia', icon: '🪵' },
	{ name: 'Artystyczna', slug: 'artystyczna', icon: '🎨' },
	{ name: 'Szwalnia', slug: 'szwalnia', icon: '🧵' },
	{ name: 'Informatyczna', slug: 'informatyczna', icon: '💻' },
	{ name: 'Sprzątająca', slug: 'sprzatajaca', icon: '🧹' },
	{ name: 'Masażysta', slug: 'masazysta', icon: '💆' },
];

const DROPDOWN_DELAY = 150;

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const timeoutRef = useRef(null);

	const closeDropdown = useCallback(() => {
		setIsDropdownOpen(false);
	}, []);

	const closeMenu = useCallback(() => {
		setIsMenuOpen(false);
		setIsDropdownOpen(false);
	}, []);

	const handleMouseEnter = useCallback(() => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		setIsDropdownOpen(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		timeoutRef.current = setTimeout(() => {
			setIsDropdownOpen(false);
		}, DROPDOWN_DELAY);
	}, []);

	const handleDropdownToggle = useCallback(() => {
		setIsDropdownOpen((prev) => !prev);
	}, []);

	const handleMobileMenuToggle = useCallback(() => {
		setIsMenuOpen((prev) => !prev);
		setIsDropdownOpen(false);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				closeDropdown();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [closeDropdown]);

	useEffect(() => {
		const handleEscKey = (event) => {
			if (event.key === 'Escape') {
				closeMenu();
			}
		};

		if (isMenuOpen) {
			document.addEventListener('keydown', handleEscKey);
			document.body.style.overflow = 'hidden';
		} else {
			document.removeEventListener('keydown', handleEscKey);
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.removeEventListener('keydown', handleEscKey);
			document.body.style.overflow = 'unset';
		};
	}, [isMenuOpen, closeMenu]);

	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return (
		<>
			<nav className={styles.navbar} role='navigation' aria-label='Main navigation'>
				<div className={styles.navbarContainer}>
					<div className={styles.logo}>
						<Link href='/' className={styles.logoLink} aria-label='ZAZ Nysa - Strona główna'>
							<Image src='/logo.webp' alt='ZAZ Nysa logo' width={50} height={50} className={styles.logoImage} priority />
						</Link>
					</div>

					<div className={styles.navigation}>
						<Link href='/'>Start</Link>
						<Link href='/#about'>O nas</Link>
						<Link href='/#services'>Usługi</Link>

						<div className={styles.dropdown} ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
							<button
								className={styles.dropdownToggle}
								onClick={handleDropdownToggle}
								aria-expanded={isDropdownOpen}
								aria-haspopup='true'
								aria-label='Menu pracowni'
							>
								Pracownie
								<svg
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}
									aria-hidden='true'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
								</svg>
							</button>

							<div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
								<div className={styles.dropdownHeader}>
									<h3>Nasze Pracownie</h3>
									<p>Wybierz pracownię, którą chcesz poznać</p>
								</div>
								<div className={styles.dropdownGrid}>
									{WORKSHOPS.map((workshop) => (
										<Link key={workshop.slug} href={`/pracownie/${workshop.slug}`} className={styles.dropdownItem} onClick={closeDropdown}>
											<span className={styles.dropdownIcon} aria-hidden='true'>
												{workshop.icon}
											</span>
											<span className={styles.dropdownText}>{workshop.name}</span>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' className={styles.dropdownArrow} aria-hidden='true'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M12 5l7 7-7 7' />
											</svg>
										</Link>
									))}
								</div>
							</div>
						</div>

						<Link href='/kontakt'>Kontakt</Link>
					</div>

					<button
						className={styles.mobileMenuBtn}
						onClick={handleMobileMenuToggle}
						aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
						aria-expanded={isMenuOpen}
					>
						<span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}>
							<span></span>
							<span></span>
							<span></span>
						</span>
					</button>
				</div>
			</nav>

			<div className={`${styles.mobileMenuOverlay} ${isMenuOpen ? styles.mobileMenuOverlayOpen : ''}`}>
				<div className={styles.mobileMenu}>
					<div className={styles.mobileMenuContent}>
						<Link href='/' onClick={closeMenu}>
							Start
						</Link>
						<Link href='/#about' onClick={closeMenu}>
							O nas
						</Link>
						<Link href='/#services' onClick={closeMenu}>
							Usługi
						</Link>

						<div className={styles.mobileDropdown}>
							<button
								className={styles.mobileDropdownToggle}
								onClick={handleDropdownToggle}
								aria-expanded={isDropdownOpen}
								aria-label='Menu pracowni'
							>
								Pracownie
								<svg
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}
									aria-hidden='true'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
								</svg>
							</button>

							<div className={`${styles.mobileDropdownMenu} ${isDropdownOpen ? styles.mobileDropdownMenuOpen : ''}`}>
								{WORKSHOPS.map((workshop) => (
									<Link key={workshop.slug} href={`/pracownie/${workshop.slug}`} className={styles.mobileDropdownItem} onClick={closeMenu}>
										<span className={styles.dropdownIcon} aria-hidden='true'>
											{workshop.icon}
										</span>
										<span>{workshop.name}</span>
									</Link>
								))}
							</div>
						</div>

						<Link href='/kontakt' onClick={closeMenu}>
							Kontakt
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
