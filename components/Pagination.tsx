import { useEffect } from "react";
import styles from "../styles/pagination.module.css";
import { useRouter } from "next/router";
import { useFetch } from "../context/FetchProvider";
import PaginationSelector from "./PaginantionSelector";
import PaginationRangeNumbers from "./PaginationRangeNumbers";

const RANGE_NUMBER_PAGINATION = 4;
const FIRST_PAGE = 1;

export const FIRST_LAST_NUMBER_PAGINATION = 2;
export function generateRangeNumbersPagination(start: number, end: number) {
  if (RANGE_NUMBER_PAGINATION >= end - FIRST_LAST_NUMBER_PAGINATION) {
    start = FIRST_LAST_NUMBER_PAGINATION;
    return Array.from(
      { length: end - FIRST_LAST_NUMBER_PAGINATION },
      (_, index) => start + index
    );
  }

  start = start == FIRST_PAGE ? start + FIRST_PAGE : start;
  start =
    start + RANGE_NUMBER_PAGINATION > end
      ? end - RANGE_NUMBER_PAGINATION
      : start;

  return Array.from(
    { length: RANGE_NUMBER_PAGINATION },
    (_, index) => start + index
  );
}

export default function Pagination() {
  const { data, pageNumber, setPageNumber, rangeNumberPagination } = useFetch();

  const router = useRouter();

  useEffect(() => {
    const { page } = router.query;

    if (page && !isNaN(Number(page))) {
      setPageNumber(Number(page));
    }
  }, [router.query, setPageNumber]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= data.pages && newPage !== pageNumber) {
      setPageNumber(newPage);
      router.push(`/task/${newPage}`);
    }
  };

  return (
    <>
      <nav
        className={styles.navigationContainer}
        aria-label="Page navigation example"
      >
        <PaginationSelector />
        <ul className={styles.navigationList}>
          {data.pages > 1 ? (
            <>
              <li>
                <a
                  href="#"
                  className={styles.navigationLink}
                  onClick={() => handlePageChange(1)}
                >
                  first
                </a>
              </li>
              <li>
                <button
                  className={styles.navigationButton}
                  onClick={() => handlePageChange(pageNumber - 1)}
                  disabled={pageNumber <= 1}
                >
                  Prev
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.navigationNumber} ${
                    1 === pageNumber ? `${styles.navigationNumberDark}` : ""
                  }`}
                  onClick={() => handlePageChange(1)}
                >
                  1
                </a>
              </li>
            </>
          ) : (
            ""
          )}
          <PaginationRangeNumbers handlePageChange={handlePageChange} />
          {data.pages > 1 ? (
            <>
              <li>
                <a
                  href="#"
                  className={`${styles.navigationNumber} ${
                    data.pages === pageNumber
                      ? `${styles.navigationNumberDark}`
                      : ""
                  }`}
                  onClick={() => handlePageChange(data.pages)}
                >
                  {data.pages}
                </a>
              </li>
              <li>
                <button
                  className={styles.navigationButton}
                  onClick={() => handlePageChange(pageNumber + 1)}
                  disabled={pageNumber >= data.pages}
                >
                  Next
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className={styles.navigationLink}
                  onClick={() => handlePageChange(data.pages)}
                >
                  last
                </a>
              </li>
            </>
          ) : (
            ""
          )}
        </ul>
      </nav>
    </>
  );
}
