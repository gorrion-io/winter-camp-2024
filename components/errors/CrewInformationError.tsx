'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

interface Props {
	error: Error | null;
}

export const CrewInformationError = ({ error }: Props) => {
	const router = useRouter();

	return (
		<div className=' w-full mt-20  flex flex-col justify-center items-center text-center gap-6'>
			<h1 className='text-2xl md:text-4xl font-semibold'>Ops... Something went wrong</h1>
			<p className='text-lg text-muted-foreground'>{error?.message}</p>

			<div className='flex items-center gap-4 mt-10'>
				<Button
					variant={'secondary'}
					onClick={() => {
						router.push('/');
					}}>
					Back home
				</Button>
				<Button
					onClick={() => {
						router.reload();
					}}>
					Try again
				</Button>
			</div>
		</div>
	);
};
