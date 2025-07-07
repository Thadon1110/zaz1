'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Workshop.module.scss';

export default function DepartmentPage() {
	const params = useParams();
	const slug = params.slug;

	const departmentsData = {
		stolarnia: {
			title: 'Dział Stolarski',
			subtitle: 'Tradycyjne rzemiosło w nowoczesnym wykonaniu',
			description:
				'Nasz dział stolarski to serce produkcji, gdzie tradycyjne techniki obróbki drewna spotykają się z nowoczesnymi technologiami. Tworzymy unikalne produkty z drewna, łącząc doświadczenie z innowacją.',
			image: '/pracownie/stolarnia/main.jpg',
			bgColor: 'linear-gradient(135deg, #8B4513 0%, #D2691E 100%)',
			icon: '🪵',
			capabilities: [
				'Precyzyjna obróbka drewna',
				'Nowoczesne maszyny CNC',
				'Tradycyjne techniki łączenia',
				'Profesjonalne wykańczanie powierzchni',
				'Projektowanie na zamówienie',
				'Kontrola jakości na każdym etapie',
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
			team: {
				size: '8 specjalistów',
				experience: 'Średnio 15 lat doświadczenia',
				specialization: 'Obróbka drewna i wykończenia',
			},
			equipment: ['Frezarki CNC', 'Piły tarczowe profesjonalne', 'Strugarki i grubościówki', 'Kabina lakiernicza', 'Narzędzia precyzyjne'],
		},
		artystyczna: {
			title: 'Dział Artystyczny',
			subtitle: 'Kreatywność w każdym detalu',
			description:
				'Nasz dział artystyczny to miejsce, gdzie pomysły nabierają kształtu. Specjalizujemy się w tworzeniu unikalnych produktów ręcznie robionych, które łączą funkcjonalność z estetyką.',
			image: '/pracownie/rękodzieło/main.jpg',
			bgColor: 'linear-gradient(135deg, #9B59B6 0%, #E74C3C 100%)',
			icon: '🎨',
			capabilities: [
				'Projektowanie autorskie',
				'Ręczne techniki wykonania',
				'Praca z różnymi materiałami',
				'Indywidualne podejście do zamówień',
				'Dekoracje tematyczne',
				'Produkty sezonowe',
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
			team: {
				size: '5 artystów',
				experience: 'Średnio 12 lat doświadczenia',
				specialization: 'Rękodzieło i dekoracje',
			},
			equipment: ['Stanowiska do plecenia', 'Narzędzia precyzyjne', 'Materiały premium', 'Stacja pakowania', 'Kontrola jakości'],
		},
		szwalnia: {
			title: 'Dział Tekstylny',
			subtitle: 'Precyzja w każdym ściegu',
			description:
				'Nasz dział tekstylny to centrum produkcji wysokiej jakości wyrobów z tkanin. Wykorzystujemy nowoczesne maszyny oraz tradycyjne techniki krawieckie do tworzenia funkcjonalnych i estetycznych produktów.',
			image: '/pracownie/szwalnia.jpg',
			bgColor: 'linear-gradient(135deg, #3498DB 0%, #2C3E50 100%)',
			icon: '🧵',
			capabilities: [
				'Szycie maszynowe i ręczne',
				'Projektowanie wzorów',
				'Obróbka różnych tkanin',
				'Profesjonalne wykończenia',
				'Produkcja seryjna i jednostkowa',
				'Kontrola jakości szwów',
			],
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
			team: {
				size: '6 krawców',
				experience: 'Średnio 18 lat doświadczenia',
				specialization: 'Tekstylia i akcesoria',
			},
			equipment: ['Maszyny do szycia przemysłowe', 'Overlocki i rozpinacze', 'Prasy do prasowania', 'Stoły krawieckie', 'Narzędzia pomiarowe'],
		},
		informatyczna: {
			title: 'Dział Technologii',
			subtitle: 'Innowacyjne rozwiązania produkcyjne',
			description:
				'Nasz dział technologii odpowiada za precyzyjne wycinanie i grawerowanie przy użyciu najnowocześniejszych maszyn CNC. Realizujemy projekty wymagające najwyższej precyzji.',
			image: '/pracownie/informatyczna.jpg',
			bgColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
			icon: '💻',
			capabilities: [
				'Wycinanie laserowe CNC',
				'Grawerowanie precyzyjne',
				'Projektowanie CAD/CAM',
				'Obróbka różnych materiałów',
				'Prototypowanie',
				'Produkcja seryjna',
			],
			projects: [
				{
					name: 'Wycinanie laserowe CNC',
					description:
						'Oferujemy profesjonalne usługi wycinania laserowego CNC z szerokiej gamy materiałów – takich jak sklejka, drewno, akryl oraz inne tworzywa. Dzięki nowoczesnej technologii jesteśmy w stanie realizować zarówno proste, jak i bardzo precyzyjne, ozdobne projekty – od pojedynczych elementów po większe serie produkcyjne',
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
			team: {
				size: '4 operatorów',
				experience: 'Średnio 8 lat doświadczenia',
				specialization: 'Technologie CNC i CAD',
			},
			equipment: ['Plotery laserowe CNC', 'Oprogramowanie CAD/CAM', 'Stacje projektowe', 'Systemy kontroli jakości', 'Narzędzia pomiarowe'],
		},
		sprzatajaca: {
			title: 'Dział Utrzymania Czystości',
			subtitle: 'Profesjonalne standardy czystości',
			description:
				'Nasz dział utrzymania czystości dba o najwyższe standardy higieny we wszystkich obszarach firmy. Zapewniamy odpowiednie warunki pracy oraz przedstawiamy firmę w najlepszym świetle.',
			image: '/pracownie/sprzatajaca.jpg',
			bgColor: 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
			icon: '🧹',
			capabilities: [
				'Kompleksowe sprzątanie obiektów',
				'Nowoczesne środki chemiczne',
				'Profesjonalny sprzęt',
				'Standardy bezpieczeństwa',
				'Ekologiczne rozwiązania',
				'Utrzymanie porządku',
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
			team: {
				size: '3 specjalistów',
				experience: 'Średnio 10 lat doświadczenia',
				specialization: 'Utrzymanie czystości',
			},
			equipment: [
				'Profesjonalne odkurzacze',
				'Maszyny do mycia podłóg',
				'Ekologiczne środki chemiczne',
				'Sprzęt do mycia okien',
				'Narzędzia specjalistyczne',
			],
		},
		masazysta: {
			title: 'Dział Wellness',
			subtitle: 'Dbałość o komfort zespołu',
			description:
				'Nasz dział wellness to przestrzeń relaksu i regeneracji dla pracowników. Oferujemy profesjonalne usługi masażu, które pomagają utrzymać zdrowie i dobre samopoczucie naszego zespołu.',
			image: '/pracownie/masazysta.jpg',
			bgColor: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)',
			icon: '💆',
			capabilities: [
				'Masaże relaksacyjne',
				'Terapie manualne',
				'Programy antystresowe',
				'Ergonomia pracy',
				'Profilaktyka zdrowotna',
				'Coaching wellness',
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
			team: {
				size: '2 terapeutów',
				experience: 'Średnio 20 lat doświadczenia',
				specialization: 'Masaż i terapie manualne',
			},
			equipment: ['Łóżka do masażu', 'Olejki aromaterapeutyczne', 'Sprzęt do fizjoterapii', 'Systemy relaksacyjne', 'Akcesoria wellness'],
		},
	};

	const department = departmentsData[slug];

	if (!department) {
		return (
			<div className={styles.notFound}>
				<div className={styles.notFoundCard}>
					<div className={styles.notFoundIcon}>❌</div>
					<h1>Dział nie znaleziony</h1>
					<p>Przepraszamy, nie możemy znaleźć tego działu.</p>
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

	return (
		<div className={styles.container}>
			{/* Modern Hero Section */}
			<section className={styles.hero} style={{ background: department.bgColor }}>
				<div className={styles.heroPattern}></div>
				<div className={styles.heroContent}>
					<div className={styles.heroLeft}>
						<div className={styles.heroIcon}>{department.icon}</div>
						<h1 className={styles.heroTitle}>{department.title}</h1>
						<p className={styles.heroSubtitle}>{department.subtitle}</p>
						<p className={styles.heroDescription}>{department.description}</p>
						<div className={styles.heroStats}>
							<div className={styles.heroStat}>
								<span className={styles.statNumber}>{department.capabilities.length}</span>
								<span className={styles.statLabel}>Możliwości</span>
							</div>
							<div className={styles.heroStat}>
								<span className={styles.statNumber}>{department.projects.length}</span>
								<span className={styles.statLabel}>Produktów</span>
							</div>
							<div className={styles.heroStat}>
								<span className={styles.statNumber}>{department.team.size.split(' ')[0]}</span>
								<span className={styles.statLabel}>Specjalistów</span>
							</div>
						</div>
					</div>
					<div className={styles.heroRight}>
						<div className={styles.heroImageWrapper}>
							<Image
								src={department.image}
								alt={department.title}
								fill
								className={styles.heroImage}
								sizes='(max-width: 768px) 100vw, 50vw'
								priority
							/>
							<div className={styles.heroImageOverlay}></div>
						</div>
					</div>
				</div>
			</section>

			{/* Capabilities Section */}
			<section className={styles.skillsSection}>
				<div className={styles.containerLimited}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>Nasze możliwości</h2>
						<p className={styles.sectionSubtitle}>Zobacz, co potrafimy najlepiej</p>
					</div>
					<div className={styles.skillsGrid}>
						{department.capabilities.map((capability, index) => (
							<div key={index} className={styles.skillCard} style={{ animationDelay: `${index * 0.1}s` }}>
								<div className={styles.skillNumber}>{String(index + 1).padStart(2, '0')}</div>
								<div className={styles.skillContent}>
									<h3>{capability}</h3>
									<div className={styles.skillProgress}>
										<div className={styles.skillProgressBar}></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Products Showcase */}
			<section className={styles.projectsSection}>
				<div className={styles.containerLimited}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>Nasze produkty</h2>
						<p className={styles.sectionSubtitle}>Przykłady naszych realizacji</p>
					</div>
					<div className={styles.projectsGrid}>
						{department.projects.map((project, index) => (
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

			{/* Team & Equipment Section */}
			<section className={styles.infoSection}>
				<div className={styles.containerLimited}>
					<div className={styles.infoGrid}>
						{/* Team Card */}
						<div className={styles.infoCard}>
							<div className={styles.cardHeader}>
								<div className={styles.cardIcon}>
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
										/>
									</svg>
								</div>
								<h3>Nasz zespół</h3>
							</div>
							<div className={styles.teamInfo}>
								<div className={styles.teamStat}>
									<span className={styles.teamLabel}>Wielkość zespołu:</span>
									<span className={styles.teamValue}>{department.team.size}</span>
								</div>
								<div className={styles.teamStat}>
									<span className={styles.teamLabel}>Doświadczenie:</span>
									<span className={styles.teamValue}>{department.team.experience}</span>
								</div>
								<div className={styles.teamStat}>
									<span className={styles.teamLabel}>Specjalizacja:</span>
									<span className={styles.teamValue}>{department.team.specialization}</span>
								</div>
							</div>
						</div>

						{/* Equipment Card */}
						<div className={styles.infoCard}>
							<div className={styles.cardHeader}>
								<div className={styles.cardIcon}>
									<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
										/>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
									</svg>
								</div>
								<h3>Nasz sprzęt</h3>
							</div>
							<div className={styles.equipmentList}>
								{department.equipment.map((item, index) => (
									<div key={index} className={styles.equipmentItem}>
										<div className={styles.equipmentIcon}>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
											</svg>
										</div>
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Process Section - Nowa sekcja */}
			<section className={styles.processSection}>
				<div className={styles.containerLimited}>
					<div className={styles.sectionHeader}>
						<h2 className={styles.sectionTitle}>Jak pracujemy</h2>
						<p className={styles.sectionSubtitle}>Nasz proces produkcyjny krok po kroku</p>
					</div>
					<div className={styles.processGrid}>
						<div className={styles.processStep}>
							<div className={styles.processNumber}>01</div>
							<div className={styles.processContent}>
								<h3>Analiza projektu</h3>
								<p>Dokładnie analizujemy wymagania i specyfikację projektu, aby zapewnić najlepsze rezultaty.</p>
							</div>
						</div>
						<div className={styles.processStep}>
							<div className={styles.processNumber}>02</div>
							<div className={styles.processContent}>
								<h3>Przygotowanie materiałów</h3>
								<p>Selekcjonujemy i przygotowujemy materiały najwyższej jakości, dopasowane do projektu.</p>
							</div>
						</div>
						<div className={styles.processStep}>
							<div className={styles.processNumber}>03</div>
							<div className={styles.processContent}>
								<h3>Realizacja</h3>
								<p>Wykorzystujemy nasze doświadczenie i nowoczesny sprzęt do precyzyjnego wykonania produktu.</p>
							</div>
						</div>
						<div className={styles.processStep}>
							<div className={styles.processNumber}>04</div>
							<div className={styles.processContent}>
								<h3>Kontrola jakości</h3>
								<p>Każdy produkt przechodzi szczegółową kontrolę jakości przed przekazaniem do klienta.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className={styles.ctaSection} style={{ background: department.bgColor }}>
				<div className={styles.containerLimited}>
					<div className={styles.ctaContent}>
						<div className={styles.ctaIcon}>{department.icon}</div>
						<h2>Chcesz poznać nasz dział?</h2>
						<p>Skontaktuj się z nami, aby dowiedzieć się więcej o możliwościach {department.title.toLowerCase()}</p>
						<div className={styles.ctaButtons}>
							<Link href='/kontakt' className={styles.ctaPrimary}>
								<span>Skontaktuj się z nami</span>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
								</svg>
							</Link>
							<Link href='/' className={styles.ctaSecondary}>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
								</svg>
								<span>Poznaj inne działy</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
