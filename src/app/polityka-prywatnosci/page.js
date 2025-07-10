import LegalLayout from '@/components/LegalLayout';

export const metadata = {
	title: 'Polityka prywatności | Nazwa Firmy',
	description: 'Polityka prywatności - informacje o przetwarzaniu danych osobowych w naszej firmie.',
};

export default function PrivacyPolicyPage() {
	return (
		<LegalLayout title='Polityka prywatności' lastUpdated='15 grudnia 2024'>
			<h2>1. Informacje ogólne</h2>
			<p>
				Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z
				korzystaniem z serwisu internetowego.
			</p>
			<p>
				Administratorem danych osobowych jest <strong>[Nazwa Firmy]</strong> z siedzibą w [Adres], wpisana do rejestru przedsiębiorców prowadzonego
				przez Sąd Rejonowy pod numerem KRS: [numer].
			</p>

			<h2>2. Rodzaje przetwarzanych danych</h2>
			<p>W ramach świadczonych usług możemy przetwarzać następujące kategorie danych osobowych:</p>
			<ul>
				<li>Dane identyfikacyjne (imię, nazwisko)</li>
				<li>Dane kontaktowe (adres e-mail, numer telefonu)</li>
				<li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
				<li>Dane dotyczące sposobu korzystania z serwisu</li>
			</ul>

			<h2>3. Cele i podstawy prawne przetwarzania</h2>
			<p>Dane osobowe przetwarzane są w następujących celach:</p>
			<ul>
				<li>
					<strong>Świadczenie usług</strong> - na podstawie art. 6 ust. 1 lit. b RODO
				</li>
				<li>
					<strong>Marketing bezpośredni</strong> - na podstawie art. 6 ust. 1 lit. f RODO
				</li>
				<li>
					<strong>Wypełnienie obowiązków prawnych</strong> - na podstawie art. 6 ust. 1 lit. c RODO
				</li>
				<li>
					<strong>Analiza statystyczna</strong> - na podstawie art. 6 ust. 1 lit. f RODO
				</li>
			</ul>

			<h2>4. Okres przechowywania danych</h2>
			<p>
				Dane osobowe będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, nie dłużej jednak niż przez okres
				wynikający z przepisów prawa.
			</p>

			<h2>5. Odbiorcy danych</h2>
			<p>Odbiorcami danych osobowych mogą być:</p>
			<ul>
				<li>Podmioty świadczące usługi IT i hostingowe</li>
				<li>Podmioty świadczące usługi księgowe i prawne</li>
				<li>Organy państwowe uprawnione na podstawie przepisów prawa</li>
			</ul>

			<h2>6. Prawa osób, których dane dotyczą</h2>
			<p>Zgodnie z RODO przysługują Państwu następujące prawa:</p>
			<ul>
				<li>Prawo dostępu do swoich danych osobowych</li>
				<li>Prawo do sprostowania danych osobowych</li>
				<li>Prawo do usunięcia danych osobowych</li>
				<li>Prawo do ograniczenia przetwarzania danych osobowych</li>
				<li>Prawo do przenoszenia danych osobowych</li>
				<li>Prawo sprzeciwu wobec przetwarzania danych osobowych</li>
				<li>Prawo do cofnięcia zgody</li>
			</ul>

			<h2>7. Bezpieczeństwo danych</h2>
			<p>
				Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo przetwarzanych danych osobowych odpowiednie do ryzyka
				związanego z przetwarzaniem.
			</p>

			<h2>8. Kontakt</h2>
			<p>
				W sprawach związanych z ochroną danych osobowych można kontaktować się z nami pod adresem e-mail: <strong>ochronadanych@firma.pl</strong>
			</p>
		</LegalLayout>
	);
}
