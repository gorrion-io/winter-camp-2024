import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Nav = () => {
	return (
		<nav className='w-full  sticky	 top-0 left-0 border-b border-border/40 bg-background/95 z-50 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='w-full  container flex justify-between items-center h-14'>
				<p className='text-xl font-semibold'>Lorem, ipsum</p>
				<ThemeToggle />
			</div>
		</nav>
	);
};
