import React from 'react'
import { ReactNode } from 'react'

type MyComponentProps = {
	children: ReactNode
}

const FlexContainer: React.FC<MyComponentProps> = ({ children }) => {
	return <div className='flex flex-col min-h-screen place-content-center place-items-center p-24'>{children}</div>
}

export default FlexContainer
