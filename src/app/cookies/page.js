import LegalLayout from '@/components/LegalLayout';

export const metadata = {
	title: 'Polityka Cookies | Nazwa Firmy',
	description: 'Polityka Cookies - informacje o wykorzystywaniu plików cookies w naszym serwisie.',
};

export default function CookiesPage() {
	return (
		<LegalLayout title='Polityka Cookies' lastUpdated='15 grudnia 2024'>
			<h2>1. Czym są pliki cookies?</h2>
			<p>
				Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu Użytkownika podczas przeglądania stron internetowych. Zawierają informacje o
				preferencjach i działaniach Użytkownika.
			</p>

			<h2>2. Rodzaje wykorzystywanych cookies</h2>

			<h3>Cookies niezbędne</h3>
			<p>
				Te pliki cookies są niezbędne do prawidłowego funkcjonowania serwisu. Umożliwiają podstawowe funkcje, takie jak nawigacja po stronie i dostęp
				do zabezpieczonych obszarów.
			</p>

			<h3>Cookies analityczne</h3>
			<p>
				Pomagają nam zrozumieć, w jaki sposób Użytkownicy korzystają z naszego serwisu, dzięki czemu możemy go ulepszać. Zbierają informacje
				anonimowo.
			</p>

			<h3>Cookies funkcjonalne</h3>
			<p>Umożliwiają serwisowi zapamiętanie wyborów dokonanych przez Użytkownika i zapewnienie ulepszonych, bardziej spersonalizowanych funkcji.</p>

			<h3>Cookies marketingowe</h3>
			<p>Wykorzystywane są do śledzenia użytkowników między stronami internetowymi w celu wyświetlania reklam, które są odpowiednie i angażujące.</p>

			<h2>3. Szczegółowa lista cookies</h2>

			<h3>Cookies własne:</h3>
			<ul>
				<li>
					<strong>session_id</strong> - identyfikator sesji (niezbędne)
				</li>
				<li>
					<strong>preferences</strong> - preferencje użytkownika (funkcjonalne)
				</li>
				<li>
					<strong>consent</strong> - zgoda na cookies (niezbędne)
				</li>
			</ul>

			<h3>Cookies stron trzecich:</h3>
			<ul>
				<li>
					<strong>Google Analytics</strong> - analiza ruchu (analityczne)
				</li>
				<li>
					<strong>Google Ads</strong> - reklamy (marketingowe)
				</li>
				<li>
					<strong>Facebook Pixel</strong> - remarketing (marketingowe)
				</li>
			</ul>

			<h2>4. Zarządzanie cookies</h2>
			<p>
				Użytkownik może kontrolować i/lub usuwać pliki cookies według własnych preferencji. Można usunąć wszystkie pliki cookies znajdujące się już na
				komputerze, a także ustawić większość przeglądarek tak, aby uniemożliwić ich umieszczanie.
			</p>

			<h3>Ustawienia w przeglądarkach:</h3>
			<ul>
				<li>
					<strong>Chrome:</strong> Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie
				</li>
				<li>
					<strong>Firefox:</strong> Opcje → Prywatność i bezpieczeństwo → Pliki cookie
				</li>
				<li>
					<strong>Safari:</strong> Preferencje → Prywatność → Pliki cookie
				</li>
				<li>
					<strong>Edge:</strong> Ustawienia → Prywatność i usługi → Pliki cookie
				</li>
			</ul>

			<h2>5. Konsekwencje wyłączenia cookies</h2>
			<p>
				Należy pamiętać, że wyłączenie lub ograniczenie plików cookies może wpłynąć na funkcjonalność serwisu. Niektóre funkcje mogą nie działać
				prawidłowo.
			</p>

			<h2>6. Zgodność z RODO</h2>
			<p>
				Przetwarzanie danych poprzez pliki cookies odbywa się zgodnie z przepisami RODO i wymogami dyrektywy ePrivacy. Szczegółowe informacje o
				przetwarzaniu danych znajdziesz w naszej <strong>Polityce Prywatności</strong>.
			</p>

			<h2>7. Zmiany w polityce cookies</h2>
			<p>
				Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Cookies. O wszelkich zmianach będziemy informować poprzez publikację
				zaktualizowanej wersji.
			</p>

			<h2>8. Kontakt</h2>
			<p>
				W przypadku pytań dotyczących naszej Polityki Cookies, prosimy o kontakt:
				<strong>cookies@firma.pl</strong>
			</p>
		</LegalLayout>
	);
}
