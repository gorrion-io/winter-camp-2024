// generate image src for each profession
export const getProfessionImage = (profession: string): string => {
    switch (profession) {
      case "doctor":
        return "/assets/doctorImg.png";
      case "engineer":
        return "/assets/engineerImg.jpg";
      case "astronaut":
        return "/assets/astronautImg.png";
      default:
        return "/assets/noPhotoMember.jpg";
    }
  };
  