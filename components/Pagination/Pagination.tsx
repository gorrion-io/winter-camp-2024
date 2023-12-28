import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type ComponentType = {
	paginationNumber: number
}

const Pagination: React.FC<ComponentType> = ({ paginationNumber }) => {
	const pages = Array(paginationNumber).fill(null)
	const router = useRouter()
	const currentPage = router.query.page ? parseInt(router.query.page as string) : 1

	return (
		<ul className='flex gap-8 place-content-center p-4'>
			{pages.map((page, index) => (
				<li
					key={index}
					className={`text-2xl cursor-pointer hover:text-slate-300 ${
						currentPage === index + 1 ? 'text-blue-500' : ''
					}`}>
					<Link href={`/task/${index + 1}`}>{index + 1}</Link>
				</li>
			))}
		</ul>
	)
}

export default Pagination
