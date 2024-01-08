import { BaseMemberType } from "@/lib/type";
import { StaticImageData } from "next/image";

import Astronaut from "../public/images/astronaut.jpg";
import Dna from "../public/images/dna.jpg";
import Code from "../public/images/code.jpg";

export const proffesionImage: Record<
  BaseMemberType["profession"],
  StaticImageData
> = {
  engineer: Code,
  astronaut: Astronaut,
  doctor: Dna,
} as const;
