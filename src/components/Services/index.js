'use client';

import { useState } from 'react';
import styles from './Services.module.scss';

export default function Services() {
	const [activeTab, setActiveTab] = useState('workshops');
	const [hoveredTab, setHoveredTab] = useState(null);

	const workshops = [
		{
			name: 'Stolarnia',
			description: 'Warsztat stolarski oferuje naukę podstawowych technik obróbki drewna, tworzenia mebli i przedmiotów użytkowych.',
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.781 0-2.674-2.153-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
					/>
				</svg>
			),
		},
		{
			name: 'Artystyczna',
			description: 'Pracownia artystyczna rozwija kreatywność poprzez malarstwo, rzeźbę, ceramikę i inne formy ekspresji artystycznej.',
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1M13 3h7v18a2 2 0 01-2 2H9.83a2 2 0 01-1.42-.59L7 21l1.41-1.41A2 2 0 019.83 19H18V3z'
					/>
				</svg>
			),
		},
		{
			name: 'Szwalnia',
			description: 'Pracownia krawiecka uczy szycia, napraw odzieży oraz tworzenia produktów tekstylnych.',
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
					/>
				</svg>
			),
		},
		{
			name: 'Informatyczna',
			description: 'Pracownia komputerowa oferuje naukę obsługi komputera, podstaw programowania i aplikacji biurowych.',
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
					/>
				</svg>
			),
		},
		{
			name: 'Sprzątająca',
			description: 'Pracownia usług porządkowych kształci umiejętności sprzątania i utrzymania czystości w różnych obiektach.',
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
					/>
				</svg>
			),
		},
		{
			name: 'Masażysta',
			description: 'Pracownia masażu medycznego i relaksacyjnego, kształcąca umiejętności terapeutyczne.',
			icon: (
				<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
					/>
				</svg>
			),
		},
	];

	const services = [
		{
			title: 'Laser',
			description: 'Profesjonalne usługi cięcia i grawerowania laserowego różnych materiałów.',
			features: ['Cięcie precyzyjne', 'Grawerowanie', 'Personalizacja produktów'],
		},
		{
			title: 'Drukarnia do nadruków na tkaninach',
			description: 'Specjalistyczne nadruki na odzieży i tekstyliach metodą termotransferową.',
			features: ['Nadruki na koszulkach', 'Personalizacja odzieży', 'Małe i duże nakłady'],
		},
		{
			title: 'Prace techniczne',
			description: 'Wykonywanie różnorodnych prac technicznych i remontowych.',
			features: ['Naprawy drobne', 'Prace montażowe', 'Konserwacja sprzętu'],
		},
	];

	// Określa pozycję slidera na podstawie hover lub aktywnego taba
	const getSliderClass = () => {
		const displayTab = hoveredTab || activeTab;
		return displayTab === 'services' ? styles.servicesActive : '';
	};

	return (
		<section id='services' className={styles.services}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2 className={styles.title}>Nasze usługi</h2>
					<div className={styles.titleLine}></div>
					<p className={styles.subtitle}>Oferujemy szeroką gamę usług i programów wspierających rozwój zawodowy i osobisty</p>
				</div>

				<div className={styles.tabsContainer}>
					<div className={`${styles.tabs} ${getSliderClass()}`}>
						<button
							className={`${styles.tab} ${activeTab === 'workshops' ? styles.tabActive : ''}`}
							onClick={() => setActiveTab('workshops')}
							onMouseEnter={() => setHoveredTab('workshops')}
							onMouseLeave={() => setHoveredTab(null)}
						>
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
								/>
							</svg>
							Pracownie
						</button>
						<button
							className={`${styles.tab} ${activeTab === 'services' ? styles.tabActive : ''}`}
							onClick={() => setActiveTab('services')}
							onMouseEnter={() => setHoveredTab('services')}
							onMouseLeave={() => setHoveredTab(null)}
						>
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8'
								/>
							</svg>
							Usługi komercyjne
						</button>
					</div>
				</div>

				<div className={styles.content}>
					{activeTab === 'workshops' && (
						<div className={styles.workshops}>
							<div className={styles.workshopsGrid}>
								{workshops.map((workshop, index) => (
									<div key={index} className={styles.workshop}>
										<div className={styles.workshopIcon}>{workshop.icon}</div>
										<div className={styles.workshopContent}>
											<h3>{workshop.name}</h3>
											<p>{workshop.description}</p>
											<button className={styles.learnMore}>
												Dowiedz się więcej
												<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M12 5l7 7-7 7' />
												</svg>
											</button>
										</div>
									</div>
								))}
							</div>
						</div>
					)}

					{activeTab === 'services' && (
						<div className={styles.commercialServices}>
							<div className={styles.servicesGrid}>
								{services.map((service, index) => (
									<div key={index} className={styles.serviceCard}>
										<div className={styles.serviceHeader}>
											<h3>{service.title}</h3>
										</div>
										<div className={styles.serviceContent}>
											<p>{service.description}</p>
											<ul className={styles.featuresList}>
												{service.features.map((feature, featureIndex) => (
													<li key={featureIndex}>
														<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
															<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
														</svg>
														{feature}
													</li>
												))}
											</ul>
											<button className={styles.contactBtn}>Skontaktuj się</button>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
