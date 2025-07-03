import { Montserrat } from 'next/font/google';
import '@/styles/global.scss';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: ['200', '300', '400', '500', '600', '700', '800'],
	display: 'swap',
});

export const metadata = {
	title: 'Szablon',
	description: 'Szablon',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={montserrat.variable}>{children}</body>
		</html>
	);
}
