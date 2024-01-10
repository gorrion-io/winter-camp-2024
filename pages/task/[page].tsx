/**
 * @format
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { useAstronautsList } from "../customHooks/useAstronautsList";
import { Pagination } from "../components/Pagination/Pagination";
import { ACard } from "../components/ACard/ACard";
import { useRouter } from "next/router";
import { CrewMember } from "@/models/CrewMembers";

const hoverStyles = [
	"hover:[&>div:not:hover>div:first::child]:blur-lg",
	"hover:[&>div:not:hover>div:first::child]:brightness-50",
	"hover:[&>div:not:hover>div:first::child]:contrast-80",
	"hover:[&>div:not:hover>div:first::child]:saturate-0",
	"hover:[&>div:not:hover>div:last::child>h2]:text-transparent",
	"hover:[&>div:not:hover>div:last::child>h2]:shadow-md",
];

export default function Task() {
	const {
		query: { page },
	} = useRouter();
	const currentPage = page ? Number(page) : 1;

	const { status, data } = useAstronautsList(currentPage);

	return (
		<div className="h-screen">
			{status === "pending" ? (
				<div>Loading...</div>
			) : (
				<>
					<div
						className={`md:container grid grid-cols-3 gap-6 mx-auto p-4 ${hoverStyles.join(" ")}`}
					>
						{data.membersOnPage?.map((astronaut: CrewMember, idx: number) => {
							return (
								<ACard
									key={`${astronaut.fullName}-${idx}}`}
									data={astronaut}
									width={300}
									height={300}
									backgroundImage={""}
								/>
							);
						})}
					</div>
					<Pagination lengthArray={data.countMembers} page={currentPage} />
				</>
			)}
		</div>
	);
}
