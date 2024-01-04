import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React from "react";
import Link from "next/link";
import { Data, ErrorResponse } from "../api/crew";

const fetchCrew = async (page: number): Promise<Data | ErrorResponse> => {
  const { data } = await axios.get(`/api/crew?page=${page}`);
  return data;
};

const CrewPage = () => {
  const router = useRouter();
  const { page } = router.query;
  const currentPage = parseInt(page as string, 10);

  const {
    data,
    isLoading,
    isError,
    error: queryError,
  } = useQuery<Data | ErrorResponse>({
    queryKey: ["crew", currentPage],
    queryFn: () => fetchCrew(currentPage),
    enabled: currentPage > 0,
  });

  const isData = (data: Data | ErrorResponse | undefined): data is Data => {
    return data !== undefined && "crew" in data;
  };

  const isPageOutOfRange = isData(data) && currentPage > data.totalPages;

  const isErrorPage = isNaN(currentPage) || currentPage < 1;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <header className="text-center py-5 bg-blue-600 text-white mb-5 text-2xl">
        <h1>Crew Members</h1>
      </header>
      {isLoading && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading...</div>
        </div>
      )}
      {(isError || isErrorPage || isPageOutOfRange) && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="p-4 text-center bg-red-500 text-white rounded-lg shadow-lg">
            {isErrorPage && "Page parameter must be a positive integer."}
            {isError &&
              !isErrorPage &&
              `Error loading crew data: ${
                (queryError as AxiosError<ErrorResponse>).response?.data
                  .message ||
                (queryError as AxiosError<ErrorResponse>).message ||
                "Unknown error"
              }`}
            {isPageOutOfRange &&
              !isError &&
              !isErrorPage &&
              "The page number you requested is out of range."}
          </div>
        </div>
      )}
      {!isLoading &&
        !isError &&
        !isErrorPage &&
        !isPageOutOfRange &&
        isData(data) &&
        "crew" in data && (
          <>
            <div className="flex-grow flex flex-wrap justify-center items-start p-5 gap-5">
              {data.crew.map((member, index) => (
                <div
                  key={member.fullName + index}
                  className="bg-white shadow-md rounded-lg p-5 w-60 text-center flex flex-col justify-between"
                >
                  <h3 className="text-blue-600 text-2xl mb-2">
                    {member.fullName}
                  </h3>
                  <p>Nationality: {member.nationality}</p>
                  <p>Age: {member.age}</p>
                  <p>Profession: {member.profession}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center py-5 mt-auto">
              {currentPage > 1 && (
                <Link legacyBehavior href={`/task/${currentPage - 1}`} passHref>
                  <a className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold">
                    Previous
                  </a>
                </Link>
              )}
              {currentPage < data.totalPages && (
                <Link legacyBehavior href={`/task/${currentPage + 1}`} passHref>
                  <a className="bg-blue-600 text-white mx-2 px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-bold">
                    Next
                  </a>
                </Link>
              )}
            </div>
          </>
        )}
    </div>
  );
};

export default CrewPage;
