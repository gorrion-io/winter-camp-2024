/** @format */
"use client";

import { MEMBERS_ON_PAGE } from "@/lib/constatnts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export interface PaginationProps {
	lengthArray: number;
	page: number;
}

export const Pagination = ({ lengthArray = 0, page }: PaginationProps) => {
	const pages = Math.ceil(lengthArray / MEMBERS_ON_PAGE);
	const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1);

	return (
		<div className="flex items-center justify-center bg-transparent px-4 sm:px-6">
			<nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
				<Link
					href={`/task/${page - 1}`}
					className={`${
						page === 1 ? "invisible" : "visible"
					} relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
				>
					<span className="sr-only">Previous</span>

					<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
				</Link>
				{pageNumbers.map((number) => {
					return (
						<Link
							key={number}
							href={`/task/${number}`}
							className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400 focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
								page === number
									? "bg-amber-800 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
									: " ring-1 ring-inset text-gray-400 ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
							}`}
						>
							{number}
						</Link>
					);
				})}
				<Link
					href={`/task/${page + 1}`}
					className={`${
						page < pages ? "visible" : "invisible"
					} relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
				>
					<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
				</Link>
			</nav>
		</div>
	);
};
