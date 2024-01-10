/** @format */

import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main
			className={`flex min-h-screen flex-col place-content-center place-items-center p-24 ${inter.className}`}
		>
			<div className="flex place-items-center">
				<h1 className="text-4xl font-bold text-center">Mars mission 2024</h1>
			</div>
			<div className="flex place-items-center mt-12">
				<Link href="/task/1">Go to task</Link>
			</div>
		</main>
	);
}
