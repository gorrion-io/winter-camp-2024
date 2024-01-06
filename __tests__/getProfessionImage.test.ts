import { getProfessionImage } from "@/lib/getProfessionImage";

describe("getProfessionImage", () => {
  it("should return correct image paths for different professions", () => {
    expect(getProfessionImage("doctor")).toBe("/assets/doctorImg.png");
    expect(getProfessionImage("engineer")).toBe("/assets/engineerImg.jpg");
    expect(getProfessionImage("astronaut")).toBe("/assets/astronautImg.png");
    expect(getProfessionImage("unknown")).toBe("/assets/noPhotoMember.jpg");
  });
});
