import LegalLayout from '@/components/LegalLayout';

export const metadata = {
	title: 'Regulamin | Nazwa Firmy',
	description: 'Regulamin serwisu - zasady korzystania z naszych usług.',
};

export default function TermsPage() {
	return (
		<LegalLayout title='Regulamin' lastUpdated='15 grudnia 2024'>
			<h2>1. Postanowienia ogólne</h2>
			<p>
				Niniejszy Regulamin określa zasady korzystania z serwisu internetowego prowadzonego przez <strong>[Nazwa Firmy]</strong> dostępnego pod
				adresem [adres strony].
			</p>
			<p>Korzystanie z serwisu oznacza akceptację wszystkich postanowień niniejszego Regulaminu.</p>

			<h2>2. Definicje</h2>
			<ul>
				<li>
					<strong>Serwis</strong> - serwis internetowy prowadzony przez Administratora
				</li>
				<li>
					<strong>Administrator</strong> - [Nazwa Firmy] z siedzibą w [Adres]
				</li>
				<li>
					<strong>Użytkownik</strong> - osoba korzystająca z Serwisu
				</li>
				<li>
					<strong>Treści</strong> - wszystkie materiały dostępne w Serwisie
				</li>
			</ul>

			<h2>3. Zasady korzystania z serwisu</h2>
			<p>Użytkownik zobowiązuje się do:</p>
			<ul>
				<li>Korzystania z Serwisu zgodnie z jego przeznaczeniem</li>
				<li>Niepodejmowania działań naruszających funkcjonowanie Serwisu</li>
				<li>Nieumieszczania treści niezgodnych z prawem</li>
				<li>Poszanowania praw autorskich i innych praw własności intelektualnej</li>
			</ul>

			<h2>4. Prawa autorskie</h2>
			<p>
				Wszystkie treści zamieszczone w Serwisie są chronione prawem autorskim. Kopiowanie, rozpowszechnianie lub inne wykorzystywanie treści bez
				zgody Administratora jest zabronione.
			</p>

			<h2>5. Wyłączenie odpowiedzialności</h2>
			<p>
				Administrator dokłada wszelkich starań, aby informacje zawarte w Serwisie były aktualne i rzetelne, jednak nie ponosi odpowiedzialności za:
			</p>
			<ul>
				<li>Szkody wynikające z korzystania lub niemożności korzystania z Serwisu</li>
				<li>Utratę danych</li>
				<li>Działania osób trzecich</li>
				<li>Awarie techniczne</li>
			</ul>

			<h2>6. Ochrona danych osobowych</h2>
			<p>
				Zasady przetwarzania danych osobowych określa odrębna
				<strong> Polityka Prywatności</strong>.
			</p>

			<h2>7. Pliki cookies</h2>
			<p>
				Serwis wykorzystuje pliki cookies. Szczegółowe informacje znajdują się w <strong>Polityce Cookies</strong>.
			</p>

			<h2>8. Zmiany regulaminu</h2>
			<p>
				Administrator zastrzega sobie prawo do wprowadzania zmian w Regulaminie. O zmianach Użytkownicy będą informowani poprzez publikację nowej
				wersji w Serwisie.
			</p>

			<h2>9. Prawo właściwe i jurysdykcja</h2>
			<p>
				W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego. Wszelkie spory będą rozstrzygane przez sądy
				właściwe dla siedziby Administratora.
			</p>

			<h2>10. Kontakt</h2>
			<p>
				W sprawach związanych z Regulaminem można kontaktować się pod adresem:
				<strong>kontakt@firma.pl</strong>
			</p>
		</LegalLayout>
	);
}
