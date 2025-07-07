'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const legalData = {
	'polityka-prywatnosci': {
		title: 'Polityka Prywatności',
		icon: '🔒',
		lastUpdate: '15 grudnia 2024',
		sections: [
			{
				title: 'Administrator danych',
				content:
					'Administratorem Państwa danych osobowych jest [Nazwa Firmy] z siedzibą w [Adres], wpisana do rejestru przedsiębiorców prowadzonego przez Sąd Rejonowy pod numerem KRS: [numer].',
			},
			{
				title: 'Zakres przetwarzanych danych',
				content:
					'Przetwarzamy następujące kategorie danych osobowych: imię i nazwisko, adres e-mail, numer telefonu, dane kontaktowe niezbędne do realizacji usług oraz komunikacji z klientami.',
			},
			{
				title: 'Cele przetwarzania',
				content:
					'Dane osobowe przetwarzamy w celu: realizacji umów i świadczenia usług, komunikacji z klientami, marketingu bezpośredniego, wypełnienia obowiązków prawnych oraz w celach analitycznych.',
			},
			{
				title: 'Podstawy prawne',
				content:
					'Przetwarzanie odbywa się na podstawie: wyrażonej zgody (art. 6 ust. 1 lit. a RODO), wykonania umowy (art. 6 ust. 1 lit. b RODO), wypełnienia obowiązku prawnego (art. 6 ust. 1 lit. c RODO).',
			},
			{
				title: 'Okres przechowywania',
				content:
					'Dane przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, nie dłużej niż przez 10 lat od zakończenia współpracy, chyba że przepisy prawne stanowią inaczej.',
			},
			{
				title: 'Prawa osób, których dane dotyczą',
				content:
					'Przysługuje Państwu prawo do: dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu oraz cofnięcia zgody w dowolnym momencie.',
			},
		],
	},
	regulamin: {
		title: 'Regulamin',
		icon: '📋',
		lastUpdate: '15 grudnia 2024',
		sections: [
			{
				title: 'Postanowienia ogólne',
				content:
					'Niniejszy regulamin określa zasady korzystania z usług świadczonych przez [Nazwa Firmy]. Korzystanie z naszych usług oznacza akceptację wszystkich postanowień regulaminu.',
			},
			{
				title: 'Definicje',
				content:
					'Usługodawca - [Nazwa Firmy]; Klient - osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług; Usługi - wszystkie usługi oferowane przez Usługodawcę.',
			},
			{
				title: 'Zakres usług',
				content:
					'Oferujemy kompleksowe usługi w zakresie: produkcji wyrobów drewnianych, tekstylnych, artystycznych, technologii CNC, utrzymania czystości oraz usług wellness dla firm.',
			},
			{
				title: 'Warunki świadczenia usług',
				content:
					'Usługi świadczone są na podstawie zawartej umowy. Szczegółowe warunki określane są indywidualnie dla każdego zlecenia. Wszystkie usługi wykonywane są zgodnie z najwyższymi standardami jakości.',
			},
			{
				title: 'Płatności i rozliczenia',
				content:
					'Płatności realizowane są zgodnie z warunkami określonymi w umowie. Akceptujemy płatności przelewem bankowym, kartą płatniczą oraz gotówką. Faktury wystawiane są zgodnie z obowiązującymi przepisami.',
			},
			{
				title: 'Odpowiedzialność',
				content:
					'Usługodawca ponosi odpowiedzialność za świadczone usługi zgodnie z obowiązującymi przepisami prawa. Wszelkie reklamacje rozpatrywane są indywidualnie w terminie 14 dni roboczych.',
			},
			{
				title: 'Postanowienia końcowe',
				content:
					'W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy Kodeksu Cywilnego oraz inne obowiązujące przepisy prawa polskiego.',
			},
		],
	},
	cookies: {
		title: 'Polityka Cookies',
		icon: '🍪',
		lastUpdate: '15 grudnia 2024',
		sections: [
			{
				title: 'Czym są pliki cookies',
				content:
					'Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas przeglądania stron internetowych. Pozwalają one na rozpoznanie urządzenia i dostosowanie zawartości do preferencji użytkownika.',
			},
			{
				title: 'Rodzaje wykorzystywanych cookies',
				content:
					'Używamy cookies niezbędnych (zapewniają podstawowe funkcjonalności), funkcjonalnych (zapamiętują preferencje), analitycznych (zbierają dane o ruchu) oraz marketingowych (personalizują reklamy).',
			},
			{
				title: 'Cele wykorzystania',
				content:
					'Pliki cookies wykorzystujemy w celu: zapewnienia prawidłowego działania strony, zapamiętywania preferencji użytkownika, analizowania ruchu na stronie oraz wyświetlania spersonalizowanych treści.',
			},
			{
				title: 'Cookies stron trzecich',
				content:
					'Nasza strona może zawierać cookies pochodzące od dostawców zewnętrznych, takich jak Google Analytics, Facebook Pixel czy inne narzędzia analityczne i marketingowe.',
			},
			{
				title: 'Zarządzanie cookies',
				content:
					'Możesz zarządzać plikami cookies poprzez ustawienia przeglądarki internetowej. Pamiętaj, że wyłączenie niektórych cookies może wpłynąć na funkcjonalność strony.',
			},
			{
				title: 'Aktualizacje polityki',
				content:
					'Polityka cookies może być aktualizowana. O wszelkich zmianach poinformujemy na stronie internetowej. Zalecamy regularne sprawdzanie tej polityki.',
			},
		],
	},
};

const iconMap = {
	'polityka-prywatnosci': '🔒',
	regulamin: '📋',
	cookies: '🍪',
};

export default function LegalPage() {
	const params = useParams();
	const slug = params.slug;
	const page = legalData[slug];

	if (!page) {
		return (
			<div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6'>
				<div className='bg-white rounded-3xl p-12 text-center shadow-xl max-w-md w-full'>
					<div className='text-6xl mb-6'>❌</div>
					<h1 className='text-2xl font-bold text-slate-800 mb-4'>Strona nie znaleziona</h1>
					<p className='text-slate-600 mb-8'>Nie możemy znaleźć tej strony.</p>
					<Link
						href='/'
						className='inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
					>
						<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
						</svg>
						Strona główna
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100'>
			{/* Header */}
			<header className='bg-white/80 backdrop-blur-xl border-b border-slate-200/50 sticky top-0 z-50'>
				<div className='max-w-4xl mx-auto px-6 py-6 flex items-center justify-between'>
					<div className='flex items-center gap-4'>
						<div className='text-4xl'>{page.icon}</div>
						<div>
							<h1 className='text-2xl font-bold text-slate-800'>{page.title}</h1>
							<p className='text-sm text-slate-500'>Aktualizacja: {page.lastUpdate}</p>
						</div>
					</div>
					<Link href='/' className='flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors duration-200'>
						<svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
						</svg>
						<span className='font-medium'>Powrót</span>
					</Link>
				</div>
			</header>

			{/* Content */}
			<main className='max-w-4xl mx-auto px-6 py-12'>
				<div className='space-y-8'>
					{page.sections.map((section, index) => (
						<section
							key={index}
							className='bg-white rounded-2xl p-8 shadow-sm border border-slate-200/50 hover:shadow-lg transition-all duration-300'
						>
							<div className='flex items-start gap-4'>
								<div className='w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1'>
									{index + 1}
								</div>
								<div className='flex-1'>
									<h2 className='text-xl font-bold text-slate-800 mb-4'>{section.title}</h2>
									<div className='prose prose-slate max-w-none'>
										<p className='text-slate-600 leading-relaxed'>{section.content}</p>
									</div>
								</div>
							</div>
						</section>
					))}
				</div>

				{/* Contact Section */}
				<div className='mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center'>
					<div className='text-3xl mb-4'>📞</div>
					<h3 className='text-xl font-bold mb-2'>Masz pytania?</h3>
					<p className='text-blue-100 mb-6'>Skontaktuj się z nami, jeśli potrzebujesz dodatkowych informacji.</p>
					<Link
						href='/kontakt'
						className='inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-200'
					>
						Kontakt
						<svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
						</svg>
					</Link>
				</div>

				{/* Navigation */}
				<nav className='mt-12 flex justify-center'>
					<div className='flex gap-4 bg-white rounded-2xl p-2 shadow-sm border border-slate-200/50'>
						{Object.entries(legalData).map(([key, data]) => (
							<Link
								key={key}
								href={`/${key}`}
								className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
									slug === key ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
								}`}
							>
								<span className='text-lg'>{iconMap[key]}</span>
								<span className='font-medium text-sm'>{data.title}</span>
							</Link>
						))}
					</div>
				</nav>
			</main>
		</div>
	);
}
