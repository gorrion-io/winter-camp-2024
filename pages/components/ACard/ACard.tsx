/** @format */
import { Typography } from "../ATitle/Typography";
import { ACardProps } from "./type";

export const ACard = ({ data }: ACardProps) => {
	const { fullName, nationality, age, profession } = data;

	const backgroundStyles = `bg-[url('https://source.unsplash.com/random?sig=${Math.floor(
		Math.random() * 10
	)}')]`;

	return (
		<div className="card list-none relative bg-slate-400 h-60 min-w-60 rounded-2xl w-full flex justify-center cursor-pointer hover:scale-110 before:content-[''] before:block before:pb-10 hover:[&>div:last-child>h2]:scale-110 hover:[&>div:firs-child]:scale-110">
			<div
				className={`card__background bg-slate-500  w-50 h-30 rounded-2xl bg-cover bg-center bottom-0 left-0 absolute right-0 top-0 origin-center scale-100 translate-z-0 duration-200 ease-linear brightness-75 saturate-150 contrast-75`}
			></div>
			<div className="card__content absolute flex flex-col justify-between w-full left-0 top-0 py-4 px-6">
				<div className="flex justify-center pb-4">
					<img
						className={`${backgroundStyles} w-20
					h-20 rounded-full `}
						src={`https://ui-avatars.com/api/?name=${data.fullName}?background=0D8ABC&color=fff`}
						alt="avatar"
					/>
				</div>
				<Typography>Name : {fullName}</Typography>
				<Typography>Nationality : {nationality}</Typography>
				<Typography>Age : {age} years</Typography>
				<Typography>Profession : {profession}</Typography>
			</div>
		</div>
	);
};
