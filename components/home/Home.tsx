import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export const Home = () => {
	return (
		<div className='flex flex-col justify-center items-center w-full mt-10 '>
			<div className='flex place-items-center'>
				<h1 className='text-4xl font-bold text-center'>Winter Camp 2024 Recruitment Task</h1>
			</div>

			<Link href='/task/1' className={`${buttonVariants({ variant: 'default' })} mt-6 text-xl`}>
				Come and meet the crew members!
			</Link>
			<div className='mt-10 sm:mt-20 hover:scale-150  duration-500 hover:text-primary transition-all '>
				<Rocket size={120} />
			</div>
		</div>
	);
};
