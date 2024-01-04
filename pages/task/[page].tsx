import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React from "react";
import Link from "next/link";
import { Data, ErrorResponse } from "../api/crew";
import CrewMemberCard from "../components/CrewMemberCard";
import Pagination from "../components/Pagination";
import ErrorComponent from "../components/Error";
import Loading from "../components/Loading";

export const fetchCrew = async (page: number): Promise<Data | ErrorResponse> => {
  const { data } = await axios.get(`/api/crew?page=${page}`);
  return data;
};

const CrewPage = () => {
  const router = useRouter();
  const { page } = router.query;

  const currentPage = parseInt(page as string, 10);
  console.log("currentPage after setting: ", currentPage);

  console.log("currentPage before useQuery: ", currentPage);

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
  console.log("currentPage after useQuery: ", currentPage);

  const isData = (data: Data | ErrorResponse | undefined): data is Data => {
    return data !== undefined && "crew" in data;
  };

  const isPageOutOfRange = isData(data) && currentPage > data.totalPages;

  const isErrorPage = isNaN(currentPage) || currentPage < 1;

  if (!router.isReady) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-200 to-gray-300">
      <header className="text-center py-5 bg-blue-600 text-white mb-5 text-2xl">
        <h1>Crew Members</h1>
      </header>
      {isLoading && <Loading></Loading>}
      {!isLoading && (isError || isErrorPage || isPageOutOfRange) && (
        <ErrorComponent
          isPageOutOfRange={isPageOutOfRange}
          isError={isError}
          isErrorPage={isErrorPage}
          queryError={queryError as AxiosError<ErrorResponse>}
        ></ErrorComponent>
      )}
      {!isLoading &&
        !isError &&
        !isErrorPage &&
        !isPageOutOfRange &&
        isData(data) && (
          <>
            <div className="flex-grow flex flex-wrap justify-center items-start p-5 gap-5">
              {data.crew.map((member, index) => (
                <CrewMemberCard
                  key={member.fullName + index}
                  member={member}
                ></CrewMemberCard>
              ))}
            </div>
            <Pagination data={data} currentPage={currentPage}></Pagination>
          </>
        )}
    </div>
  );
};

export default CrewPage;
