import React from "react";
import {
  faUserAstronaut,
  faUserDoctor,
  faUser,
  IconDefinition,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CrewMember } from "@/lib/types/CrewMemberTypes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import InfoItem from "./InfoItem";

type ProfessionIconMap = {
  [key in string]: IconDefinition;
};

const professionIcons: ProfessionIconMap = {
  engineer: faWrench,
  doctor: faUserDoctor,
  astronaut: faUserAstronaut,
};

const getProfessionIcon = (profession: string): IconProp => {
  if (profession in professionIcons) {
    return professionIcons[profession] as IconProp;
  }

  return faUser as IconProp;
};

type Props = { crewMember: CrewMember };

const CrewMemberCard = ({ crewMember }: Props) => {
  const { fullName, age, nationality, profession } = crewMember;

  const icon = getProfessionIcon(profession);

  return (
    <li className="group flex flex-col rounded bg-slate-800  text-white ring-1 ring-slate-900/5">
      <div className="align-center flex flex-col items-center gap-4 p-4">
        <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-slate-700 transition-colors group-hover:bg-blue-500">
          <FontAwesomeIcon icon={icon} size="4x" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl">{fullName}</h2>
          <p className="capitalize text-slate-400">{profession}</p>
        </div>
      </div>

      <div className="mt-auto flex justify-around rounded-b bg-slate-900 p-4">
        <InfoItem title="Age" content={age} />
        <InfoItem title="Nationality" content={nationality} />
      </div>
    </li>
  );
};

export default CrewMemberCard;
