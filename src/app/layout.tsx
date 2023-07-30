import '@/app/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	weight: ['300', '400', '600', '700', '800', '900'],
	subsets: ['latin']
});

export const metadata: Metadata = {
	title: 'cxntered',
	description: "cxntered's personal website"
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
