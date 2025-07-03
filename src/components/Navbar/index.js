'use client';

import { useState } from 'react';
import styles from './Navbar.module.scss';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav className={styles.navbar}>
			<div className={styles.navbarContainer}>
				<div className={styles.logo}>
					<span className={styles.brand}>ZAZ</span>
					<span className={styles.location}>Nysa</span>
				</div>

				<div className={styles.navigation}>
					<a href='#home'>Start</a>
					<a href='#about'>O nas</a>
					<a href='#services'>Usługi</a>
					<a href='#contact'>Kontakt</a>
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
				<a href='#home' onClick={() => setIsMenuOpen(false)}>
					Start
				</a>
				<a href='#about' onClick={() => setIsMenuOpen(false)}>
					O nas
				</a>
				<a href='#services' onClick={() => setIsMenuOpen(false)}>
					Usługi
				</a>
				<a href='#contact' onClick={() => setIsMenuOpen(false)}>
					Kontakt
				</a>
			</div>
		</nav>
	);
}
