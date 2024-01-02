import { createContext, ReactNode, useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { generateRangeNumbersPagination } from "../components/Pagination";
import { CrewMember, Page } from "@/lib/models";
import styles from "../styles/page.module.css";

type ReactProps = {
  children: ReactNode;
};

type FetchContextProps = {
  data: Page<CrewMember>;
  pageNumber: number;
  setPageNumber: (pageNumer: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  rangeNumberPagination: number[];
};

const PAGE_SIZE = 8;
const FIRST_PAGE = 1;

const FetchContext = createContext({} as FetchContextProps);

export function useFetch() {
  return useContext(FetchContext);
}

export function FetchProvider({ children }: ReactProps) {
  const [pageNumber, setPageNumber] = useState(FIRST_PAGE);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const [rangeNumberPagination, setRangeNumbersPagination] = useState(
    [] as number[]
  );

  const { isError, error, isLoading, data } = useQuery({
    queryKey: ["crew", { page: pageNumber, size: pageSize }],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/api/crew?page=${pageNumber}&size=${pageSize}`
      );
      setRangeNumbersPagination(
        generateRangeNumbersPagination(pageNumber, response.data.pages)
      );
      return response.data;
    },
  });

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <h1> Loading... </h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles.errorContainer}>
        <h1> An error has occurred: + {!error}</h1>
      </div>
    );
  }

  return (
    <FetchContext.Provider
      value={{
        data,
        pageNumber,
        setPageNumber,
        pageSize,
        setPageSize,
        rangeNumberPagination,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}
