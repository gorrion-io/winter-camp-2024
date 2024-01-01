import React from "react";
import { CrewMember } from "@/lib/crew";

const Card = (props: { member: CrewMember }) => {
  const { member } = props;
  return (
    <li className="border-2 rounded-md p-4 min-w-64 w-1/5 shadow-white shadow-md">
      <Info value={member.fullName} label="Name" />
      <Info value={member.age} label="Age" />
      <Info value={member.profession} label="Profession" />
      <Info value={member.nationality} label="Nationality" />
    </li>
  );
};

const Info = (props: { value: string | number; label: string }) => {
  let { value, label } = props;
  if (label === "Profession" && typeof value === "string") {
    value = value.charAt(0).toUpperCase() + value.slice(1);
  }
  return (
    <div className="">
      <span className="underline text-xs font-mono underline-offset-1">
        {label}:
      </span>
      {` ${value}`}
    </div>
  );
};

export default Card;
