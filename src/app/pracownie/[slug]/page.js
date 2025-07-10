'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Workshop.module.scss';

export default function WorkshopPage() {
	const params = useParams();
	const router = useRouter();
	const slug = params.slug;
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
	const [activeTab, setActiveTab] = useState('features');
	const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
	const [galleryImageIndex, setGalleryImageIndex] = useState(0);

	const departmentsData = {
		stolarnia: {
			title: 'Dział Stolarski',
			subtitle: 'Tradycyjne rzemiosło w nowoczesnym wykonaniu',
			description:
				'Nasz dział stolarski to serce produkcji, gdzie tradycyjne techniki obróbki drewna spotykają się z nowoczesnymi technologiami. Tworzymy unikalne produkty z drewna, łącząc doświadczenie z innowacją.',
			heroImage: '/pracownie/stolarnia/main.jpg',
			galleryImages: ['/pracownie/stolarnia/workshop1.jpg', '/pracownie/stolarnia/workshop2.jpg', '/pracownie/stolarnia/workshop3.jpg'],
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
					id: 1,
					name: 'Drewniane budki lęgowe dla ptaków',
					description:
						'Tworzymy solidne i funkcjonalne budki lęgowe dla ptaków, wykonane z naturalnego drewna. Każda budka powstaje z myślą o komforcie i bezpieczeństwie skrzydlatych lokatorów z odpowiednimi wymiarami i otworem wlotowym, dostosowanym do konkretnych gatunków.\n\n Nasze budki to nie tylko pomoc dla ptaków w sezonie lęgowym, ale także estetyczny i ekologiczny dodatek do ogrodu, sadu, działki czy terenów zielonych.\n\nZawieś budkę i stwórz bezpieczne miejsce dla ptasich rodzin. Pomagając przyrodzie, wprowadzasz życie do swojego otoczenia.',
					shortDescription: 'Ekologiczne budki lęgowe wykonane z naturalnego drewna',
					category: 'Produkty ogrodowe',
					images: ['/pracownie/stolarnia/budki/main.jpg', '/pracownie/stolarnia/budki/product1.jpg'],
					specifications: [
						'Materiał: drewno sosnowe',
						'Wymiary: 20x15x25 cm',
						'Otwór: 32mm średnicy',
						'Impregnacja ekologiczna',
						'Dach dwuspadowy',
						'Mocowanie na drzewo/słup',
						'Czyszczenie: wyjmowana podstawa',
						'Wentylacja: otwory boczne',
					],
					features: [
						'Wykonane z naturalnego, nielakierowanego drewna',
						'Trwałe i odporne na warunki zewnętrzne',
						'Przemyślana konstrukcja zgodna z zaleceniami ornitologicznymi',
						'Łatwe w montażu i czyszczeniu',
						'Dostępne różne modele – dla sikorek, wróbli, muchołówek i innych ptaków',
					],
					technicalDetails: {
						'Grubość ścianek': '12mm',
						'Rodzaj drewna': 'Sosna skandynawska',
						Impregnacja: 'Olej lniany',
						Waga: '0.8 kg',
						Gwarancja: '24 miesiące',
					},
				},
				{
					id: 2,
					name: 'Drewniany kwietnik',
					description:
						'Wyjątkowy kwietnik w formie miniaturowego drewnianego wozu to oryginalna ozdoba, która wprowadzi do Twojej przestrzeni rustykalny urok i naturalny klimat. Na wozie umieszczone są trzy pojemniki, idealne do wyeksponowania roślin, ziół lub kompozycji kwiatowych.\n\nWykonany z drewna i starannie wykończony, świetnie sprawdzi się zarówno na tarasie, balkonie, jak i w ogrodzie czy wewnątrz domu. To dekoracja, która przyciąga wzrok i dodaje charakteru każdemu otoczeniu.\n\nDodaj swojemu otoczeniu niepowtarzalnego uroku dzięki temu oryginalnemu kwietnikowi.',
					shortDescription: 'Dekoracyjny kwietnik w formie drewnianego wozu',
					category: 'Dekoracje ogrodowe',
					images: [
						'/pracownie/stolarnia/kwietnik/main.jpg',
						'/pracownie/stolarnia/kwietnik/product1.jpg',
						'/pracownie/stolarnia/kwietnik/product2.jpg',
					],
					specifications: [
						'Materiał: drewno sosnowe i brzozowe',
						'Wymiary: 45x25x20 cm',
						'3 pojemniki na rośliny',
						'Koła ruchome',
						'Impregnacja naturalna',
						'Uchwyty do przenoszenia',
						'Odpływ wody w pojemnikach',
						'Mobilna konstrukcja',
					],
					features: [
						'Ozdobna forma mini wozu z miejscem na kwiaty',
						'Ręczne wykonanie z drewna',
						'Trzy pojemniki na rośliny lub kompozycje dekoracyjne',
						'Stylowy dodatek do ogrodu, balkonu lub wnętrza',
						'Idealny na prezent dla miłośników roślin i rękodzieła',
					],
					technicalDetails: {
						'Pojemność pojemników': '1.2L każdy',
						'Średnica kół': '12cm',
						'Rodzaj drewna': 'Sosna + brzoza',
						Wykończenie: 'Olej naturalny',
						Waga: '2.1 kg',
						Gwarancja: '18 miesięcy',
					},
				},
				{
					id: 3,
					name: 'Hotele dla owadów',
					description:
						'Ręcznie wykonane hotele dla owadów to nie tylko ekologiczna ozdoba ogrodu, ale przede wszystkim bezpieczne schronienie dla pożytecznych owadów, takich jak pszczoły murarki, biedronki, złotooki czy motyle.\n\nOferujemy hotele w różnych wielkościach i układach – od kompaktowych modeli idealnych na balkon, po większe domki ogrodowe, które pomieszczą wielu skrzydlatych lokatorów. Każdy z nich wykonany jest z naturalnych materiałów i zaprojektowany tak, by przyciągał różne gatunki owadów zapylających i chroniących rośliny.\n\nZadbaj o przyrodę lokalnie – daj owadom dom, a sobie – piękny i żywy zakątek natury.',
					shortDescription: 'Ekologiczne hotele dla pożytecznych owadów',
					category: 'Ekologia',
					images: [
						'/pracownie/stolarnia/hotele/main.jpg',
						'/pracownie/stolarnia/hotele/product1.jpg',
						'/pracownie/stolarnia/hotele/product2.jpg',
						'/pracownie/stolarnia/hotele/product3.jpg',
						'/pracownie/stolarnia/hotele/product4.jpg',
					],
					specifications: [
						'Materiał: drewno naturalne',
						'Wymiary: 30x20x35 cm',
						'Różne komory dla owadów',
						'Bambus, drewno, szyszki',
						'Dach ochronny',
						'Zawieszka stalowa',
						'Wentylacja naturalna',
						'Materiały ekologiczne',
					],
					features: [
						'Ręczne wykonanie z drewna i naturalnych wypełnień',
						'Różne wielkości i układy – dopasowane do przestrzeni',
						'Funkcjonalny i estetyczny element ogrodu lub balkonu',
						'Wspiera bioróżnorodność i naturalne zapylanie roślin',
						'Gotowy do zawieszenia lub ustawienia',
					],
					technicalDetails: {
						'Ilość komór': '8-12',
						'Rodzaj drewna': 'Sosna + dąb',
						Wypełnienie: 'Bambus, słoma, szyszki',
						Dach: 'Gont drewniany',
						Waga: '1.8 kg',
						Gwarancja: '36 miesięcy',
					},
				},

				{
					id: 4,
					name: 'Drewniane doniczki',
					description:
						'Oferujemy ręcznie wykonane doniczki z drewna, które doskonale łączą funkcjonalność z naturalnym, estetycznym wyglądem. Dzięki różnorodnym wymiarom łatwo dopasujesz je do swoich potrzeb – zarówno do wnętrz, jak i przestrzeni ogrodowej czy tarasu.\n\nKażda doniczka wykonana jest z solidnego drewna, z dbałością o detale i trwałość. To doskonałe rozwiązanie dla tych, którzy cenią ekologiczne materiały i chcą wprowadzić do swojej przestrzeni odrobinę natury.\n\nDrewniane doniczki to nie tylko praktyczny wybór, ale też wyjątkowy element dekoracyjny, który pięknie podkreśli charakter każdej rośliny.',
					shortDescription: 'Ręcznie wykonane doniczki z naturalnego drewna do domu i ogrodu',
					category: 'Dekoracje ogrodowe',
					images: [
						'/pracownie/stolarnia/doniczki/main.jpg',
						'/pracownie/stolarnia/doniczki/product1.jpg',
						'/pracownie/stolarnia/doniczki/product2.jpg',
						'/pracownie/stolarnia/doniczki/product3.jpg',
						'/pracownie/stolarnia/doniczki/product4.jpg',
						'/pracownie/stolarnia/doniczki/product5.jpg',
					],
					specifications: [
						'Materiał: drewno sosnowe',
						'Wymiary: 20x15x25 cm',
						'Otwór: 32mm średnicy',
						'Impregnacja ekologiczna',
						'Dach dwuspadowy',
						'Mocowanie na drzewo/słup',
						'Czyszczenie: wyjmowana podstawa',
						'Wentylacja: otwory boczne',
					],
					features: [
						'Naturalne drewno – trwałe i estetyczne',
						'Ręczne wykonanie i staranne wykończenie',
						'Dostępne różne rozmiary – do małych i większych roślin',
						'Idealne do domu, na balkon, taras i do ogrodu',
						'Możliwość zamówień indywidualnych',
					],
					technicalDetails: {
						'Grubość ścianek': '12mm',
						'Rodzaj drewna': 'Sosna skandynawska',
						Impregnacja: 'Olej lniany',
						Waga: '0.8 kg',
						Gwarancja: '24 miesiące',
					},
				},

				{
					id: 5,
					name: 'Drewniane karmniki dla ptaków',
					description:
						'Solidne, estetyczne i w pełni funkcjonalne karmniki wykonane z naturalnego drewna to idealny sposób na dokarmianie ptaków przez cały rok. Ręcznie wykonane z dbałością o szczegóły, stanowią nie tylko pomoc dla ptaków, ale też piękną ozdobę ogrodu, balkonu czy tarasu.\n\nDzięki przemyślanej konstrukcji karmniki chronią pokarm przed deszczem i śniegiem, a otwarta forma ułatwia ptakom dostęp do ziaren. To doskonały wybór dla każdego, kto chce obserwować ptasie życie z bliska i wspierać lokalną przyrodę.\n\nPomóż ptakom przetrwać trudniejsze pory roku i ciesz się ich obecnością każdego dnia.',
					shortDescription: 'Estetyczne i funkcjonalne karmniki z drewna do całorocznego dokarmiania ptaków',
					category: 'Produkty ogrodowe',
					images: [
						'/pracownie/stolarnia/karmniki/main.jpg',
						'/pracownie/stolarnia/karmniki/product1.jpg',
						'/pracownie/stolarnia/karmniki/product2.jpg',
						'/pracownie/stolarnia/karmniki/product3.jpg',
					],
					specifications: [
						'Materiał: drewno sosnowe',
						'Wymiary: 20x15x25 cm',
						'Otwór: 32mm średnicy',
						'Impregnacja ekologiczna',
						'Dach dwuspadowy',
						'Mocowanie na drzewo/słup',
						'Czyszczenie: wyjmowana podstawa',
						'Wentylacja: otwory boczne',
					],
					features: [
						'Ręczne wykonanie z naturalnego drewna',
						'Trwała i stabilna konstrukcja',
						'Praktyczny daszek chroniący karmę przed wilgocią',
						'Możliwość zawieszenia lub postawienia',
						'Estetyczny dodatek do ogrodu, balkonu lub działki',
					],
					technicalDetails: {
						'Grubość ścianek': '12mm',
						'Rodzaj drewna': 'Sosna skandynawska',
						Impregnacja: 'Olej lniany',
						Waga: '0.8 kg',
						Gwarancja: '24 miesiące',
					},
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
			heroImage: '/pracownie/rękodzieło/main.jpg',
			galleryImages: [
				'/pracownie/rękodzieło/workshop1.jpg',
				'/pracownie/rękodzieło/workshop2.jpg',
				'/pracownie/rękodzieło/workshop3.jpg',
				'/pracownie/rękodzieło/workshop4.jpg',
				'/pracownie/rękodzieło/workshop5.jpg',
				'/pracownie/rękodzieło/workshop6.jpg',
				'/pracownie/rękodzieło/workshop7.jpg',
				'/pracownie/rękodzieło/workshop8.jpg',
				'/pracownie/rękodzieło/workshop9.jpg',
			],
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
					id: 1,
					name: 'Koszyk ręcznie wykonany ze sznurka',
					description:
						'Ręcznie wykonany koszyk ze sznurka wysokiej jakości to idealne połączenie estetyki i funkcjonalności. Starannie pleciony z grubego, wytrzymałego sznurka, zachwyca swoją strukturą i nowoczesnym wyglądem. Jego neutralny zielony kolor sprawia, że doskonale wpasuje się w każde wnętrze – od minimalistycznego po boho.\n\nKoszyk świetnie sprawdzi się jako organizer na drobiazgi w łazience, kuchni, salonie czy pokoju dziecięcym. Może również pełnić funkcję osłonki na doniczkę. Subtelna skórzana metka z ręcznie wypalanym symbolem dodaje mu uroku i charakteru handmade.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/rękodzieło/koszyk/main.jpg',
						'/pracownie/rękodzieło/koszyk/product1.jpg',
						'/pracownie/rękodzieło/koszyk/product2.jpg',
						'/pracownie/rękodzieło/koszyk/product3.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: ['Wysokiej jakości sznurek', 'Rękodzieło – każdy egzemplarz jest unikatowy', 'Stylowy i praktyczny dodatek do wnętrza'],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},

				{
					id: 2,
					name: 'Ręcznie robione legowisko ze sznurka',
					description:
						'Komfortowe, estetyczne i trwałe legowisko wykonane ręcznie ze sznurka wysokiej jakości. Dzięki solidnej konstrukcji i miękkiej formie zapewnia zwierzakowi przytulne miejsce do odpoczynku, a jednocześnie doskonale prezentuje się we wnętrzu.\n\nMinimalistyczny, naturalny wygląd legowiska sprawia, że pasuje do każdego stylu – od nowoczesnego po rustykalny. Idealne dla małych psów i kotów. Wnętrze możesz wypełnić ulubionym kocykiem lub poduszką pupila.',
					shortDescription: 'Wygodne legowisko dla zwierząt domowych',
					category: 'Akcesoria dla zwierząt',
					images: [
						'/pracownie/rękodzieło/legowisko/main.jpg',
						'/pracownie/rękodzieło/legowisko/product1.jpg',
						'/pracownie/rękodzieło/legowisko/product2.jpg',
						'/pracownie/rękodzieło/legowisko/product3.jpg',
						'/pracownie/rękodzieło/legowisko/product4.jpg',
						'/pracownie/rękodzieło/legowisko/product5.jpg',
					],
					specifications: [
						'Materiał: sznurek + drewno',
						'Wymiary: 50x40x15 cm',
						'Wykończenie naturalne',
						'Poduszka wyjmowana',
						'Antypoślizgowa podstawa',
						'Dla psów do 20kg',
						'Odporna na zarysowania',
						'Łatwe składanie',
					],
					features: [
						'Ręczne wykonanie z dbałością o każdy detal',
						'Stabilne i miękkie zarazem – idealne miejsce do wypoczynku',
						'Stylowy dodatek do wnętrza',
						'Bezpieczne i przyjazne dla zwierząt',
						'Łatwe do utrzymania w czystości',
					],
					technicalDetails: {
						Rama: 'Drewno sosnowe',
						Wypełnienie: 'Pianka poliuretanowa',
						Pokrycie: 'Sznurek bawełniany',
						Antypoślizg: 'Podkładki gumowe',
						Waga: '3.2 kg',
						Gwarancja: '24 miesiące',
					},
				},

				{
					id: 3,
					name: 'Ręcznie wykonany stroik dekoracyjny',
					description:
						'Starannie wykonane stroiki z różnorodnych, dekoracyjnych elementów – takich jak sztuczne kwiaty, liście, gałązki czy dodatki sezonowe – to piękna i trwała forma upamiętnienia oraz ozdoba, która niesie za sobą więcej niż słowa. Każdy stroik powstaje ręcznie, z wyczuciem estetyki i dbałością o kompozycję.\n\nDzięki stonowanej kolorystyce i starannemu doborowi materiałów, stroik świetnie sprawdzi się jako wyraz pamięci i szacunku – zarówno na szczególne okazje, jak i do stałej dekoracji.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/stroik/main.jpg',
						'/pracownie/rękodzieło/stroik/product1.jpg',
						'/pracownie/rękodzieło/stroik/product2.jpg',
						'/pracownie/rękodzieło/stroik/product3.jpg',
						'/pracownie/rękodzieło/stroik/product4.jpg',
						'/pracownie/rękodzieło/stroik/product5.jpg',
						'/pracownie/rękodzieło/stroik/product6.jpg',
						'/pracownie/rękodzieło/stroik/product7.jpg',
						'/pracownie/rękodzieło/stroik/product8.jpg',
						'/pracownie/rękodzieło/stroik/product9.jpg',
						'/pracownie/rękodzieło/stroik/product10.jpg',
						'/pracownie/rękodzieło/stroik/product11.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Ręczne wykonanie – każdy egzemplarz jest unikatowy',
						'Trwałe, ozdobne elementy: kwiaty, liście, dodatki',
						'Stonowany, elegancki styl pasujący do wielu okazji',
						'Gotowy do wyeksponowania – nie wymaga dodatkowej oprawy',
						'Dostępne różne kompozycje i układy – każda z nich wyjątkowa',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 4,
					name: 'Bransoletka z koralików',
					description:
						'Ręcznie wykonana bransoletka z kolorowych koralików to połączenie prostoty, elegancji i wyjątkowego przesłania. Każdy egzemplarz powstaje w naszym Zakładzie Aktywności Zawodowej, gdzie osoby z niepełnosprawnościami realizują się zawodowo, rozwijając swoje umiejętności manualne i artystyczne.\n\nWybierając nasze bransoletki, nie tylko zyskujesz oryginalny dodatek, ale również wspierasz zatrudnienie i rozwój osób z niepełnosprawnościami. To produkt z duszą, który niesie za sobą coś więcej niż tylko estetykę – realną wartość społeczną.\n\nDoskonały pomysł na prezent – drobny gest o dużym znaczeniu.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/bransoletka/main.jpg',
						'/pracownie/rękodzieło/bransoletka/product1.jpg',
						'/pracownie/rękodzieło/bransoletka/product2.jpg',
						'/pracownie/rękodzieło/bransoletka/product3.jpg',
						'/pracownie/rękodzieło/bransoletka/product4.jpg',
						'/pracownie/rękodzieło/bransoletka/product5.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Rękodzieło – każda bransoletka jest unikalna',
						'Wykonana z koralików w różnych kolorach i kształtach',
						'Elastyczna lub zapinana – zależnie od modelu',
						'Lekka, wygodna i idealna na każdą okazję',
						'Często wzbogacona o ozdobne zawieszki lub detale',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 5,
					name: 'Ręcznie robiona podstawka ze sznurka',
					description:
						'Estetyczna i funkcjonalna podstawka wykonana ręcznie ze sznurka o wysokiej jakości. Każdy egzemplarz tworzony jest z dbałością o detale, dzięki czemu otrzymujesz produkt nie tylko praktyczny, ale i unikatowy.\n\nMinimalistyczna forma sprawia, że świetnie sprawdzi się jako podstawka pod kubek, świecę czy małą doniczkę. Ozdobna metka z logo dodaje całości wyjątkowego charakteru i podkreśla rękodzielniczy styl.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/podstawka/main.jpg',
						'/pracownie/rękodzieło/podstawka/product1.jpg',
						'/pracownie/rękodzieło/podstawka/product2.jpg',
						'/pracownie/rękodzieło/podstawka/product3.jpg',
						'/pracownie/rękodzieło/podstawka/product4.jpg',
						'/pracownie/rękodzieło/podstawka/product5.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Ręczne wykonanie',
						'Uniwersalny design pasujący do każdego wnętrza',
						'Ozdobna metka z logo',
						'Idealna na prezent lub jako uzupełnienie innych produktów z tej samej serii',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 6,
					name: 'Ręcznie robione kartki okolicznościowe',
					description:
						'Wyjątkowe kartki na każdą okazję, wykonane ręcznie z dbałością o każdy detal. Każda z nich to małe dzieło sztuki, które łączy w sobie różnorodne techniki i materiały – od dekoracyjnej sklejki, przez papierowe kwiaty, aż po precyzyjnie wycinane ozdoby.\n\nDzięki oryginalnym kompozycjom i starannemu wykończeniu, kartki zachwycają już od pierwszego spojrzenia. Idealne na urodziny, ślub, chrzest, komunię, święta czy inne ważne momenty – gdy chcesz podarować coś naprawdę wyjątkowego i niepowtarzalnego.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/kartki/main.jpg',
						'/pracownie/rękodzieło/kartki/product1.jpg',
						'/pracownie/rękodzieło/kartki/product2.jpg',
						'/pracownie/rękodzieło/kartki/product3.jpg',
						'/pracownie/rękodzieło/kartki/product4.jpg',
						'/pracownie/rękodzieło/kartki/product5.jpg',
						'/pracownie/rękodzieło/kartki/product6.jpg',
						'/pracownie/rękodzieło/kartki/product7.jpg',
						'/pracownie/rękodzieło/kartki/product8.jpg',
						'/pracownie/rękodzieło/kartki/product9.jpg',
						'/pracownie/rękodzieło/kartki/product10.jpg',
						'/pracownie/rękodzieło/kartki/product11.jpg',
						'/pracownie/rękodzieło/kartki/product12.jpg',
						'/pracownie/rękodzieło/kartki/product13.jpg',
						'/pracownie/rękodzieło/kartki/product14.jpg',
						'/pracownie/rękodzieło/kartki/product15.jpg',
						'/pracownie/rękodzieło/kartki/product16.jpg',
						'/pracownie/rękodzieło/kartki/product17.jpg',
						'/pracownie/rękodzieło/kartki/product18.jpg',
						'/pracownie/rękodzieło/kartki/product19.jpg',
						'/pracownie/rękodzieło/kartki/product20.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Ręczne wykonanie – każda kartka jest unikatowa',
						'Starannie dobrane ozdoby: sklejka, kwiatki, wycinane elementy',
						'Piękna pamiątka na lata',
						'Miejsce na własne życzenia w środku',
						'Możliwość dopasowania do okazji lub personalizacji (na życzenie)',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 7,
					name: 'Ręcznie robiony koszyk ze sznurka z uchwytami w różnych kolorach',
					description:
						'Funkcjonalny i stylowy koszyk wykonany ręcznie ze sznurka o wysokiej jakości. Dzięki solidnemu splotowi zachowuje swój kształt, a wygodne uchwyty po bokach sprawiają, że jest praktyczny i łatwy do przenoszenia.\n\nMinimalistyczny design bez widocznego loga sprawia, że koszyk idealnie wpasuje się w każde wnętrze – od nowoczesnego po naturalne i boho. Świetnie sprawdzi się jako organizer na drobiazgi, kosmetyki, akcesoria dziecięce lub jako element dekoracyjny.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/koszyk_uszy/main.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product1.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product2.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product3.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product4.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product5.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product6.jpg',
						'/pracownie/rękodzieło/koszyk_uszy/product7.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Ręczne wykonanie – każdy egzemplarz to unikat',
						'Wygodne uchwyty ułatwiające przenoszenie',
						'Prosty, elegancki wygląd bez zbędnych dodatków',
						'Idealny do łazienki, salonu, kuchni czy pokoju dziecięcego',
						'Możliwość zestawienia z innymi produktami z tej samej serii',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 8,
					name: 'Ręcznie robiony kwietnik ze sznurka',
					description:
						'Minimalistyczny, a zarazem efektowny kwietnik wykonany ręcznie ze sznurka wysokiej jakości to idealna propozycja dla miłośników roślin i naturalnych dodatków do wnętrz. Jego prosta forma i staranny splot sprawiają, że pięknie eksponuje doniczkę, jednocześnie dodając przestrzeni przytulnego charakteru.\n\nKwietnik świetnie prezentuje się zawieszony w oknie, na ścianie lub pod sufitem. Pasuje do różnych stylów – od boho, przez skandynawski, aż po nowoczesny. Dzięki neutralnej kolorystyce łatwo dopasować go do wnętrza i wyeksponować rośliny w oryginalny sposób.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: ['/pracownie/rękodzieło/kwietnik/main.jpg', '/pracownie/rękodzieło/kwietnik/product1.jpg'],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Ręczne wykonanie ze starannością i dbałością o detal',
						'Stylowy i praktyczny dodatek do wnętrza',
						'Idealny do eksponowania doniczek z roślinami wiszącymi i stojącymi',
						'Uniwersalny wygląd – pasuje do różnych aranżacji',
						'Możliwość zestawienia z innymi produktami z tej samej serii',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 9,
					name: 'Koszyk ręcznie wykonany ze sznurka',
					description:
						'Ręcznie wykonany koszyk ze sznurka wysokiej jakości to idealne połączenie estetyki i funkcjonalności. Starannie pleciony z grubego, wytrzymałego sznurka, zachwyca swoją strukturą i nowoczesnym wyglądem. Jego neutralny szary kolor sprawia, że doskonale wpasuje się w każde wnętrze – od minimalistycznego po boho.\n\nKoszyk świetnie sprawdzi się jako organizer na drobiazgi w łazience, kuchni, salonie czy pokoju dziecięcym. Może również pełnić funkcję osłonki na doniczkę. Subtelna skórzana metka z ręcznie wypalanym symbolem dodaje mu uroku i charakteru handmade.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/koszyk2/main.jpg',
						'/pracownie/rękodzieło/koszyk2/product1.jpg',
						'/pracownie/rękodzieło/koszyk2/product2.jpg',
						'/pracownie/rękodzieło/koszyk2/product3.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: ['Wysokiej jakości sznurek', 'Rękodzieło – każdy egzemplarz jest unikatowy', 'Stylowy i praktyczny dodatek do wnętrza'],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},

				{
					id: 10,
					name: 'Zestaw drewnianych podkładek pod kubki',
					description:
						'Wyjątkowy zestaw drewnianych podkładek pod kubki w ozdobnym pudełku to połączenie nowoczesnej precyzji i tradycyjnego rękodzieła. Każda podkładka została wycięta i zdobiona laserowo, a następnie ręcznie pomalowana przez naszych pracowników, nadając jej niepowtarzalny charakter i ciepło ludzkiego dotyku.\n\nProdukt powstał w Zakładzie Aktywności Zawodowej, gdzie osoby z niepełnosprawnościami łączą swoje umiejętności artystyczne z codzienną pracą. Wybierając nasze wyroby, wspierasz ich rozwój zawodowy i społeczny.\n\nIdealny na prezent – estetyczny, trwały, praktyczny i pełen wartości.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/podkladki/main.jpg',
						'/pracownie/rękodzieło/podkladki/product1.jpg',
						'/pracownie/rękodzieło/podkladki/product2.jpg',
						'/pracownie/rękodzieło/podkladki/product3.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: [
						'Zestaw zawiera: 6 sztuk podkładek + drewniane pudełko',
						'Materiał: naturalna sklejka',
						'Technika zdobienia: laserowe cięcie + ręczne malowanie farbami akrylowymi',
						'Motyw: kwiatowy, inspirowany naturą',
					],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
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
			heroImage: '/pracownie/szwalnia/main.jpg',
			galleryImages: ['/pracownie/szwalnia/workshop1.jpg', '/pracownie/szwalnia/workshop2.jpg', '/pracownie/szwalnia/workshop3.jpg'],
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
					id: 1,
					name: 'Legowiska dla psów i kotów',
					description:
						'Miękkie, wygodne i estetyczne legowiska stworzone z myślą o domowych pupilach. Wykonane z wysokiej jakości materiałów tekstylnych, zapewniają ciepło, wygodę i poczucie bezpieczeństwa zarówno psom, jak i kotom.\n\nDostępne w różnych kształtach, kolorach i wzorach – pasują do każdego wnętrza, tworząc przytulny kącik odpoczynku dla zwierzaków. Łatwe w utrzymaniu czystości i przyjazne dla sierści.\n\nZadbaj o komfort swojego zwierzaka – podaruj mu miejsce, w którym naprawdę odpocznie.',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/szwalnia/legowisko/main.jpg',
						'/pracownie/szwalnia/legowisko/product1.jpg',
						'/pracownie/szwalnia/legowisko/product2.jpg',
						'/pracownie/szwalnia/legowisko/product3.jpg',
						'/pracownie/szwalnia/legowisko/product4.jpg',
						'/pracownie/szwalnia/legowisko/product5.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: [
						'Wygodne i miękkie – idealne do spania i odpoczynku',
						'Wykonane z trwałych i przyjemnych w dotyku materiałów',
						'Różne rozmiary – dla małych i większych pupili',
						'Stylowy wygląd – pasuje do każdego wnętrza',
						'Pokrowce łatwe do czyszczenia lub prania',
					],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},

				{
					id: 2,
					name: 'Poduszki dekoracyjne',
					description:
						'Oferujemy ręcznie szyte poduszki z różnych materiałów – od naturalnych tkanin po miękkie, welurowe struktury. Każda z nich to połączenie estetyki i funkcjonalności, idealne do wnętrz w różnym stylu: klasycznym, nowoczesnym, boho czy rustykalnym.\n\nDostępne w wielu wzorach, kolorach i fakturach, poduszki świetnie sprawdzą się jako element dekoracyjny salonu, sypialni, a także jako przytulny dodatek na taras czy balkon.\n\nStwórz przytulną atmosferę w swoim domu – wybierz poduszki, które będą nie tylko ładne, ale i wygodne.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/szwalnia/poduszki/main.jpg',
						'/pracownie/szwalnia/poduszki/product1.jpg',
						'/pracownie/szwalnia/poduszki/product2.jpg',
						'/pracownie/szwalnia/poduszki/product3.jpg',
						'/pracownie/szwalnia/poduszki/product4.jpg',
						'/pracownie/szwalnia/poduszki/product5.jpg',
						'/pracownie/szwalnia/poduszki/product6.jpg',
						'/pracownie/szwalnia/poduszki/product7.jpg',
						'/pracownie/szwalnia/poduszki/product8.jpg',
						'/pracownie/szwalnia/poduszki/product9.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: [
						'Różnorodne tkaniny – od gładkich po strukturalne',
						'Starannie szyte, z dbałością o detale',
						'Wypełnienie zapewniające komfort i trwałość',
						'Bogaty wybór wzorów i kolorów',
						'Idealne jako ozdoba i do codziennego użytku',
					],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},

				{
					id: 3,
					name: 'Torba bawełniana na wino',
					description:
						'Estetyczna i ekologiczna torba z bawełny, idealnie dopasowana do jednej butelki wina lub innego alkoholu. To praktyczne opakowanie, które świetnie sprawdzi się jako prezent lub dodatek do zestawu upominkowego.\n\nNa torbie wykonujemy nadruki logo firmowego, grafik okolicznościowych lub indywidualnych projektów – za pomocą profesjonalnej drukarki do tkanin. Druk jest trwały, wyraźny i odporny na pranie.\n\nProdukt powstaje w naszym Zakładzie Aktywności Zawodowej, gdzie osoby z niepełnosprawnościami realizują proces szycia oraz nadruku z najwyższą starannością. Kupując nasze torby, wspierasz lokalne rękodzieło i działania społeczne.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/szwalnia/torba/main.jpg',
						'/pracownie/szwalnia/torba/product1.jpg',
						'/pracownie/szwalnia/torba/product2.jpg',
						'/pracownie/szwalnia/torba/product3.jpg',
						'/pracownie/szwalnia/torba/product4.jpg',
						'/pracownie/szwalnia/torba/product5.jpg',
						'/pracownie/szwalnia/torba/product6.jpg',
						'/pracownie/szwalnia/torba/product7.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: [
						'Materiał: 100% bawełna',
						'Mieści standardową butelkę 0,75 l',
						'Wygodny uchwyt do noszenia',
						'Trwała i wielorazowego użytku',
						'Naturalny kolor – baza do personalizacji',
					],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},

				{
					id: 4,
					name: 'Torebka na ramię z materiału',
					description:
						'Szukasz idealnej torebki na co dzień? Nasza materiałowa torebka na ramię to połączenie wygody, funkcjonalności i modnego designu. Wykonana z wysokiej jakości, trwałego materiału, który jest jednocześnie lekki i przyjemny w dotyku. Doskonale sprawdzi się zarówno podczas codziennych spacerów, jak i wyjść ze znajomymi.\n\nDzięki regulowanemu paskowi możesz nosić ją na ramieniu lub przewieszoną przez ciało, co gwarantuje pełną swobodę ruchów. Wnętrze torebki jest przestronne i wyposażone w praktyczne kieszonki, które pomogą Ci utrzymać porządek i szybko znaleźć najpotrzebniejsze rzeczy, takie jak telefon, portfel czy klucze.\n\nTorebka dostępna jest w różnych kolorach i wzorach, więc łatwo dopasujesz ją do swojego stylu i okazji. To idealny wybór dla osób ceniących prostotę, funkcjonalność i ekologiczną alternatywę dla skórzanych modeli.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/szwalnia/torebka/main.jpg',
						'/pracownie/szwalnia/torebka/product1.jpg',
						'/pracownie/szwalnia/torebka/product2.jpg',
						'/pracownie/szwalnia/torebka/product3.jpg',
						'/pracownie/szwalnia/torebka/product4.jpg',
						'/pracownie/szwalnia/torebka/product5.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: ['Lekka', 'Stylowa', 'Praktyczna'],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
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
			heroImage: '/pracownie/informatyka/main.jpg',
			galleryImages: null,
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
					id: 1,
					name: 'Koszyk ręcznie wykonany ze sznurka',
					description:
						'Eleganckie pudełko na wino wykonane z naturalnej sklejki o grubości 3 mm, ozdobione precyzyjnym grawerem laserowym. Idealne jako opakowanie prezentowe – stylowe, trwałe i w pełni ekologiczne.\n\nProdukt został stworzony przez uczestników Zakładu Aktywności Zawodowej, gdzie osoby z niepełnosprawnościami wykonują przedmioty użytkowe i artystyczne z dbałością o każdy detal. Kupując ten produkt, wspierasz ich aktywność zawodową i integrację społeczną.\n\nIdealne na prezent świąteczny, urodzinowy, firmowy lub jako dodatek do upominku.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/informatyka/pudelko/main.jpg',
						'/pracownie/informatyka/pudelko/product1.jpg',
						'/pracownie/informatyka/pudelko/product2.jpg',
						'/pracownie/informatyka/pudelko/product3.jpg',
						'/pracownie/informatyka/pudelko/product4.jpg',
						'/pracownie/informatyka/pudelko/product5.jpg',
						'/pracownie/informatyka/pudelko/product6.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: [
						'Wykonane z wysokiej jakości sklejki brzozowej (3 mm)',
						'Elementy cięte i grawerowane laserowo – precyzyjnie i estetycznie',
						'Motywy dekoracyjne (np. winorośl) wycinane w stylu ażurowym',
						'Lekka, a jednocześnie solidna konstrukcja z uchwytem do przenoszenia',
						'Mieści standardową butelkę wina (lub innego alkoholu)',
						'Wysyłane w całości złożone lub rozkładane (w zależności od wersji)',
					],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},

				{
					id: 2,
					name: 'Wycinanie laserowe CNC',
					description:
						'Oferujemy profesjonalne usługi wycinania laserowego CNC z szerokiej gamy materiałów – takich jak sklejka, drewno, akryl oraz inne tworzywa. Dzięki nowoczesnej technologii jesteśmy w stanie realizować zarówno proste, jak i bardzo precyzyjne, ozdobne projekty – od pojedynczych elementów po większe serie produkcyjne\n\nSpecjalizujemy się również w tworzeniu personalizowanych opakowań m.in. na wina,	piwa rzemieślnicze,	słoiczki z miodem,	świece i rękodzieło,	zestawy prezentowe.\n\nKażde opakowanie może zostać ozdobione grawerem, grafiką lub wyciętym wzorem – idealnie dopasowanym do okazji, marki lub indywidualnych potrzeb.Zrealizujemy Twój pomysł od projektu po gotowy produkt. Skontaktuj się z nami, jeśli chcesz stworzyć coś wyjątkowego – z precyzją i charakterem.',
					shortDescription: 'Wygodne legowisko dla zwierząt domowych',
					category: 'Akcesoria dla zwierząt',
					images: [
						'/pracownie/informatyka/wycinanie/main.jpg',
						'/pracownie/informatyka/wycinanie/product1.jpg',
						'/pracownie/informatyka/wycinanie/product2.jpg',
						'/pracownie/informatyka/wycinanie/product3.jpg',
						'/pracownie/informatyka/wycinanie/product4.jpg',
						'/pracownie/informatyka/wycinanie/product5.jpg',
						'/pracownie/informatyka/wycinanie/product6.jpg',
						'/pracownie/informatyka/wycinanie/product7.jpg',
						'/pracownie/informatyka/wycinanie/product8.jpg',
						'/pracownie/informatyka/wycinanie/product9.jpg',
					],
					specifications: [
						'Materiał: sznurek + drewno',
						'Wymiary: 50x40x15 cm',
						'Wykończenie naturalne',
						'Poduszka wyjmowana',
						'Antypoślizgowa podstawa',
						'Dla psów do 20kg',
						'Odporna na zarysowania',
						'Łatwe składanie',
					],
					features: [
						'Elementy dekoracyjne i użytkowe ze sklejki, drewna, akrylu itp.',
						'Personalizowane pudełka i opakowania',
						'Grawerowanie detali, logo, napisów',
						'Współpraca przy projektach indywidualnych i hurtowych',
						'Doradztwo w zakresie materiałów i konstrukcji',
					],
					technicalDetails: {
						Rama: 'Drewno sosnowe',
						Wypełnienie: 'Pianka poliuretanowa',
						Pokrycie: 'Sznurek bawełniany',
						Antypoślizg: 'Podkładki gumowe',
						Waga: '3.2 kg',
						Gwarancja: '24 miesiące',
					},
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
			heroImage: '/pracownie/sprzatajaca/main.jpg',
			galleryImages: null,
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
					id: 4,
					name: 'Koszyk ręcznie wykonany ze sznurka',
					description:
						'Ręcznie wykonany koszyk ze sznurka wysokiej jakości to idealne połączenie estetyki i funkcjonalności. Starannie pleciony z grubego, wytrzymałego sznurka, zachwyca swoją strukturą i nowoczesnym wyglądem. Każdy koszyk jest unikalny, powstaje w całości ręcznie, co gwarantuje najwyższą jakość wykonania. Doskonale sprawdzi się jako stylowy pojemnik na zabawki, pranie, czy jako dekoracyjny element wnętrza.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/rękodzieło/product1.jpg',
						'/pracownie/rękodzieło/product1-2.jpg',
						'/pracownie/rękodzieło/product1-3.jpg',
						'/pracownie/rękodzieło/product1-4.jpg',
						'/pracownie/rękodzieło/product1-5.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: [
						'Ręczne wykonanie',
						'Materiał naturalny',
						'Wytrzymała konstrukcja',
						'Uniwersalne zastosowanie',
						'Łatwe czyszczenie',
						'Stylowy design',
					],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},
				{
					id: 5,
					name: 'Ręcznie robione legowisko ze sznurka',
					description:
						'Wykonane z naturalnego drewna i starannie wykończone sznurkiem, świetnie sprawdzi się zarówno na tarasie, balkonie, jak i w ogrodzie czy wewnątrz domu. To dekoracja, która przyciąga wzrok i dodaje charakteru każdemu otoczeniu. Legowisko łączy komfort zwierzęcia z estetyką wnętrza, będąc jednocześnie praktycznym i pięknym dodatkiem do domu.',
					shortDescription: 'Wygodne legowisko dla zwierząt domowych',
					category: 'Akcesoria dla zwierząt',
					images: [
						'/pracownie/rękodzieło/product2.jpg',
						'/pracownie/rękodzieło/product2-2.jpg',
						'/pracownie/rękodzieło/product2-3.jpg',
						'/pracownie/rękodzieło/product2-4.jpg',
					],
					specifications: [
						'Materiał: sznurek + drewno',
						'Wymiary: 50x40x15 cm',
						'Wykończenie naturalne',
						'Poduszka wyjmowana',
						'Antypoślizgowa podstawa',
						'Dla psów do 20kg',
						'Odporna na zarysowania',
						'Łatwe składanie',
					],
					features: [
						'Naturalne materiały',
						'Komfort zwierzęcia',
						'Łatwe czyszczenie',
						'Stabilna konstrukcja',
						'Stylowy design',
						'Wyjmowana poduszka',
					],
					technicalDetails: {
						Rama: 'Drewno sosnowe',
						Wypełnienie: 'Pianka poliuretanowa',
						Pokrycie: 'Sznurek bawełniany',
						Antypoślizg: 'Podkładki gumowe',
						Waga: '3.2 kg',
						Gwarancja: '24 miesiące',
					},
				},
				{
					id: 6,
					name: 'Ręcznie wykonany stroik dekoracyjny',
					description:
						'Oferujemy stroiki w różnych wielkościach i układach – od kompaktowych modeli idealnych na stół, po większe kompozycje, które ozdobią kominek lub półkę. Każdy z nich wykonany jest z naturalnych materiałów i zaprojektowany tak, by przyciągał wzrok i wprowadzał ciepły, naturalny klimat do wnętrza. Stroiki są dostosowane do różnych pór roku i okazji.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/product3.jpg',
						'/pracownie/rękodzieło/product3-2.jpg',
						'/pracownie/rękodzieło/product3-3.jpg',
						'/pracownie/rękodzieło/product3-4.jpg',
						'/pracownie/rękodzieło/product3-5.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: ['Ręczna kompozycja', 'Sezonowe motywy', 'Naturalne składniki', 'Wyjątkowy design', 'Długa trwałość', 'Gotowy prezent'],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
				},
			],
			team: {
				size: '4 operatorów',
				experience: 'Średnio 8 lat doświadczenia',
				specialization: 'Technologie CNC i CAD',
			},
			equipment: ['Plotery laserowe CNC', 'Oprogramowanie CAD/CAM', 'Stacje projektowe', 'Systemy kontroli jakości', 'Narzędzia pomiarowe'],
		},

		masazysta: {
			title: 'Dział Wellness',
			subtitle: 'Dbałość o komfort zespołu',
			description:
				'Nasz dział wellness to przestrzeń relaksu i regeneracji dla pracowników. Oferujemy profesjonalne usługi masażu, które pomagają utrzymać zdrowie i dobre samopoczucie naszego zespołu.',
			heroImage: '/pracownie/masazysta/main.jpg',
			galleryImages: null,
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
					id: 4,
					name: 'Koszyk ręcznie wykonany ze sznurka',
					description:
						'Ręcznie wykonany koszyk ze sznurka wysokiej jakości to idealne połączenie estetyki i funkcjonalności. Starannie pleciony z grubego, wytrzymałego sznurka, zachwyca swoją strukturą i nowoczesnym wyglądem. Każdy koszyk jest unikalny, powstaje w całości ręcznie, co gwarantuje najwyższą jakość wykonania. Doskonale sprawdzi się jako stylowy pojemnik na zabawki, pranie, czy jako dekoracyjny element wnętrza.',
					shortDescription: 'Funkcjonalny koszyk pleciony ze sznurka',
					category: 'Akcesoria domowe',
					images: [
						'/pracownie/rękodzieło/product1.jpg',
						'/pracownie/rękodzieło/product1-2.jpg',
						'/pracownie/rękodzieło/product1-3.jpg',
						'/pracownie/rękodzieło/product1-4.jpg',
						'/pracownie/rękodzieło/product1-5.jpg',
					],
					specifications: [
						'Materiał: sznurek bawełniany',
						'Wymiary: 35x25x20 cm',
						'Plecenie ręczne',
						'Uchwyty wzmocnione',
						'Kolor naturalny',
						'Waga: 0.8 kg',
						'Możliwość prania ręcznego',
						'Antyalergiczny materiał',
					],
					features: [
						'Ręczne wykonanie',
						'Materiał naturalny',
						'Wytrzymała konstrukcja',
						'Uniwersalne zastosowanie',
						'Łatwe czyszczenie',
						'Stylowy design',
					],
					technicalDetails: {
						'Grubość sznurka': '5mm',
						'Rodzaj splotu': 'Spiralny',
						Materiał: '100% bawełna',
						Wytrzymałość: 'do 5kg',
						Pielęgnacja: 'Pranie ręczne 30°C',
						Gwarancja: '12 miesięcy',
					},
				},
				{
					id: 5,
					name: 'Ręcznie robione legowisko ze sznurka',
					description:
						'Wykonane z naturalnego drewna i starannie wykończone sznurkiem, świetnie sprawdzi się zarówno na tarasie, balkonie, jak i w ogrodzie czy wewnątrz domu. To dekoracja, która przyciąga wzrok i dodaje charakteru każdemu otoczeniu. Legowisko łączy komfort zwierzęcia z estetyką wnętrza, będąc jednocześnie praktycznym i pięknym dodatkiem do domu.',
					shortDescription: 'Wygodne legowisko dla zwierząt domowych',
					category: 'Akcesoria dla zwierząt',
					images: [
						'/pracownie/rękodzieło/product2.jpg',
						'/pracownie/rękodzieło/product2-2.jpg',
						'/pracownie/rękodzieło/product2-3.jpg',
						'/pracownie/rękodzieło/product2-4.jpg',
					],
					specifications: [
						'Materiał: sznurek + drewno',
						'Wymiary: 50x40x15 cm',
						'Wykończenie naturalne',
						'Poduszka wyjmowana',
						'Antypoślizgowa podstawa',
						'Dla psów do 20kg',
						'Odporna na zarysowania',
						'Łatwe składanie',
					],
					features: [
						'Naturalne materiały',
						'Komfort zwierzęcia',
						'Łatwe czyszczenie',
						'Stabilna konstrukcja',
						'Stylowy design',
						'Wyjmowana poduszka',
					],
					technicalDetails: {
						Rama: 'Drewno sosnowe',
						Wypełnienie: 'Pianka poliuretanowa',
						Pokrycie: 'Sznurek bawełniany',
						Antypoślizg: 'Podkładki gumowe',
						Waga: '3.2 kg',
						Gwarancja: '24 miesiące',
					},
				},
				{
					id: 6,
					name: 'Ręcznie wykonany stroik dekoracyjny',
					description:
						'Oferujemy stroiki w różnych wielkościach i układach – od kompaktowych modeli idealnych na stół, po większe kompozycje, które ozdobią kominek lub półkę. Każdy z nich wykonany jest z naturalnych materiałów i zaprojektowany tak, by przyciągał wzrok i wprowadzał ciepły, naturalny klimat do wnętrza. Stroiki są dostosowane do różnych pór roku i okazji.',
					shortDescription: 'Elegancki stroik na każdą okazję',
					category: 'Dekoracje',
					images: [
						'/pracownie/rękodzieło/product3.jpg',
						'/pracownie/rękodzieło/product3-2.jpg',
						'/pracownie/rękodzieło/product3-3.jpg',
						'/pracownie/rękodzieło/product3-4.jpg',
						'/pracownie/rękodzieło/product3-5.jpg',
					],
					specifications: [
						'Materiał: naturalne elementy',
						'Wymiary: 30x30x10 cm',
						'Komponenty sezonowe',
						'Wykonanie ręczne',
						'Podstawa wiklinowa',
						'Trwałość: 6 miesięcy',
						'Możliwość personalizacji',
						'Opakowanie prezentowe',
					],
					features: ['Ręczna kompozycja', 'Sezonowe motywy', 'Naturalne składniki', 'Wyjątkowy design', 'Długa trwałość', 'Gotowy prezent'],
					technicalDetails: {
						Podstawa: 'Wiklina naturalna',
						Elementy: 'Suszone kwiaty, gałązki',
						Spoiwo: 'Klej roślinny',
						Konserwacja: 'Lakier naturalny',
						Waga: '0.6 kg',
						Gwarancja: '6 miesięcy',
					},
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

	// Auto-scroll gallery images
	useEffect(() => {
		if (department?.galleryImages?.length > 1) {
			const interval = setInterval(() => {
				setCurrentGalleryImage((prev) => (prev + 1) % department.galleryImages.length);
			}, 3000);
			return () => clearInterval(interval);
		}
	}, [department?.galleryImages?.length]);

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

	const openProductModal = (product) => {
		setSelectedProduct(product);
		setCurrentImageIndex(0);
		setActiveTab('features');
		document.body.style.overflow = 'hidden';
	};

	const closeProductModal = () => {
		setSelectedProduct(null);
		setCurrentImageIndex(0);
		setActiveTab('features');
		document.body.style.overflow = 'unset';
	};

	const openGalleryModal = (imageIndex) => {
		setSelectedGalleryImage(department.galleryImages[imageIndex]);
		setGalleryImageIndex(imageIndex);
		document.body.style.overflow = 'hidden';
	};

	const closeGalleryModal = () => {
		setSelectedGalleryImage(null);
		setGalleryImageIndex(0);
		document.body.style.overflow = 'unset';
	};

	const nextGalleryImage = () => {
		const nextIndex = (galleryImageIndex + 1) % department.galleryImages.length;
		setGalleryImageIndex(nextIndex);
		setSelectedGalleryImage(department.galleryImages[nextIndex]);
	};

	const prevGalleryImage = () => {
		const prevIndex = (galleryImageIndex - 1 + department.galleryImages.length) % department.galleryImages.length;
		setGalleryImageIndex(prevIndex);
		setSelectedGalleryImage(department.galleryImages[prevIndex]);
	};

	const nextImage = () => {
		if (selectedProduct) {
			setCurrentImageIndex((prev) => (prev + 1) % selectedProduct.images.length);
		}
	};

	const prevImage = () => {
		if (selectedProduct) {
			setCurrentImageIndex((prev) => (prev - 1 + selectedProduct.images.length) % selectedProduct.images.length);
		}
	};

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	const handleShare = async () => {
		if (selectedProduct) {
			try {
				if (navigator.share) {
					await navigator.share({
						title: selectedProduct.name,
						text: selectedProduct.shortDescription,
						url: window.location.href,
					});
				} else {
					await navigator.clipboard.writeText(window.location.href);
					alert('Link skopiowany do schowka!');
				}
			} catch (error) {
				console.error('Błąd podczas udostępniania:', error);
			}
		}
	};

	return (
		<div className={styles.container}>
			{/* Hero Section with Single Background Image and Centered Text */}
			<section className={styles.hero}>
				<div className={styles.heroBackground}>
					<Image
						src={department.heroImage}
						alt={`${department.title} główne zdjęcie`}
						fill
						className={styles.heroBackgroundImage}
						sizes='100vw'
						priority
					/>
					<div className={styles.heroOverlay} style={{ background: department.bgColor }}></div>
				</div>
				<div className={styles.heroContent}>
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
			</section>

			{/* Workshop Gallery Section */}
			{department.galleryImages && (
				<section className={styles.gallerySection}>
					<div className={styles.containerLimited}>
						<div className={styles.sectionHeader}>
							<h2 className={styles.sectionTitle}>Nasza pracownia</h2>
							<p className={styles.sectionSubtitle}>Zobacz, jak pracujemy i gdzie tworzymy nasze produkty</p>
						</div>
						<div className={styles.galleryGrid}>
							{department.galleryImages.map((image, index) => (
								<div key={index} className={`${styles.galleryItem} ${styles[`galleryItem${index + 1}`]}`} onClick={() => openGalleryModal(index)}>
									<Image
										src={image}
										alt={`${department.title} pracownia ${index + 1}`}
										fill
										className={styles.galleryImage}
										sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									/>
									<div className={styles.galleryOverlay}>
										<div className={styles.galleryIcon}>
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
							))}
						</div>
					</div>
				</section>
			)}

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
							<div key={index} className={styles.projectCard} onClick={() => openProductModal(project)}>
								<div className={styles.projectImageWrapper}>
									<Image
										src={project.images[0]}
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
									<div className={styles.projectImageCount}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<rect x='3' y='3' width='18' height='18' rx='2' ry='2' />
											<circle cx='8.5' cy='8.5' r='1.5' />
											<polyline points='21,15 16,10 5,21' />
										</svg>
										{project.images.length}
									</div>
								</div>
								<div className={styles.projectContent}>
									<div className={styles.projectCategory}>{project.category}</div>
									<h3>{project.name}</h3>
									<p>{project.shortDescription}</p>
									<button className={styles.viewDetailsBtn}>
										Zobacz szczegóły
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 12h14M12 5l7 7-7 7' />
										</svg>
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team & Equipment Section with Images */}
			<section className={styles.infoSection}>
				<div className={styles.containerLimited}>
					<div className={styles.infoGrid}>
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

			{/* Process Section */}
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
						</div>
					</div>
				</div>
			</section>

			{/* Enhanced Product Details Modal */}
			{selectedProduct && (
				<div className={styles.modal} onClick={closeProductModal}>
					<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
						<button aria-label='Zamknij szczegóły' className={styles.modalClose} onClick={closeProductModal}>
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>

						<div className={styles.modalGrid}>
							<div className={styles.modalImageSection}>
								<div className={styles.modalMainImage}>
									<Image
										src={selectedProduct.images[currentImageIndex]}
										alt={selectedProduct.name}
										fill
										className={styles.modalImage}
										sizes='(max-width: 768px) 100vw, 50vw'
									/>
									{selectedProduct.images.length > 1 && (
										<>
											<button aria-label='Poprzednie zdjęcie' className={styles.modalPrev} onClick={prevImage}>
												<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
												</svg>
											</button>
											<button aria-label='Następne zdjęcie' className={styles.modalNext} onClick={nextImage}>
												<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
												</svg>
											</button>
											<div className={styles.modalImageCounter}>
												{currentImageIndex + 1} / {selectedProduct.images.length}
											</div>
										</>
									)}
								</div>
								{selectedProduct.images.length > 1 && (
									<div className={styles.modalThumbnails}>
										{selectedProduct.images.map((image, index) => (
											<button
												key={index}
												aria-label='Zobacz zdjęcie'
												className={`${styles.modalThumbnail} ${index === currentImageIndex ? styles.active : ''}`}
												onClick={() => setCurrentImageIndex(index)}
											>
												<Image src={image} alt={`${selectedProduct.name} ${index + 1}`} fill className={styles.thumbnailImage} sizes='120px' />
											</button>
										))}
									</div>
								)}
							</div>

							<div className={styles.modalInfo}>
								<div className={styles.modalHeader}>
									<div className={styles.modalCategory}>{selectedProduct.category}</div>
									<h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
								</div>

								<div className={styles.modalDescription}>
									<p dangerouslySetInnerHTML={{ __html: selectedProduct.description.replace(/\n/g, '<br />') }} />
								</div>

								<div className={styles.modalTabs}>
									<div className={styles.tabButtons}>
										<button
											className={`${styles.tabButton} ${activeTab === 'features' ? styles.active : ''}`}
											onClick={() => handleTabClick('features')}
										>
											Cechy
										</button>
										{/* <button className={`${styles.tabButton} ${activeTab === 'specs' ? styles.active : ''}`} onClick={() => handleTabClick('specs')}>
											Specyfikacja
										</button>
										<button
											className={`${styles.tabButton} ${activeTab === 'technical' ? styles.active : ''}`}
											onClick={() => handleTabClick('technical')}
										>
											Dane techniczne
										</button> */}
									</div>

									<div className={styles.tabContent}>
										{activeTab === 'features' && (
											<div className={styles.tabPanel}>
												<div className={styles.featuresList}>
													{selectedProduct.features.map((feature, index) => (
														<div key={index} className={styles.featureItem}>
															<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
																<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
															</svg>
															<span>{feature}</span>
														</div>
													))}
												</div>
											</div>
										)}

										{/* {activeTab === 'specs' && (
											<div className={styles.tabPanel}>
												<div className={styles.specsList}>
													{selectedProduct.specifications.map((spec, index) => (
														<div key={index} className={styles.specItem}>
															<span>{spec}</span>
														</div>
													))}
												</div>
											</div>
										)}

										{activeTab === 'technical' && (
											<div className={styles.tabPanel}>
												<div className={styles.technicalList}>
													{Object.entries(selectedProduct.technicalDetails).map(([key, value], index) => (
														<div key={index} className={styles.technicalItem}>
															<span className={styles.technicalKey}>{key}:</span>
															<span className={styles.technicalValue}>{value}</span>
														</div>
													))}
												</div>
											</div>
										)} */}
									</div>
								</div>

								<div className={styles.modalActions}>
									<Link href='/kontakt' className={styles.modalContactBtn}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
										Zapytaj o produkt
									</Link>
									<button className={styles.modalShareBtn} onClick={handleShare}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z'
											/>
										</svg>
										Udostępnij
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Gallery Image Modal */}
			{selectedGalleryImage && (
				<div className={styles.modal} onClick={closeGalleryModal}>
					<div className={styles.galleryModalContent} onClick={(e) => e.stopPropagation()}>
						<button aria-label='Zamknij produkt' className={styles.modalClose} onClick={closeGalleryModal}>
							<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
							</svg>
						</button>

						<div className={styles.galleryModalImage}>
							<Image
								src={selectedGalleryImage}
								alt={`${department.title} pracownia ${galleryImageIndex + 1}`}
								fill
								className={styles.galleryModalImg}
								sizes='90vw'
							/>

							{department.galleryImages.length > 1 && (
								<>
									<button aria-label='Poprzednie zdjęcie' className={styles.galleryModalPrev} onClick={prevGalleryImage}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
										</svg>
									</button>
									<button aria-label='Następne zdjęcie' className={styles.galleryModalNext} onClick={nextGalleryImage}>
										<svg viewBox='0 0 24 24' fill='none' stroke='currentColor'>
											<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
										</svg>
									</button>
									<div className={styles.galleryModalCounter}>
										{galleryImageIndex + 1} / {department.galleryImages.length}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
