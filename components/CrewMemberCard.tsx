import { getProfessionImage } from "@/lib/getProfessionImage";
import { CrewMember } from "@/types";
import Image from "next/image";
import React from "react";

type CrewMemberCardProps = {
  member: CrewMember;
};

const CrewMemberCard = ({ member }: CrewMemberCardProps) => {
  const { age, fullName, nationality, profession } = member; // destructuring Props
  return (
    <div className="w-full shadow-xl card max-w-96 bg-base-100">
      <figure className="h-[200px] relative">
        <Image
          className="object-cover"
          fill
          src={getProfessionImage(profession)}
          alt={`${member.profession} image`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {fullName}
          <div className="badge badge-secondary">{age}</div>
        </h2>
        <p>{`This ${profession} comes from ${nationality} and is a member of our crew.`}</p>
        <div className="justify-end card-actions">
          <div className="badge badge-outline">{nationality}</div>
          <div className="badge badge-outline">{profession}</div>
        </div>
      </div>
    </div>
  );
};

export default CrewMemberCard;
