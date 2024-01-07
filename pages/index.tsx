import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col place-content-center place-items-center p-24 ${inter.className}`}
    >
      <Head>
        <title>Winter Camp 2024</title>
      </Head>
      <div className="flex flex-col place-items-center rounded-lg np-effect p-8">
        <h1 className="text-4xl font-bold text-center">
          Winter Camp 2024 Recruitment Task
        </h1>
        <Link
          className="mt-10 px-4 py-2 rounded-full np-btn hover:text-[#121212] hover:bg-gradient-to-br from-[#2b4055] to-[#334c65]"
          href="/task/1"
        >
          Go to task
        </Link>
      </div>
    </main>
  );
}
