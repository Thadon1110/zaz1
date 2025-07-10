'use client';

import Image from 'next/image';
import styles from './About.module.scss';

export default function About() {
	return (
		<section id='about' className={styles.about}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>O nas</h2>
					<div className={styles.titleLine}></div>
				</div>

				<div className={styles.content}>
					<div className={styles.textContent}>
						<div className={styles.mainText}>
							<h3>Zakład Aktywności Zawodowej w Nysie</h3>
							<p>
								Jesteśmy organizacją dedykowaną wspieraniu osób z niepełnosprawnościami w rozwoju zawodowym i społecznym. Nasz zakład oferuje
								kompleksowe programy aktywności zawodowej, które pomagają uczestnikom rozwijać umiejętności, zdobywać doświadczenie i budować pewność
								siebie.
							</p>
						</div>

						<div className={styles.mission}>
							<h4>Nasza misja</h4>
							<p>
								Tworzymy środowisko, w którym każdy uczestnik może odkryć swoje talenty i rozwijać się zawodowo. Wierzymy, że praca daje poczucie
								spełnienia i niezależności, dlatego oferujemy zróżnicowane formy aktywności dostosowane do indywidualnych potrzeb i możliwości.
							</p>
						</div>

						<div className={styles.values}>
							<h4>Nasze wartości</h4>
							<div className={styles.valuesList}>
								<div className={styles.value}>
									<div className={styles.valueIcon}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' />
										</svg>
									</div>
									<div>
										<h5>Szacunek</h5>
										<p>Każdy uczestnik jest traktowany z godnością i szacunkiem</p>
									</div>
								</div>

								<div className={styles.value}>
									<div className={styles.valueIcon}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
											/>
										</svg>
									</div>
									<div>
										<h5>Integracja</h5>
										<p>Budujemy mosty między uczestnikami a społecznością</p>
									</div>
								</div>

								<div className={styles.value}>
									<div className={styles.valueIcon}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z' />
										</svg>
									</div>
									<div>
										<h5>Rozwój</h5>
										<p>Wspieramy ciągły rozwój umiejętności i kompetencji</p>
									</div>
								</div>

								<div className={styles.value}>
									<div className={styles.valueIcon}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
											/>
										</svg>
									</div>
									<div>
										<h5>Wsparcie</h5>
										<p>Oferujemy kompleksowe wsparcie na każdym etapie</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={styles.imageContent}>
						<div className={styles.imageCard}>
							<Image src='/about.jpg' width={1000} height={1000} alt='Uczestnicy podczas pracy w zakładzie' />
							<div className={styles.imageOverlay}>
								<div className={styles.stats}>
									<div className={styles.stat}>
										<span className={styles.statNumber}>10+</span>
										<span className={styles.statLabel}>Lat doświadczenia</span>
									</div>
									<div className={styles.stat}>
										<span className={styles.statNumber}>50+</span>
										<span className={styles.statLabel}>Pracowników</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
