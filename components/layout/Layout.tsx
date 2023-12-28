import React from 'react';
import { Nav } from './nav/Nav';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Nav />
			<main className={`p-4 sm:p-6 md:p-8 max-w-7xl mx-auto min-h-screen h-0   ${inter.className}`}>
				{children}
			</main>
		</>
	);
};
