import React from 'react'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import FlexContainer from '../FlexContainer/FlexContainer'

type MyComponentProps = {
	children: ReactNode
}

const ErrorHandler: React.FC<MyComponentProps> = ({ children }) => {
	const router = useRouter()
	return (
		<FlexContainer>
			<p className='text-2xl text-center'>{children}</p>
			<button
				className='text-xl text-center mt-8 rounded bg-slate-500 px-8 py-3 hover:bg-slate-700 duration-300'
				onClick={() => router.push('/task/1')}>
				Go back
			</button>
		</FlexContainer>
	)
}

export default ErrorHandler
