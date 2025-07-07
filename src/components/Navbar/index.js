'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);
	const timeoutRef = useRef(null);

	const workshops = [
		{ name: 'Stolarnia', slug: 'stolarnia', icon: '🪵' },
		{ name: 'Artystyczna', slug: 'artystyczna', icon: '🎨' },
		{ name: 'Szwalnia', slug: 'szwalnia', icon: '🧵' },
		{ name: 'Informatyczna', slug: 'informatyczna', icon: '💻' },
		{ name: 'Sprzątająca', slug: 'sprzatajaca', icon: '🧹' },
		{ name: 'Masażysta', slug: 'masazysta', icon: '💆' },
	];

	const handleMouseEnter = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		setIsDropdownOpen(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setIsDropdownOpen(false);
		}, 150);
	};

	const handleDropdownClick = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	// Clean up timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.logo}>
					<Link href='/' className={styles.logoLink}>
						{/* Logo image */}
						<Image src='/logo.webp' alt='ZAZ Nysa' width={50} height={50} className={styles.logoImage} priority />

						{/* Fallback text logo */}
						{/* <div className={styles.textLogo}>
							<span className={styles.brand}>ZAZ</span>
							<span className={styles.location}>Nysa</span>
						</div> */}
					</Link>
				</div>

				<div className={styles.navigation}>
					<Link href='/'>Start</Link>
					<Link href='/#about'>O nas</Link>
					<Link href='/#services'>Usługi</Link>

					{/* Dropdown Menu */}
					<div className={styles.dropdown} ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<button className={styles.dropdownToggle} onClick={handleDropdownClick} aria-expanded={isDropdownOpen} aria-haspopup='true'>
							Pracownie
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
							</svg>
						</button>

						<div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
							<div className={styles.dropdownHeader}>
								<h3>Nasze Pracownie</h3>
								<p>Wybierz pracownię, którą chcesz poznać</p>
							</div>
							<div className={styles.dropdownGrid}>
								{workshops.map((workshop, index) => (
									<Link key={index} href={`/pracownie/${workshop.slug}`} className={styles.dropdownItem} onClick={() => setIsDropdownOpen(false)}>
										<span className={styles.dropdownIcon}>{workshop.icon}</span>
										<span className={styles.dropdownText}>{workshop.name}</span>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' className={styles.dropdownArrow}>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M12 5l7 7-7 7' />
										</svg>
									</Link>
								))}
							</div>
						</div>
					</div>

					<Link href='/kontakt'>Kontakt</Link>
				</div>

				<button className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label='Toggle menu'>
					{isMenuOpen ? (
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
						</svg>
					) : (
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
				<Link href='/' onClick={() => setIsMenuOpen(false)}>
					Start
				</Link>
				<Link href='/#about' onClick={() => setIsMenuOpen(false)}>
					O nas
				</Link>
				<Link href='/#services' onClick={() => setIsMenuOpen(false)}>
					Usługi
				</Link>

				{/* Mobile Dropdown */}
				<div className={styles.mobileDropdown}>
					<button className={styles.mobileDropdownToggle} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
						Pracownie
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor' className={`${styles.chevron} ${isDropdownOpen ? styles.chevronUp : ''}`}>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
						</svg>
					</button>

					<div className={`${styles.mobileDropdownMenu} ${isDropdownOpen ? styles.mobileDropdownMenuOpen : ''}`}>
						<Link
							href='/pracownie'
							className={styles.mobileViewAllLink}
							onClick={() => {
								setIsMenuOpen(false);
								setIsDropdownOpen(false);
							}}
						>
							Zobacz wszystkie pracownie
						</Link>
					</div>
				</div>

				<Link href='/kontakt' onClick={() => setIsMenuOpen(false)}>
					Kontakt
				</Link>
			</div>
		</nav>
	);
}
