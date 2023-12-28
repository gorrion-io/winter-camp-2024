import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { CrewMember as CrewMemberType } from '@/types/crewMember';

interface Props {
	member: CrewMemberType;
}

export const CrewMember = ({ member: { fullName, age, nationality, profession } }: Props) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{fullName}</CardTitle>
				<CardDescription>Lorem, ipsum.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{age}</p>
				<p>{nationality}</p>
				<p>{profession}</p>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
};
