import { memo } from "react";
import { Button } from "../../../../components/atoms/button/button";
import Link from "next/link";
import { Typography } from "../../../../components/atoms/typography/typography";
import { BgInfoCardType } from "../../../../constant/styles/colors";

export type InfoType = "ERROR" | "WARRNING" | "SUCCESS";

export type InfoCardType = {
  message: string | undefined;
  type: InfoType;
};

export const InfoCard = memo<InfoCardType>(({ message, type }) => {
  const infoCardText = message ? message : "There is no data for pagination";

  return (
    <div
      className={`flex flex-col m-auto mt-8 w-[500px] p-4 ${BgInfoCardType[type]} bg-primaryBlue shadow-lg h-full justify-center items-center  rounded-xl`}
    >
      <Typography tag="cite" textSize="2xl" textColor="white" fontFamily="mono">
        {infoCardText}
      </Typography>
      <Link href="/" passHref>
        <Button
          size="large"
          bgColor="transparent"
          space="3xl"
          position="center"
        >
          Go Back
        </Button>
      </Link>
    </div>
  );
});
