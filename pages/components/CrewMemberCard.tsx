import React from 'react';
import { CrewMember } from '../../lib/crew';

interface CrewMemberCardProps {
  member: CrewMember;
}

const CrewMemberCard: React.FC<CrewMemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 w-60 text-center flex flex-col justify-between">
      <h3 className="text-blue-600 text-2xl mb-2">{member.fullName}</h3>
      <p>Nationality: {member.nationality}</p>
      <p>Age: {member.age}</p>
      <p>Profession: {member.profession}</p>
    </div>
  );
};

export default CrewMemberCard;