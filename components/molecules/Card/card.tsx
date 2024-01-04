import { Typography } from "../../../components/atoms/typography/typography";
import { CrewMember } from "@/lib/type";
import { memo } from "react";

export type CardType = {
  id: number;
  member: CrewMember;
};

export const Card = memo<CardType>(
  ({ id, member: { fullName, nationality, age, profession } }) => {
    return (
      <div className="flex flex-col bg-ecru w-full max-w-[340px] h-[360px] rounded-xl shadow-lg p-6 border-[1px] border-black cursor-pointer">
        <Typography tag="h5" textSize="lg" textColor="black">
          {fullName}
        </Typography>
        <Typography tag="h4" textSize="lg" textColor="black">
          {age}
        </Typography>
        <Typography tag="h3" textSize="lg" textColor="black">
          {nationality}
        </Typography>
        <Typography tag="p" textSize="lg" textColor="black">
          {profession}
        </Typography>
      </div>
    );
  }
);
