import React from 'react'
import { CrewMemberType } from '../../types/crewTypes'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'

type ComponentType = {
	singleCrewMemberData: CrewMemberType
}

const SingleCrewMember: React.FC<ComponentType> = ({ singleCrewMemberData }) => {
	const professionName = capitalizeFirstLetter(singleCrewMemberData.profession)

	return (
		<div className='flex flex-col place-items-center place-content-center bg-sky-700 rounded w-60 h-60'>
			<h2 className='text-2xl text-center font-semibold'>{singleCrewMemberData.fullName}</h2>
			<p className='text-xl text-center mt-2'>
				Country: <span className='font-semibold'>{singleCrewMemberData.nationality}</span>
			</p>
			<p className='text-xl text-center mt-2'>
				Age: <span className='font-semibold'>{singleCrewMemberData.age}</span>
			</p>
			<p className='text-xl text-center mt-2'>
				Profession: <span className='font-semibold'>{professionName}</span>
			</p>
		</div>
	)
}

export default SingleCrewMember
