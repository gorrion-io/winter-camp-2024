import astronautPng from "@/assets/images/astronautIcon.png"
import Image from "next/image";
interface CardProps {
    firstName: string;
    lastName: string;
    nationality: string;
    age: number;
    profession: string;
    image:string
}
const Card: React.FC<CardProps>  = ({ firstName, lastName, nationality, age, profession, image }) => {
    return (
        <div className="relative max-w-md h-56 mx-auto bg-gradient-card rounded-md  shadow-md my-6 text-center after:bg-gradient-card-after after:absolute after:-top-0.5 after:bg-blue-400 after:-left-0.5 after:-right-0.5 after:-bottom-0.5 after:-z-10 after:rounded-md ">
            <div className={"relative w-250px pt-3 ml-2"}>
                <Image src={astronautPng} width={200} height={200} alt={"astronaut"} className={"absolute "}></Image>
                <Image src={image} alt="cat" width={50} height={50} className={"absolute w-100px h-100px  top-[calc(45px)] left-[calc(50%-75px)] rounded-999px"}></Image>
            </div>

            <div className="px-6 py-4 pl-52 pt-10">
                <div className="font-bold text-xl mb-2 text-w">
                    {firstName} {lastName}
                </div>
                <div className="text-gray-400 font-medium text-base">
                    <p>Nationality: {nationality}</p>
                    <p>Age: {age}</p>
                    <p>Profession: {profession}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;