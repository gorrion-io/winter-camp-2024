import React from 'react';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

interface Props {
	error: Error | null;
}

export const CrewInformationError = ({ error }: Props) => {
	return (
		<div className=' w-full mt-20  flex flex-col justify-center items-center text-center gap-6'>
			<h1 className='text-2xl md:text-4xl font-semibold'>Ops... Something went wrong</h1>
			<p className='text-lg text-muted-foreground'>{error?.message}</p>

			<div className='flex items-center gap-4 mt-10'>
				<Link href='/' className={buttonVariants({ variant: 'secondary' })}>
					Back home
				</Link>
				<Link href='/task/1' className={buttonVariants({ variant: 'default' })}>
					Try again
				</Link>
			</div>
		</div>
	);
};
