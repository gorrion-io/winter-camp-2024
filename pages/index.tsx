import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col place-content-center place-items-center p-24 ${inter.className}`}
    >
      <div className="flex flex-col items-center justify-center p-8 shadow-2xl ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-center">
            Winter Camp 2024 Recruitment Task
          </h1>
          <h2 className="text-2xl">by Rafał Fikus</h2>
        </div>
        <div className="flex mt-12 place-items-center">
          <Link
            href="/task/1"
            className="p-6 text-lg text-white transition bg-blue-500 hover:bg-blue-600"
          >
            Go to task
          </Link>
        </div>
      </div>
    </main>
  );
}
