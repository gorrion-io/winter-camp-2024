import React from 'react';
import { Nav } from './nav/Nav';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<div className={`flex-col bg-background min-h-screen relative ${inter.className}  `}>
			<Nav />
			<main className='flex-1 max-w-7xl mx-auto p-4 md:p-6'>{children}</main>
		</div>
	);
};
