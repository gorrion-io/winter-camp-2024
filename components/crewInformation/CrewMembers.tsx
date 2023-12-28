import { CrewMember as CrewMemberType } from '@/types/crewMember';
import React from 'react';
import { CrewMember } from './CrewMember';

interface Props {
	crew?: CrewMemberType[];
}

export const CrewMembers = ({ crew }: Props) => {
	console.log(crew);
	return (
		<>
			<h1 className='mt-4 mb-10 text-xl sm:text-2xl font-semibold'>
				Informations about <span className='text-primary font-bold'>crew members</span>
			</h1>
			<div className='w-full gap-4 max-w-5xl mx-auto   grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2     '>
				{crew && crew.map((crewMember, i) => <CrewMember member={crewMember} key={i} />)}
			</div>
		</>
	);
};
