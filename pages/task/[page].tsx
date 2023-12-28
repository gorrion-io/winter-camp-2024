import React from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'

import SingleCrewMember from '../../components/SingleCrewMemberCard/SingleCrewMemberCard'
import Pagination from '../../components/Pagination/Pagination'
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler'
import { CrewMemberType } from '../../types/crewTypes'
import FlexContainer from '@/components/FlexContainer/FlexContainer'

const fetcher = async (url: string) => {
	const res = await fetch(url)
	return res.json()
}

export default function Task() {
	const router = useRouter()
	const pageNumber = router.query.page
	const apiLink = `/api/crew?page=${pageNumber}`

	const { data, error, isLoading } = useSWR(apiLink, fetcher)

	if (data && data.error) {
		return <ErrorHandler>{data.error}</ErrorHandler>
	}

	if (error) {
		return <ErrorHandler>Failed to load data...</ErrorHandler>
	}

	if (isLoading) {
		return (
			<FlexContainer>
				<p className='text-2xl text-center'>Loading...</p>
			</FlexContainer>
		)
	}

	return (
		<FlexContainer>
			<h1 className='text-5xl mb-4 text-center'>Crew Team:</h1>
			<div className='flex flex-col place-items-center'>
				<ul className='flex flex-wrap gap-8 place-content-center p-4 max-w-[1300px]'>
					{data.paginatedCrewData.map((item: CrewMemberType, index: number) => (
						<SingleCrewMember singleCrewMemberData={item} key={index} />
					))}
				</ul>
				<Pagination paginationNumber={data.paginationNumber} />
			</div>
		</FlexContainer>
	)
}

/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */
