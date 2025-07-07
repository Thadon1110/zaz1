'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Workshop.module.scss';

export default function WorkshopPage() {
	const params = useParams();
	const slug = params.slug;

	const workshopsData = {
		stolarnia: {
			title: 'Pracownia Stolarska',
			subtitle: 'Tradycyjne rzemiosło w nowoczesnym wykonaniu',
			description:
				'Nasza pracownia stolarska to miejsce, gdzie tradycyjne techniki obróbki drewna spotykają się z nowoczesnymi narzędziami. Uczestnicy uczą się tworzenia pięknych i funkcjonalnych mebli oraz przedmiotów z drewna.',
			image: '/pracownie/stolarnia/main.jpg',
			bgColor: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
			icon: '🪵',
			skills: [
				'Podstawy obróbki drewna',
				'Używanie narzędzi ręcznych i elektrycznych',
				'Techniki łączenia drewna',
				'Wykańczanie powierzchni',
				'Projektowanie mebli',
				'Konserwacja i naprawa',
			],
			projects: [
				{
					name: 'Drewniane budki lęgowe dla ptaków',
					description:
						'Nasze budki to nie tylko pomoc dla ptaków w sezonie lęgowym, ale także estetyczny i ekologiczny dodatek do ogrodu, sadu, działki czy terenów zielonych',
					image: '/pracownie/stolarnia/product1.jpg',
				},
				{
					name: 'Drewniany kwietnik',
					description:
						'Wyjątkowy kwietnik w formie miniaturowego drewnianego wozu to oryginalna ozdoba, która wprowadzi do Twojej przestrzeni rustykalny urok i naturalny klimat. Na wozie umieszczone są trzy pojemniki, idealne do wyeksponowania roślin, ziół lub kompozycji kwiatowych',
					image: '/pracownie/stolarnia/product2.jpg',
				},
				{
					name: 'Hotele dla owadów',
					description:
						'Starannie wykonane stroiki z różnorodnych, dekoracyjnych elementów – takich jak sztuczne kwiaty, liście, gałązki czy dodatki sezonowe – to piękna i trwała forma upamiętnienia oraz ozdoba, która niesie za sobą więcej niż słowa. Każdy stroik powstaje ręcznie, z wyczuciem estetyki i dbałością o kompozycję',
					image: '/pracownie/stolarnia/product3.jpg',
				},
			],
			schedule: { monday: '8:00 - 14:00', tuesday: '8:00 - 14:00', wednesday: '8:00 - 14:00', thursday: '8:00 - 14:00', friday: '8:00 - 12:00' },
			instructor: {
				name: 'Mistrz Jan Kowalski',
				experience: '25 lat doświadczenia',
				description: 'Doświadczony stolarz z wieloletnim stażem w zawodzie. Specjalizuje się w meblach na zamówienie i konserwacji zabytków.',
				avatar: '/instructors/jan-kowalski.jpg',
			},
		},
		artystyczna: {
			title: 'Pracownia Artystyczna',
			subtitle: 'Uwolnij swoją kreatywność',
			description:
				'Pracownia artystyczna to przestrzeń twórcza, gdzie uczestnicy mogą rozwijać swoje talenty plastyczne poprzez różnorodne techniki i materiały.',
			image: '/pracownie/rękodzieło/main.jpg',
			bgColor: 'linear-gradient(135deg, #9B59B6 0%, #E74C3C 100%)',
			icon: '🎨',
			skills: [
				'Podstawy rysunku i malarstwa',
				'Prace w glinie i ceramice',
				'Techniki graficzne',
				'Kompozycja i teoria kolorów',
				'Rzeźbienie',
				'Tworzenie instalacji artystycznych',
			],
			projects: [
				{
					name: 'Koszyk ręcznie wykonany ze sznurka',
					description:
						'Ręcznie wykonany koszyk ze sznurka wysokiej jakości to idealne połączenie estetyki i funkcjonalności. Starannie pleciony z grubego, wytrzymałego sznurka, zachwyca swoją strukturą i nowoczesnym wyglądem',
					image: '/pracownie/rękodzieło/product1.jpg',
				},
				{
					name: 'Ręcznie robione legowisko ze sznurka',
					description:
						'Wykonany z drewna i starannie wykończony, świetnie sprawdzi się zarówno na tarasie, balkonie, jak i w ogrodzie czy wewnątrz domu. To dekoracja, która przyciąga wzrok i dodaje charakteru każdemu otoczeniu',
					image: '/pracownie/rękodzieło/product2.jpg',
				},
				{
					name: 'Ręcznie wykonany stroik dekoracyjny',
					description:
						'Oferujemy hotele w różnych wielkościach i układach – od kompaktowych modeli idealnych na balkon, po większe domki ogrodowe, które pomieszczą wielu skrzydlatych lokatorów. Każdy z nich wykonany jest z naturalnych materiałów i zaprojektowany tak, by przyciągał różne gatunki owadów zapylających i chroniących rośliny',
					image: '/pracownie/rękodzieło/product3.jpg',
				},
			],
			schedule: { monday: '9:00 - 15:00', tuesday: '9:00 - 15:00', wednesday: '9:00 - 15:00', thursday: '9:00 - 15:00', friday: '9:00 - 13:00' },
			instructor: {
				name: 'Mgr Anna Nowak',
				experience: '15 lat doświadczenia',
				description:
					'Absolwentka Akademii Sztuk Pięknych, specjalizująca się w malarstwie i ceramice. Prowadzi również warsztaty terapii przez sztukę.',
				avatar: '/instructors/anna-nowak.jpg',
			},
		},
		szwalnia: {
			title: 'Pracownia Szwalnicza',
			subtitle: 'Sztuka tworzenia z tkanin',
			description:
				'Pracownia krawiecka uczy szycia, napraw odzieży oraz tworzenia produktów tekstylnych. Rozwijamy umiejętności manualne i kreatywność.',
			image: '/pracownie/szwalnia.jpg',
			bgColor: 'linear-gradient(135deg, #3498DB 0%, #2C3E50 100%)',
			icon: '🧵',
			skills: ['Podstawy szycia', 'Naprawa odzieży', 'Wzornictwo tekstylne', 'Obsługa maszyn', 'Haft i wykończenia', 'Projektowanie ubrań'],
			projects: [
				{
					name: 'Legowiska dla psów i kotów',
					description:
						'Miękkie, wygodne i estetyczne legowiska stworzone z myślą o domowych pupilach. Wykonane z wysokiej jakości materiałów tekstylnych, zapewniają ciepło, wygodę i poczucie bezpieczeństwa zarówno psom, jak i kotom',
					image: '/pracownie/szwalnia/product1.jpg',
				},
				{
					name: 'Poduszki dekoracyjne',
					description:
						'Dostępne w wielu wzorach, kolorach i fakturach, poduszki świetnie sprawdzą się jako element dekoracyjny salonu, sypialni, a także jako przytulny dodatek na taras czy balkon',
					image: '/pracownie/szwalnia/product2.jpg',
				},
				{
					name: 'Torebka na ramię z materiału',
					description:
						'Nasza materiałowa torebka na ramię to połączenie wygody, funkcjonalności i modnego designu. Wykonana z wysokiej jakości, trwałego materiału, który jest jednocześnie lekki i przyjemny w dotyku. Doskonale sprawdzi się zarówno podczas codziennych spacerów, jak i wyjść ze znajomymi',
					image: '/pracownie/szwalnia/product3.jpg',
				},
			],
			schedule: { monday: '8:00 - 14:00', tuesday: '8:00 - 14:00', wednesday: '8:00 - 14:00', thursday: '8:00 - 14:00', friday: '8:00 - 12:00' },
			instructor: {
				name: 'Mgr Maria Krawczyk',
				experience: '20 lat doświadczenia',
				description: 'Specjalistka w dziedzinie szycia i wzornictwa tekstylnego.',
				avatar: '/instructors/maria-krawczyk.jpg',
			},
		},
		informatyczna: {
			title: 'Pracownia Informatyczna',
			subtitle: 'Technologie przyszłości',
			description: 'Pracownia komputerowa oferuje naukę obsługi komputera, podstaw programowania i aplikacji biurowych.',
			image: '/pracownie/informatyczna.jpg',
			bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			icon: '💻',
			skills: ['Obsługa komputera', 'Microsoft Office', 'Podstawy programowania', 'Internet i email', 'Grafika komputerowa', 'Bazy danych'],
			projects: [
				{
					name: 'Wycinanie laserowe CNC',
					description:
						'NOferujemy profesjonalne usługi wycinania laserowego CNC z szerokiej gamy materiałów – takich jak sklejka, drewno, akryl oraz inne tworzywa. Dzięki nowoczesnej technologii jesteśmy w stanie realizować zarówno proste, jak i bardzo precyzyjne, ozdobne projekty – od pojedynczych elementów po większe serie produkcyjne',
					image: '/pracownie/informatyka/product1.jpg',
				},
				{
					name: 'Wycinanie laserowe CNC',
					description:
						'Oferujemy profesjonalne usługi wycinania laserowego CNC z szerokiej gamy materiałów – takich jak sklejka, drewno, akryl oraz inne tworzywa. Dzięki nowoczesnej technologii jesteśmy w stanie realizować zarówno proste, jak i bardzo precyzyjne, ozdobne projekty – od pojedynczych elementów po większe serie produkcyjne',
					image: '/pracownie/informatyka/product2.jpg',
				},
				{
					name: 'Wycinanie laserowe CNC',
					description:
						'Oferujemy profesjonalne usługi wycinania laserowego CNC z szerokiej gamy materiałów – takich jak sklejka, drewno, akryl oraz inne tworzywa. Dzięki nowoczesnej technologii jesteśmy w stanie realizować zarówno proste, jak i bardzo precyzyjne, ozdobne projekty – od pojedynczych elementów po większe serie produkcyjne',
					image: '/pracownie/informatyka/product3.jpg',
				},
			],
			schedule: { monday: '9:00 - 15:00', tuesday: '9:00 - 15:00', wednesday: '9:00 - 15:00', thursday: '9:00 - 15:00', friday: '9:00 - 13:00' },
			instructor: {
				name: 'Mgr inż. Piotr Tech',
				experience: '12 lat doświadczenia',
				description: 'Programista i nauczyciel technologii informatycznych.',
				avatar: '/instructors/piotr-tech.jpg',
			},
		},
		sprzatajaca: {
			title: 'Pracownia Usług Porządkowych',
			subtitle: 'Profesjonalne sprzątanie',
			description: 'Pracownia usług porządkowych kształci umiejętności sprzątania i utrzymania czystości w różnych obiektach.',
			image: '/pracownie/sprzatajaca.jpg',
			bgColor: 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
			icon: '🧹',
			skills: ['Techniki sprzątania', 'Użycie środków chemicznych', 'Organizacja pracy', 'Bezpieczeństwo pracy', 'Obsługa sprzętu', 'Ekologia'],
			projects: [
				{
					name: 'Drewniane budki lęgowe dla ptaków',
					description:
						'Nasze budki to nie tylko pomoc dla ptaków w sezonie lęgowym, ale także estetyczny i ekologiczny dodatek do ogrodu, sadu, działki czy terenów zielonych',
					image: '/pracownie/stolarnia/product1.jpg',
				},
				{
					name: 'Drewniany kwietnik',
					description:
						'Wykonany z drewna i starannie wykończony, świetnie sprawdzi się zarówno na tarasie, balkonie, jak i w ogrodzie czy wewnątrz domu. To dekoracja, która przyciąga wzrok i dodaje charakteru każdemu otoczeniu',
					image: '/pracownie/stolarnia/product2.jpg',
				},
				{
					name: 'Hotele dla owadów',
					description:
						'Oferujemy hotele w różnych wielkościach i układach – od kompaktowych modeli idealnych na balkon, po większe domki ogrodowe, które pomieszczą wielu skrzydlatych lokatorów. Każdy z nich wykonany jest z naturalnych materiałów i zaprojektowany tak, by przyciągał różne gatunki owadów zapylających i chroniących rośliny',
					image: '/pracownie/stolarnia/product3.jpg',
				},
			],
			schedule: { monday: '7:00 - 13:00', tuesday: '7:00 - 13:00', wednesday: '7:00 - 13:00', thursday: '7:00 - 13:00', friday: '7:00 - 11:00' },
			instructor: {
				name: 'Mgr Katarzyna Czysta',
				experience: '18 lat doświadczenia',
				description: 'Specjalistka w dziedzinie usług porządkowych i higieny.',
				avatar: '/instructors/katarzyna-czysta.jpg',
			},
		},
		masazysta: {
			title: 'Pracownia Masażu',
			subtitle: 'Sztuka terapeutycznego dotyku',
			description: 'Pracownia masażu medycznego i relaksacyjnego, kształcąca umiejętności terapeutyczne.',
			image: '/pracownie/masazysta.jpg',
			bgColor: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
			icon: '💆',
			skills: ['Masaż klasyczny', 'Masaż relaksacyjny', 'Anatomia człowieka', 'Techniki manualne', 'Aromaterapia', 'Refleksologia'],
			projects: [
				{
					name: 'Drewniane budki lęgowe dla ptaków',
					description:
						'Nasze budki to nie tylko pomoc dla ptaków w sezonie lęgowym, ale także estetyczny i ekologiczny dodatek do ogrodu, sadu, działki czy terenów zielonych',
					image: '/pracownie/stolarnia/product1.jpg',
				},
				{
					name: 'Drewniany kwietnik',
					description:
						'Wykonany z drewna i starannie wykończony, świetnie sprawdzi się zarówno na tarasie, balkonie, jak i w ogrodzie czy wewnątrz domu. To dekoracja, która przyciąga wzrok i dodaje charakteru każdemu otoczeniu',
					image: '/pracownie/stolarnia/product2.jpg',
				},
				{
					name: 'Hotele dla owadów',
					description:
						'Oferujemy hotele w różnych wielkościach i układach – od kompaktowych modeli idealnych na balkon, po większe domki ogrodowe, które pomieszczą wielu skrzydlatych lokatorów. Każdy z nich wykonany jest z naturalnych materiałów i zaprojektowany tak, by przyciągał różne gatunki owadów zapylających i chroniących rośliny',
					image: '/pracownie/stolarnia/product3.jpg',
				},
			],
			schedule: { monday: '8:00 - 14:00', tuesday: '8:00 - 14:00', wednesday: '8:00 - 14:00', thursday: '8:00 - 14:00', friday: '8:00 - 12:00' },
			instructor: {
				name: 'Lic. Adam Wellness',
				experience: '22 lata doświadczenia',
				description: 'Certyfikowany masażysta i fizjoterapeuta.',
				avatar: '/instructors/adam-wellness.jpg',
			},
		},
	};

	const workshop = workshopsData[slug];

	if (!workshop) {
		return (
			<div className={styles.notFound}>
				<div className={styles.notFoundCard}>
					<div className={styles.notFoundIcon}>❌</div>
					<h1>Pracownia nie znaleziona</h1>
					<p>Przepraszamy, nie możemy znaleźć tej pracowni.</p>
					<Link href='/' className={styles.backButton}>
						<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
						</svg>
						Wróć do strony głównej
					</Link>
				</div>
			</div>
		);
	}

	const dayNames = {
		monday: 'Poniedziałek',
		tuesday: 'Wtorek',
		wednesday: 'Środa',
		thursday: 'Czwartek',
		friday: 'Piątek',
	};

	return (
		<div className={styles.container}>
			{/* Modern Hero Section */}
			<section className={styles.hero} style={{ background: workshop.bgColor }}>
				<div className={styles.heroPattern}></div>
				<div className={styles.heroContent}>
					<div className={styles.heroLeft}>
						<div className={styles.heroIcon}>{workshop.icon}</div>
						<h1 className={styles.heroTitle}>{workshop.title}</h1>
						<p className={styles.heroSubtitle}>{workshop.subtitle}</p>
						<p className={styles.heroDescription}>{workshop.description}</p>
						<div className={styles.heroStats}>
							<div className={styles.heroStat}>
								<span className={styles.statNumber}>{workshop.skills.length}</span>
								<span className={styles.statLabel}>Umiejętności</span>
							</div>
							<div className={styles.heroStat}>
								<span className={styles.statNumber}>{workshop.projects.length}</span>
								<span className={styles.statLabel}>Projektów</span>
							</div>
							<div className={styles.heroStat}>
								<span className={styles.statNumber}>5</span>
								<span className={styles.statLabel}>Dni w tygodniu</span>
							</div>
						</div>
					</div>
					<div className={styles.heroRight}>
						<div className={styles.heroImageWrapper}>
							<Image src={workshop.image} alt={workshop.title} fill className={styles.heroImage} sizes='(max-width: 768px) 100vw, 50vw' priority />
							<div className={styles.heroImageOverlay}></div>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className={styles.skillsSection}>
				<div className={styles.containerLimited}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>Czego się nauczysz?</h2>
						<p className={styles.sectionSubtitle}>Rozwijaj swoje umiejętności krok po kroku</p>
					</div>
					<div className={styles.skillsGrid}>
						{workshop.skills.map((skill, index) => (
							<div key={index} className={styles.skillCard} style={{ animationDelay: `${index * 0.1}s` }}>
								<div className={styles.skillNumber}>{String(index + 1).padStart(2, '0')}</div>
								<div className={styles.skillContent}>
									<h3>{skill}</h3>
									<div className={styles.skillProgress}>
										<div className={styles.skillProgressBar}></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Showcase */}
			<section className={styles.projectsSection}>
				<div className={styles.containerLimited}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>Nasze realizacje</h2>
						<p className={styles.sectionSubtitle}>Zobacz, co tworzą nasi uczestnicy</p>
					</div>
					<div className={styles.projectsGrid}>
						{workshop.projects.map((project, index) => (
							<div key={index} className={styles.projectCard}>
								<div className={styles.projectImageWrapper}>
									<Image
										src={project.image}
										alt={project.name}
										fill
										className={styles.projectImage}
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
									<div className={styles.projectOverlay}>
										<div className={styles.projectIcon}>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
												/>
											</svg>
										</div>
									</div>
								</div>
								<div className={styles.projectContent}>
									<h3>{project.name}</h3>
									<p>{project.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Info Cards */}
			<section className={styles.infoSection}>
				<div className={styles.containerLimited}>
					<div className={styles.infoGrid}>
						{/* Schedule Card */}
						<div className={styles.infoCard}>
							<div className={styles.cardHeader}>
								<div className={styles.cardIcon}>
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
										/>
									</svg>
								</div>
								<h3>Harmonogram zajęć</h3>
							</div>
							<div className={styles.scheduleList}>
								{Object.entries(workshop.schedule).map(([day, hours]) => (
									<div key={day} className={styles.scheduleItem}>
										<span className={styles.scheduleDay}>{dayNames[day]}</span>
										<span className={styles.scheduleDots}></span>
										<span className={styles.scheduleHours}>{hours}</span>
									</div>
								))}
							</div>
						</div>

						{/* Instructor Card */}
						<div className={styles.infoCard}>
							<div className={styles.cardHeader}>
								<div className={styles.cardIcon}>
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
										/>
									</svg>
								</div>
								<h3>Twój instruktor</h3>
							</div>
							<div className={styles.instructorInfo}>
								<div className={styles.instructorAvatar}>
									<Image src={workshop.instructor.avatar} alt={workshop.instructor.name} fill className={styles.avatarImage} sizes='80px' />
								</div>
								<div className={styles.instructorDetails}>
									<h4>{workshop.instructor.name}</h4>
									<p className={styles.instructorExperience}>{workshop.instructor.experience}</p>
									<p className={styles.instructorDescription}>{workshop.instructor.description}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className={styles.ctaSection} style={{ background: workshop.bgColor }}>
				<div className={styles.containerLimited}>
					<div className={styles.ctaContent}>
						<div className={styles.ctaIcon}>{workshop.icon}</div>
						<h2>Gotowy na nową przygodę?</h2>
						<p>Dołącz do nas i rozpocznij swoją podróż w {workshop.title.toLowerCase()}</p>
						<div className={styles.ctaButtons}>
							<Link href='/kontakt' className={styles.ctaPrimary}>
								<span>Zapisz się teraz</span>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
								</svg>
							</Link>
							<Link href='/' className={styles.ctaSecondary}>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
								</svg>
								<span>Powrót do strony głównej</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
