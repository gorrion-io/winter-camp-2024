import React from 'react';
import { LoadingState } from '../ui/loading-state';

export const CrewInformationLoading = () => {
	return (
		<div className='w-full mt-32 flex justify-center items-center'>
			<LoadingState className='w-12 h-12' />
		</div>
	);
};
