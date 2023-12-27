import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Nav = () => {
	return (
		<nav className='w-full  fixed top-0 left-0 border-b shadow-sm'>
			<div className='w-full mx-auto max-w-[1400px] flex justify-between items-center  p-4 sm:px-6 md:px-8'>
				<p className='text-xl font-semibold'>Lorem, ipsum</p>
				<ThemeToggle />
			</div>
		</nav>
	);
};
