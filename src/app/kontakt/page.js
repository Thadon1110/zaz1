'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Contact.module.scss';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Symulacja wysyłania formularza
		setTimeout(() => {
			setIsSubmitting(false);
			setSubmitted(true);
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			});

			// Auto-reset po 5 sekundach
			setTimeout(() => setSubmitted(false), 5000);
		}, 2000);
	};

	if (submitted) {
		return (
			<div className={styles.container}>
				<div className={styles.successWrapper}>
					<div className={styles.successCard}>
						<div className={styles.successIcon}>
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
							</svg>
						</div>
						<h2 className={styles.successTitle}>Wiadomość wysłana!</h2>
						<p className={styles.successText}>Dziękujemy za kontakt. Odpowiemy na Twoją wiadomość w ciągu 24 godzin.</p>
						<button onClick={() => setSubmitted(false)} className={styles.successButton}>
							Wyślij kolejną wiadomość
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{/* Hero Section */}
			<section className={styles.hero}>
				<div className={styles.heroBackground}>
					<Image src='/contact-bg.jpg' alt='Zakład Aktywności Zawodowej' fill className={styles.heroImage} priority />
					<div className={styles.heroOverlay}></div>
				</div>
				<div className={styles.heroContent}>
					<div className={styles.heroText}>
						<h1 className={styles.heroTitle}>
							<span className={styles.titleLine}>Skontaktuj się</span>
							<span className={styles.titleLine}>z nami</span>
						</h1>
						<p className={styles.heroDescription}>
							Masz pytania o nasze pracownie? Chcesz dowiedzieć się więcej o zapisach? Jesteśmy tutaj, aby Ci pomóc.
						</p>
						<div className={styles.heroStats}>
							<div className={styles.stat}>
								<span className={styles.statNumber}>24h</span>
								<span className={styles.statLabel}>Czas odpowiedzi</span>
							</div>
							<div className={styles.stat}>
								<span className={styles.statNumber}>10+</span>
								<span className={styles.statLabel}>Lat doświadczenia</span>
							</div>
							<div className={styles.stat}>
								<span className={styles.statNumber}>6</span>
								<span className={styles.statLabel}>Pracowni</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Methods */}
			<section className={styles.contactMethods}>
				<div className={styles.containerLimited}>
					<div className={styles.methodsGrid}>
						<div className={styles.methodCard}>
							<div className={styles.methodIcon}>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
									/>
								</svg>
							</div>
							<h3>Zadzwoń do nas</h3>
							<p>+48 123 456 789</p>
							<span className={styles.methodTime}>Pon-Pt: 7:00-15:00</span>
						</div>

						<div className={styles.methodCard}>
							<div className={styles.methodIcon}>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
									/>
								</svg>
							</div>
							<h3>Napisz do nas</h3>
							<p>kontakt@zaz-nysa.pl</p>
							<span className={styles.methodTime}>Odpowiadamy w 24h</span>
						</div>

						<div className={styles.methodCard}>
							<div className={styles.methodIcon}>
								<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
									/>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
								</svg>
							</div>
							<h3>Odwiedź nas</h3>
							<p>
								ul. Przykładowa 123
								<br />
								48-300 Nysa
							</p>
							<span className={styles.methodTime}>Parking dostępny</span>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className={styles.contactSection}>
				<div className={styles.containerLimited}>
					<div className={styles.contactGrid}>
						{/* Contact Form */}
						<div className={styles.formWrapper}>
							<div className={styles.formHeader}>
								<h2>Wyślij wiadomość</h2>
								<p>Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe</p>
							</div>

							<form onSubmit={handleSubmit} className={styles.contactForm}>
								<div className={styles.formGrid}>
									<div className={styles.inputGroup}>
										<label htmlFor='name'>Imię i nazwisko</label>
										<input type='text' id='name' name='name' value={formData.name} onChange={handleChange} placeholder='Jan Kowalski' required />
									</div>

									<div className={styles.inputGroup}>
										<label htmlFor='email'>Adres email</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formData.email}
											onChange={handleChange}
											placeholder='jan@example.com'
											required
										/>
									</div>
								</div>

								<div className={styles.formGrid}>
									<div className={styles.inputGroup}>
										<label htmlFor='phone'>Telefon</label>
										<input type='tel' id='phone' name='phone' value={formData.phone} onChange={handleChange} placeholder='+48 123 456 789' />
									</div>

									<div className={styles.inputGroup}>
										<label htmlFor='subject'>Temat</label>
										<select id='subject' name='subject' value={formData.subject} onChange={handleChange}>
											<option value=''>Wybierz temat</option>
											<option value='informacje'>Informacje ogólne</option>
											<option value='zapisanie'>Zapisanie do pracowni</option>
											<option value='uslugi'>Usługi komercyjne</option>
											<option value='wspolpraca'>Współpraca</option>
											<option value='inne'>Inne</option>
										</select>
									</div>
								</div>

								<div className={styles.inputGroup}>
									<label htmlFor='message'>Wiadomość</label>
									<textarea
										id='message'
										name='message'
										value={formData.message}
										onChange={handleChange}
										placeholder='Opisz swoje pytanie lub potrzeby...'
										rows={5}
										required
									></textarea>
								</div>

								<button type='submit' className={styles.submitButton} disabled={isSubmitting}>
									{isSubmitting ? (
										<>
											<div className={styles.spinner}></div>
											<span>Wysyłanie...</span>
										</>
									) : (
										<>
											<span>Wyślij wiadomość</span>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
											</svg>
										</>
									)}
								</button>
							</form>
						</div>

						{/* Contact Info & Map */}
						<div className={styles.infoWrapper}>
							<div className={styles.infoCard}>
								<h3>Informacje praktyczne</h3>

								<div className={styles.infoList}>
									<div className={styles.infoItem}>
										<div className={styles.infoIcon}>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
											</svg>
										</div>
										<div>
											<h4>Godziny pracy</h4>
											<p>
												Poniedziałek - Piątek: 7:00 - 15:00
												<br />
												Sobota: 8:00 - 12:00
												<br />
												Niedziela: Zamknięte
											</p>
										</div>
									</div>

									<div className={styles.infoItem}>
										<div className={styles.infoIcon}>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
												/>
											</svg>
										</div>
										<div>
											<h4>Często zadawane pytania</h4>
											<p>Sprawdź nasze FAQ lub zadzwoń bezpośrednio</p>
										</div>
									</div>

									<div className={styles.infoItem}>
										<div className={styles.infoIcon}>
											<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
												<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
											</svg>
										</div>
										<div>
											<h4>Bezpłatne konsultacje</h4>
											<p>Oferujemy bezpłatne konsultacje przed zapisaniem</p>
										</div>
									</div>
								</div>
							</div>

							<div className={styles.mapCard}>
								<h3>Jak do nas dotrzeć</h3>
								<div
									className={styles.mapPlaceholder}
									onClick={() =>
										window.open(
											'https://www.google.com/maps/place/Zak%C5%82ad+Aktywno%C5%9Bci+Zawodowej+w+Nysie+przy+infirmiCare+non+profit+sp.+z+o.o./@50.4911423,17.34673,696m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4711c5afa4d2723f:0xb3739e5208186035!8m2!3d50.4911389!4d17.3493049!16s%2Fg%2F11n5dn6fz0?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D',
											'_blank'
										)
									}
									style={{ cursor: 'pointer' }}
								>
									<div className={styles.mapIcon}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
											/>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
										</svg>
									</div>
									<p>Mapa Google Maps</p>
									<span>Kliknij aby otworzyć w nowej karcie</span>
								</div>

								<div className={styles.directions}>
									<h4>Transport publiczny</h4>
									<ul>
										<li>Autobus linii 1, 2, 3 - przystanek &quot;Centrum&quot;</li>
										<li>5 minut pieszo od dworca PKS</li>
										<li>Bezpłatny parking na terenie zakładu</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
