import { Typography } from "../../../components/atoms/typography/typography";
import { CrewMember } from "@/lib/type";
import { proffesionImage } from "../../../types/image";
import Image from "next/image";
import { memo } from "react";

export type CardType = {
  id: number;
  member: CrewMember;
};

export const Card = memo<CardType>(
  ({
    id,

    member: { fullName, nationality, age, profession },
  }) => {
    return (
      <div className="flex relative overflow-hidden flex-col hover:scale-105  transition-all ease-in-out duration-300 bg-ecru w-full max-w-[340px] h-[360px] rounded-xl shadow-lg p-6 cursor-pointer">
        <Image
          src={proffesionImage[profession]}
          alt={profession}
          className="absolute top-0 right-0 w-full h-full z-0"
        />
        <div className="flex flex-col w-full mt-auto z-50">
          <Typography tag="h5" textSize="xl" textColor="white">
            {fullName}
          </Typography>
          <Typography tag="h4" textSize="lg" textColor="white">
            Age: {age}
          </Typography>
          <Typography tag="h3" textSize="lg" textColor="white">
            Country: {nationality}
          </Typography>
          <Typography
            tag="cite"
            textSize="2xl"
            textColor="white"
            fontFamily="mono"
          >
            {profession}
          </Typography>
        </div>
      </div>
    );
  }
);
