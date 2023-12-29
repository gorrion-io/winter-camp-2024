import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CrewMember as CrewMemberType } from '@/types/crewMember';
import { Globe2, GraduationCap, Hourglass, User } from 'lucide-react';

interface Props {
    member: CrewMemberType;
}

export const CrewMember = ({
    member: { fullName, age, nationality, profession },
}: Props) => {
    return (
        <Card className="hover:scale-[1.02] transition-transform duration-200">
            <CardHeader>
                <CardTitle className="flex gap-2">
                    <User /> <span>{fullName}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <Hourglass size={16} />
                    <span>{age}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Globe2 size={16} />
                    <span>{nationality}</span>
                </div>
                <div className="flex items-center gap-2">
                    <GraduationCap size={16} />
                    <span>{profession}</span>
                </div>
            </CardContent>
        </Card>
    );
};
