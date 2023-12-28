import { CrewMember as CrewMemberType } from '@/types/crewMember';
import React from 'react';
import { CrewMember } from './CrewMember';

interface Props {
	crew?: CrewMemberType[];
}

export const CrewMembers = ({ crew }: Props) => {
	console.log(crew);
	return (
		<div className='w-full gap-4   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2    items-center  '>
			{crew && crew.map((crewMember, i) => <CrewMember member={crewMember} key={i} />)}
		</div>
	);
};
