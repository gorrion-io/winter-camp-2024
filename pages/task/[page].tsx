/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";
import { FaUserAstronaut } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { GiCosmicEgg } from "react-icons/gi";

type CrewMember = {
  id: number;
  fullName: string;
  nationality: string;
  age: number;
  profession: string;
};

const fetchCrewMembers = async (page: number) => {
  const res = await fetch(`/api/crew?page=${page}`);
  const data: CrewMember[] = await res.json();
  return data;
};

const Task = () => {
  const router = useRouter();
  const page = Number(router.query.page) || 1;

  const { status, data, isFetching, isPreviousData } = useQuery({
    queryKey: ["crewMembers", page],
    queryFn: () => fetchCrewMembers(page),
    keepPreviousData: true,
    staleTime: Infinity,
  });

  if (status === "loading")
    return (
      <div className="min-h-screen text-xl w-full flex items-center justify-center">
        Loading...
      </div>
    );
  if (status === "error")
    return (
      <div className="min-h-screen text-xl w-full flex items-center justify-center">
        Error loading users
      </div>
    );

  const pageNumbers = Array.from({ length: 4 }, (_, i) => i + 1);

  const goToPage = (newPage: number) => {
    router.push(`/task/${newPage}`);
  };

  const goToNextPage = () => {
    router.push(`/task/${page + 1}`);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      router.push(`/task/${page - 1}`);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-950 flex justify-center items-center flex-col gap-8 font-poppins py-8">
      <h1 className="sm:text-6xl text-4xl font-bold">Mars Crew</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {data?.map(({ id, fullName, nationality, age, profession }) => (
          <div
            key={id}
            className="pt-4 px-8 bg-gray-900 flex flex-col justify-center gap-2 rounded-lg xl:text-lg text-base min-w-40 min-h-60 text-slate-50 relative"
          >
            {profession === "astronaut" ? (
              <FaUserAstronaut className="opacity-30 text-3xl absolute top-4 left-4" />
            ) : profession === "doctor" ? (
              <FaUserDoctor className="opacity-30 text-3xl absolute top-4 left-4" />
            ) : (
              <MdEngineering className="opacity-30 text-3xl absolute top-4 left-4" />
            )}
            <GiCosmicEgg className="opacity-5 text-9xl absolute top-4 right-4" />
            <span className="">
              <span className="text-amber-500">Name: </span> {fullName}
            </span>
            <span className="">
              <span className="text-amber-500">Country: </span>
              {nationality}
            </span>
            <span className="">
              <span className="text-amber-500">Age: </span>
              {age}
            </span>
            <span className="capitalize">
              <span className="text-amber-500">Profession: </span>
              {profession}
            </span>
            <div className="w-full h-6 bg-yellow-700 absolute left-0 bottom-0 rounded-b-lg"></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={goToPreviousPage}
          disabled={page === 1 || isPreviousData}
          className="p-5 enabled:hover:bg-slate-50  enabled:hover:text-slate-950 transition-all w-28 font-bold disabled:cursor-not-allowed disabled:text-slate-700"
        >
          Previous
        </button>
        <div>
          {pageNumbers.map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              disabled={pageNum === page}
              className="sm:w-20 w-6 py-5 disabled:border-b-4 disabled:border-yellow-700 disabled:cursor-not-allowed enabled:hover:bg-slate-50 enabled:hover:text-slate-950 transition-all font-bold"
            >
              {pageNum}
            </button>
          ))}
        </div>
        <button
          onClick={goToNextPage}
          disabled={page > 3 || isFetching}
          className="p-5 enabled:hover:bg-slate-50  enabled:hover:text-slate-950 transition-all w-28 font-bold disabled:cursor-not-allowed disabled:text-slate-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Task;
