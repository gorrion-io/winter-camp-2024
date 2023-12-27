import React from 'react';
import { Nav } from './nav/Nav';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface Props {
	children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
	return (
		<>
			<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
				<Nav />
				<main className={`p-4 sm:p-6 md:p-8 max-w-7xl mx-auto mt-20 ${inter.className}`}>
					{children}
				</main>
			</ThemeProvider>
		</>
	);
};
